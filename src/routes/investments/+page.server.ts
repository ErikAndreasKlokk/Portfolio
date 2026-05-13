import type { PageServerLoadEvent } from './$types';

export interface FundNav {
    name: string;
    nav: number;
    prevNav: number;
    change: number;
    changePercent: number;
    date: string;
    currency: string;
}

export interface StockQuote {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    currency: string;
}

const STOCK_TICKERS = ['KITT'];
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

// Hjelpefunksjon: fetch med timeout slik at siden ikke henger
function fetchWithTimeout(url: string, fetch: typeof globalThis.fetch, ms = 4000) {
    return fetch(url, { signal: AbortSignal.timeout(ms), headers: { 'User-Agent': UA } });
}

async function fetchQuote(symbol: string, fetch: typeof globalThis.fetch): Promise<StockQuote | null> {
    try {
        const res = await fetchWithTimeout(
            `https://query2.finance.yahoo.com/v8/finance/chart/${symbol}?range=1d&interval=1d`,
            fetch
        );
        if (!res.ok) return null;
        const data = await res.json();
        const meta = data?.chart?.result?.[0]?.meta;
        if (!meta) return null;
        const prev = meta.chartPreviousClose ?? meta.previousClose ?? 0;
        const price = meta.regularMarketPrice ?? 0;
        return {
            symbol,
            name: meta.shortName ?? symbol,
            price,
            change: price - prev,
            changePercent: prev ? ((price - prev) / prev) * 100 : 0,
            currency: meta.currency ?? 'USD',
        };
    } catch {
        return null;
    }
}

// Henter USD/NOK-kurs for å konvertere aksjeverdier til NOK
async function fetchUsdNok(fetch: typeof globalThis.fetch): Promise<number> {
    try {
        const res = await fetchWithTimeout(
            `https://query2.finance.yahoo.com/v8/finance/chart/USDNOK=X?range=1d&interval=1d`,
            fetch
        );
        if (!res.ok) return 10.7;
        const data = await res.json();
        return data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? 10.7;
    } catch {
        return 10.7;
    }
}

// Henter daglig NAV for Alfred Berg Global C via Yahoo Finance (ticker 0P0001LR11.IR)
// Morningstar-APIet er utilgjengelig; Yahoo Finance har fondet som ett av sine mutual fund-symboler
async function fetchFundNav(fetch: typeof globalThis.fetch): Promise<FundNav | null> {
    try {
        const res = await fetchWithTimeout(
            `https://query2.finance.yahoo.com/v8/finance/chart/0P0001LR11.IR?range=5d&interval=1d`,
            fetch
        );
        if (!res.ok) return null;
        const data = await res.json();
        const meta = data?.chart?.result?.[0]?.meta;
        if (!meta) return null;

        const nav     = meta.regularMarketPrice ?? 0;
        const prevNav = meta.chartPreviousClose ?? nav;

        // Bruk timestamps fra tidsserie for dato
        const timestamps: number[] = data?.chart?.result?.[0]?.timestamp ?? [];
        const lastTs = timestamps[timestamps.length - 1];
        const date = lastTs ? new Date(lastTs * 1000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

        return {
            name:          'Alfred Berg Global C',
            nav,
            prevNav,
            change:        nav - prevNav,
            changePercent: prevNav ? ((nav - prevNav) / prevNav) * 100 : 0,
            date,
            currency:      meta.currency ?? 'NOK',
        };
    } catch {
        return null;
    }
}

export const load = async ({ fetch, setHeaders }: PageServerLoadEvent) => {
    setHeaders({ 'cache-control': 'public, max-age=60' }); // 1 min cache

    // Wrap alt i try/catch — sikrer at load alltid returnerer gyldig data
    // slik at SvelteKit sin router ikke henger ved navigering
    try {
        const [quotes, fundNav, usdNok] = await Promise.all([
            Promise.all(STOCK_TICKERS.map(t => fetchQuote(t, fetch)))
                .then(r => r.filter((q): q is StockQuote => q !== null)),
            fetchFundNav(fetch),
            fetchUsdNok(fetch),
        ]);

        return { quotes, fundNav, usdNok, fetchedAt: new Date().toISOString() };
    } catch {
        // Fallback — returnér tomme data istedenfor å krasje navigeringen
        return { quotes: [] as StockQuote[], fundNav: null, usdNok: 10.7, fetchedAt: new Date().toISOString() };
    }
};
