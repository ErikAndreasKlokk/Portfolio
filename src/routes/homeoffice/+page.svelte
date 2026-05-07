<script lang="ts">
    import mainPcImg from "$lib/assets/photos/IMG_1288.jpg";
    import gamingImg from "$lib/assets/photos/IMG_1353.jpg";
    import homelabImg from "$lib/assets/photos/IMG_1404.jpg";

    // Komponenttype-definisjon for setup-elementer
    type ComponentType = 'cpu' | 'gpu' | 'ram' | 'motherboard' | 'storage' | 'psu' | 'case' | 'cooling' | 'keyboard' | 'mouse' | 'mousepad' | 'monitor' | 'audio' | 'camera' | 'chair' | 'control';

    interface SetupItem {
        type: ComponentType;
        title: string;
        desc: string;
        link?: string;
        date?: string;
        groupLabel?: string;
        groupEnd?: boolean;
    }

    interface SetupSection {
        title: string;
        image: string;
        items: SetupItem[];
    }

    const setup: SetupSection[] = [
        {
            title: "Main PC",
            image: mainPcImg,
            items: [
                { type: 'cpu',         title: "AMD Ryzen 7 9800X3D",              date: "Jan 2025",  desc: "8C · 16T · 4.7 GHz base · 5.2 GHz boost · AM5",          link: "https://www.komplett.no/product/1315831/datautstyr/pc-komponenter/prosessorer/amd-ryzen-7-9800x3d-cpu" },
                { type: 'gpu',         title: "Nvidia GeForce RTX 3070 Ti",       date: "Feb 2022",  desc: "ASUS TUF Gaming OC",                                       link: "https://www.komplett.no/product/1188792" },
                { type: 'ram',         title: "Corsair Vengeance RGB DDR5 32GB",  date: "Des 2024",  desc: "2×16GB · 6000 MHz · CL30 · XMP 3.0",                      link: "https://www.komplett.no/product/1246830" },
                { type: 'motherboard', title: "ASUS PRIME X870-P WIFI",           date: "Nov 2024",  desc: "AM5 · ATX · DDR5 up to 8000 MHz · Wi-Fi 7",               link: "https://www.elkjop.no/product/gaming/pc-komponenter/hovedkort/asus-prime-x870-p-wifi-motherboard/842798" },
                { type: 'storage',     title: "Kingston KC3000 1TB",              date: "Nov 2024",  desc: "M.2 NVMe PCIe 4.0 · r/w 7000 / 7000 MB/s",               link: "https://www.elkjop.no/product/gaming/pc-komponenter/intern-lagring/intern-ssd/kingston-kc3000-pcie-40-intern-nvme-ssd-1024-gb/512635" },
                { type: 'storage',     title: "WD BLACK SN750 1TB",               date: "Feb 2022",  desc: "M.2 NVMe · r/w 3470 / 3000 MB/s",                         link: "https://www.komplett.no/product/1121774" },
                { type: 'psu',         title: "Corsair TX750M",                   date: "Feb 2022",  desc: "750W · 80 PLUS Gold · Semi-modular",                      link: "https://www.komplett.no/product/915833" },
                { type: 'cooling',     title: "NZXT Kraken 360 AIO",              date: "Des 2024",  desc: "360mm radiator · AM4 / AM5 · Black",                      link: "https://www.komplett.no/product/1245197" },
                { type: 'cooling',     title: "NZXT F120 RGB",                    date: "Des 2024",  desc: "120mm case fan · 500–1800 RPM · 4-pin PWM · RGB",         link: "https://www.komplett.no/product/1221145" },
                { type: 'case',        title: "Fractal North Charcoal Black Mesh",date: "Des 2024",  desc: "ATX / mATX / Mini-ITX · 2× Aspect 140mm PWM",             link: "https://www.komplett.no/product/1223056" },
            ],
        },
        {
            title: "Office & Gaming",
            image: gamingImg,
            items: [
                { type: 'monitor',  title: "MSI MAG 271QPX QD-OLED",     desc: "27″ · 2560×1440 · 360 Hz · 0.03ms · QD-OLED · Primary",          link: "https://www.proshop.no/Skjerm/265-MSI-MAG-271QPX-2560x1440-360Hz-QD-OLED/3281381" },
                { type: 'monitor',  title: "Acer Predator XB271HU",       date: "Jan 2021", desc: "27″ · 2560×1440 · 165 Hz · IPS · G-Sync · Secondary", link: "https://www.komplett.no/product/859681" },
                { type: 'keyboard', title: "Wooting 80HE Custom",         date: "Mai 2025", groupLabel: "KEYBOARDS", desc: "Geon Raw HE switches · Aluminium case · Keychron Carbon Vibe caps · Primary", link: "https://wooting.io/configurator/wooting-80he" },
                { type: 'keyboard', title: "ZOOM TKL Custom",             date: "Feb 2023", desc: "Gateron CAP V2 Golden Yellow · Black / Forest Green · Secondary", groupEnd: true },
                { type: 'mouse',    title: "WL Mouse BeastX",             desc: "8K polling · 39g · Wireless · Purple",  groupLabel: "MICE", groupEnd: true, link: "https://www.wlmouse.com/en-wl/products/beast-x-8k-wireless-gaming-mouse" },
                { type: 'mousepad', title: "Artisan FX Type-99 XSoft",   groupLabel: "MOUSEPADS", desc: "XXL · XSoft · Gray · Main",               link: "https://www.maxgaming.no/no/musematter/musematte-fx-type-99-soft-xxl-svart" },
                { type: 'mousepad', title: "Artisan FX Zero XSoft",       desc: "XXL · XSoft · Black · Secondary",  groupEnd: true,               link: "https://www.maxgaming.no/no/musematter/musematte-fx-zero-xsoft-xxl-svart" },
                { type: 'audio',    title: "Shure MV7",                   desc: "Dynamic microphone · USB + XLR",                                  link: "https://www.maxgaming.no/no/mikrofoner/mv7-podcast-mikrofon-svart" },
                { type: 'audio',    title: "Elgato Wave XLR",             desc: "XLR audio interface",                                             link: "https://www.komplett.no/product/1242789" },
                { type: 'audio',    title: "Elgato Wave Mic Arm LP",      desc: "Low-profile mic arm",                                             link: "https://www.komplett.no/product/1200519" },
                { type: 'control',  title: "Elgato Stream Deck Mini",     desc: "6-key macro pad",                                                 link: "https://www.komplett.no/product/1081448" },
                { type: 'camera',   title: "Elgato Facecam Full HD",      desc: "1080p · 60 FPS",                                                  link: "https://www.komplett.no/product/1192127" },
                { type: 'chair',    title: "Secretlab TITAN 2020",        desc: "Gaming chair · Black",                                            link: "https://secretlab.eu/collections/titan-series" },
            ],
        },
        {
            title: "Homelab Server",
            image: homelabImg,
            items: [
                { type: 'gpu',         title: "MSI GeForce RTX 2080 Gaming X Trio", date: "Jun 2025",  desc: "Used · 8GB GDDR6 · Compute / gaming",              link: "https://www.komplettbedrift.no/product/1090737" },
                { type: 'cpu',         title: "AMD Ryzen 7 5800X",                   date: "Feb 2022",  desc: "8C · 16T · 3.8 GHz base · 4.7 GHz boost · AM4",   link: "https://www.komplett.no/product/1172187" },
                { type: 'ram',         title: "Kingston FURY Beast DDR4 32GB",       date: "Feb 2022",  desc: "2×16GB · 3600 MHz · CL18",                         link: "https://www.komplett.no/product/1191392" },
                { type: 'motherboard', title: "ASUS ROG Strix B550-E",               date: "Feb 2022",  desc: "AM4 · ATX · DDR4 up to 4400 MHz",                  link: "https://www.komplett.no/product/1159991" },
                { type: 'cooling',     title: "NZXT Kraken X53",                     date: "Feb 2022",  desc: "240mm radiator · 2× 120mm fans",                   link: "https://www.komplett.no/product/1150460" },
                { type: 'psu',         title: "Cooler Master MWE Gold 550 V2",       date: "Des 2024",  desc: "550W · 80 PLUS Gold · Fully modular",               link: "https://www.komplett.no/product/1176422" },
                { type: 'case',        title: "Fractal Design Define S2",             date: "Feb 2022",  desc: "Full Tower · Black",                                link: "https://www.komplett.no/product/1090405" },
                { type: 'storage',     title: "WD BLACK SN750 1TB",                  date: "Feb 2022",  desc: "M.2 NVMe · r/w 3470 / 3000 MB/s",                  link: "https://www.komplett.no/product/1121774" },
                { type: 'storage',     title: "Random 500GB M.2 SSD",                desc: "Found in the house · Repurposed" },
            ],
        },
    ];

    // SVG-innhold per komponenttype (Lucide-stil, stroke-basert, viewBox 0 0 24 24)
    const iconPaths: Record<ComponentType, string> = {
        cpu:         `<rect x="4" y="4" width="16" height="16" rx="2.5"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M9 1v3M12 1v3M15 1v3M9 20v3M12 20v3M15 20v3M1 9h3M1 12h3M1 15h3M20 9h3M20 12h3M20 15h3"/>`,
        gpu:         `<rect x="1" y="8" width="18" height="10" rx="2"/><path d="M19 11h4M19 14h4M6 8V5M9 8V5M12 8V5M15 8V5"/><rect x="4" y="11" width="7" height="4" rx="1"/>`,
        ram:         `<rect x="7" y="3" width="10" height="18" rx="1.5"/><path d="M10 3V1M13 3V1M16 3V1"/><path d="M10 8h4M10 11h4M10 14h4"/>`,
        motherboard: `<rect x="2" y="2" width="20" height="20" rx="2"/><rect x="5" y="5" width="9" height="6" rx="1.5"/><rect x="5" y="15" width="4" height="4" rx="1"/><rect x="11" y="15" width="4" height="4" rx="1"/><circle cx="18" cy="8" r="1.5"/>`,
        storage:     `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M15 11h4M15 13h4"/><circle cx="9" cy="12" r="2"/>`,
        psu:         `<polyline points="13 2 13 9 18 9 11 22 11 15 6 15 13 2"/>`,
        case:        `<rect x="6" y="2" width="12" height="20" rx="2"/><rect x="9" y="5" width="6" height="5" rx="1"/><circle cx="12" cy="15" r="1.5"/><path d="M9 19h6"/>`,
        cooling:     `<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M18.36 5.64l-2.83 2.83M8.46 15.54l-2.83 2.83"/>`,
        keyboard:    `<rect x="2" y="8" width="20" height="12" rx="2"/><path d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01M7 16h10"/>`,
        mouse:       `<path d="M12 2a7 7 0 00-7 7v6a7 7 0 0014 0V9a7 7 0 00-7-7z"/><path d="M12 2v7M5 9h14"/>`,
        mousepad:    `<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 9h20"/>`,
        monitor:     `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
        audio:       `<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v4M9 22h6"/>`,
        camera:      `<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>`,
        chair:       `<path d="M6 20v-6M18 20v-6M4 14h16a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2zM8 10V6a4 4 0 018 0v4"/>`,
        control:     `<rect x="2" y="2" width="20" height="20" rx="3"/><rect x="5" y="5" width="4" height="4" rx="1"/><rect x="10" y="5" width="4" height="4" rx="1"/><rect x="15" y="5" width="4" height="4" rx="1"/><rect x="5" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="15" y="10" width="4" height="4" rx="1"/><rect x="5" y="15" width="14" height="4" rx="1"/>`,
    };

    const typeLabels: Record<ComponentType, string> = {
        cpu: 'CPU', gpu: 'GPU', ram: 'RAM', motherboard: 'MOBO', storage: 'SSD',
        psu: 'PSU', case: 'CASE', cooling: 'COOLING', keyboard: 'KBD', mouse: 'MOUSE',
        mousepad: 'PAD', monitor: 'DISPLAY', audio: 'AUDIO', camera: 'CAM',
        chair: 'CHAIR', control: 'CTRL',
    };

    const totalComponents = setup.reduce((acc, s) => acc + s.items.length, 0);

    // Holder styr på hvilke seksjoner som er utvidet
    let expandedSections = $state<Record<number, boolean>>({});

    function toggleExpanded(index: number) {
        expandedSections[index] = !expandedSections[index];
    }
</script>

{#snippet renderItem(item: SetupItem)}
    <div class="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500/60 group-hover:text-yellow-400/90 transition-colors">
        {@html `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%">${iconPaths[item.type]}</svg>`}
    </div>
    <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2 flex-wrap">
            <span class="font-mono text-[10px] tracking-widest text-yellow-500/60 group-hover:text-yellow-400/90 transition-colors uppercase">{typeLabels[item.type]}</span>
            <span class="text-base text-white/90 font-medium">{item.title}</span>
            {#if item.date}
                <span class="font-mono text-[10px] text-white/50">// {item.date}</span>
            {/if}
        </div>
        <div class="font-mono text-xs text-white/55 mt-0.5 leading-relaxed">{item.desc}</div>
    </div>
{/snippet}

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full items-center flex-col">
        <h2 class="text-4xl text-yellow-500 mb-1 text-center">Home Office</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-10">SETUP · {totalComponents} COMPONENTS</p>

        {#each setup as section, sectionIndex}
            <div class="w-full {sectionIndex < setup.length - 1 ? 'mb-16' : ''}">
                <!-- Seksjonsoverskrift og bilde -->
                <div class="flex items-center gap-3 mb-3">
                    <span class="font-mono text-xs tracking-[0.45em] text-yellow-500 uppercase">{section.title}</span>
                    <div class="flex-1 h-px bg-white/15"></div>
                    <span class="font-mono text-xs text-white/40">{section.items.length} UNITS</span>
                </div>
                <button
                    onclick={() => toggleExpanded(sectionIndex)}
                    class="relative w-full overflow-hidden rounded mb-4 cursor-pointer block transition-all duration-500"
                    style="height: {expandedSections[sectionIndex] ? '320px' : '112px'}">
                    <img src={section.image} alt={section.title} class="absolute inset-0 w-full h-full object-cover transition-all duration-500 {expandedSections[sectionIndex] ? 'object-center' : 'object-top'}" draggable="false" />
                    <div class="absolute inset-0 bg-gradient-to-t {expandedSections[sectionIndex] ? 'from-black/60 via-transparent to-transparent' : 'from-black/80 via-black/30 to-transparent'} transition-all duration-500"></div>
                    <div class="absolute bottom-2 right-2">
                        <svg class="w-4 h-4 text-white/40 transition-transform duration-500 {expandedSections[sectionIndex] ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </div>
                </button>

                <!-- Komponentliste -->
                <div class="flex flex-col">
                    {#each section.items as item}
                        {#if item.groupLabel}
                            <!-- Gruppeseparator (f.eks. musematter) -->
                            <div class="flex items-center gap-3 mt-3 mb-2 pl-7">
                                <span class="font-mono text-[10px] tracking-[0.4em] text-yellow-500/80">{item.groupLabel}</span>
                                <div class="flex-1 h-px bg-white/15"></div>
                            </div>
                        {/if}

                        {#if item.link}
                            <a href={item.link} target="_blank"
                               class="group flex items-start gap-3 py-3 border-b border-white/10 last:border-0 hover:bg-white/[0.04] -mx-2 px-2 rounded transition-colors">
                                {@render renderItem(item)}
                                <svg class="w-3 h-3 mt-1.5 flex-shrink-0 text-white/20 group-hover:text-yellow-500/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10"/>
                                </svg>
                            </a>
                        {:else}
                            <div class="flex items-start gap-3 py-3 border-b border-white/10 last:border-0 -mx-2 px-2">
                                {@render renderItem(item)}
                            </div>
                        {/if}

                        {#if item.groupEnd}
                            <!-- Visuell separator etter gruppe -->
                            <div class="h-px bg-white/20 my-3"></div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
