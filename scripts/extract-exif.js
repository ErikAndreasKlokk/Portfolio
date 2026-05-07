// Skript for å hente ut EXIF-data fra bilder og bake det inn som statisk TypeScript-data.
// Kjøres manuelt: node scripts/extract-exif.js
// Genererer: src/lib/assets/photos/metadata.ts

import { readdir, writeFile, readFile } from 'fs/promises';
import { resolve, join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const photosDir = resolve(__dirname, '../src/lib/assets/photos');
const outputFile = resolve(__dirname, '../src/lib/assets/photos/metadata.ts');

const { default: exifr } = await import('exifr');

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic']);
const files = (await readdir(photosDir)).filter(f => imageExtensions.has(extname(f).toLowerCase()));

// Last inn eksisterende metadata for å gjenbruke allerede løste stedsdata
let existingMetadata = {};
try {
    const raw = await readFile(outputFile, 'utf-8');
    // Hent ut JSON-blokken fra TypeScript-filen
    const match = raw.match(/= (\{[\s\S]*\});/);
    if (match) existingMetadata = JSON.parse(match[1]);
} catch {
    // Ingen eksisterende fil — starter fra scratch
}

/**
 * Reverse geocoding via Nominatim (OpenStreetMap) — ingen API-nøkkel nødvendig.
 * Returnerer en lesbar stedsbeskrivelse (by/bydel + land) eller undefined.
 * @param {number} lat
 * @param {number} lon
 * @returns {Promise<string | undefined>}
 */
async function reverseGeocode(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=12&addressdetails=1`;
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'portfolio-photo-metadata-script/1.0',
                'Accept-Language': 'en'
            }
        });
        if (!res.ok) return undefined;
        const json = await res.json();
        const addr = json.address ?? {};

        // Bygg stedsnavn: bydel/by → by/fylke → land (utelat land dersom JP)
        const parts = [
            addr.suburb ?? addr.neighbourhood ?? addr.quarter,
            addr.city ?? addr.town ?? addr.village ?? addr.municipality,
            addr.state ?? addr.region,
        ].filter(Boolean);

        // Fjern dubletter (f.eks. bydel === by)
        const unique = [...new Map(parts.map(p => [p.toLowerCase(), p])).values()];

        // Maks to nivåer for korthet
        return unique.slice(0, 2).join(', ') || undefined;
    } catch (err) {
        console.warn(`  Reverse geocoding feilet (${lat}, ${lon}):`, err.message);
        return undefined;
    }
}

/** @type {Record<string, { camera?: string; dateTaken?: string; location?: string }>} */
const metadata = {};

for (const file of files) {
    const filePath = join(photosDir, file);
    try {
        const data = await exifr.parse(filePath, {
            tiff: true,
            exif: true,
            gps: true,
            ifd1: false,
        });

        if (data) {
            const make = data.Make?.trim() ?? '';
            const model = data.Model?.trim() ?? '';
            const camera = model.startsWith(make) ? model : [make, model].filter(Boolean).join(' ') || undefined;

            const rawDate = data.DateTimeOriginal ?? data.DateTime;
            const dateTaken = rawDate instanceof Date
                ? rawDate.toISOString().split('T')[0]
                : typeof rawDate === 'string' ? rawDate : undefined;

            // Gjenbruk eksisterende stedsnavn hvis det allerede er løst og er latinskrift
            let location = existingMetadata[file]?.location;
            const isNonLatin = location && /\p{Script=Han}|\p{Script=Hiragana}|\p{Script=Katakana}/u.test(location);
            if (isNonLatin) location = undefined; // tving ny oppslag med engelsk

            if (!location && data.latitude != null && data.longitude != null) {
                console.log(`  Henter sted for ${file} (${data.latitude.toFixed(4)}, ${data.longitude.toFixed(4)})...`);
                location = await reverseGeocode(data.latitude, data.longitude);
                // Nominatim tillater maks 1 req/sek
                await new Promise(r => setTimeout(r, 1100));
            }

            metadata[file] = { camera, dateTaken, location, lat: data.latitude ?? undefined, lon: data.longitude ?? undefined };
        } else {
            metadata[file] = {};
        }
    } catch (err) {
        console.warn(`Kunne ikke lese EXIF for ${file}:`, err.message);
        metadata[file] = {};
    }

    console.log(`${file}:`, metadata[file]);
}

const tsContent = `// Automatisk generert av scripts/extract-exif.js — ikke rediger manuelt.
export const photoMetadata: Record<string, { camera?: string; dateTaken?: string; location?: string; lat?: number; lon?: number }> = ${JSON.stringify(metadata, null, 4)};
`;

await writeFile(outputFile, tsContent, 'utf-8');
console.log(`\nFerdig! Skrev metadata til ${outputFile}`);
