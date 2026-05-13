<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    // ===========================================================
    // FONDSPORTEFØLJE
    // units = antall andeler (beregnet én gang: 105776 / 105.814)
    // current beregnes daglig: units × live NAV
    // ===========================================================
    const fundHoldings = [
        { name: 'Alfred Berg Global C', invested: 87000, units: 218.53106444, fallbackCurrent: 109672 },
    ];

    // Beregn gjeldende fondverdi — live hvis NAV er tilgjengelig, ellers fallback
    const fundCurrentValues = fundHoldings.map(f =>
        data.fundNav ? f.units * data.fundNav.nav : f.fallbackCurrent
    );
    // ===========================================================
    // AKSJEPORTEFØLJE — fyll inn dine aksjer og gjennomsnittspris
    // Legg til shares og avgCostUsd for live P&L-beregning
    // ===========================================================
    const stockHoldings: { symbol: string; shares: number; avgCostUsd: number }[] = [
        { symbol: 'KITT', shares: 113, avgCostUsd: 3.92 },
    ];

    // Fallback NOK-verdier når aksjedata ikke er konfigurert
    const stockFallback = { invested: 4366, current: 4366 };

    // Realiserte handler (alle lukket)
    const closedPositions = [
        { symbol: 'MU',   name: 'Micron Technology',       paidNok: 2988, receivedNok: 4270, date: '17.03.2026' },
        { symbol: 'INTC', name: 'Intel',                    paidNok: 13914, receivedNok: 15447, date: '28.01.2026' },
        { symbol: 'WDC',  name: 'Western Digital',          paidNok: 8073, receivedNok: 8472, date: '03.02.2026' },
        { symbol: 'AMD',  name: 'Advanced Micro Devices',   paidNok: 13252, receivedNok: 13867, date: '13.04.2026' },
        { symbol: 'NVDA', name: 'NVIDIA',                   paidNok: 5577, receivedNok: 5573, date: '15.04.2026' },
    ];
    const totalRealizedGain = closedPositions.reduce((s, p) => s + (p.receivedNok - p.paidNok), 0);

    const usdNok = data.usdNok ?? 10.7;
    const hasHoldingData = stockHoldings.some(h => h.shares > 0);

    // Beregn per-aksje live-verdier
    const stockLive = hasHoldingData
        ? stockHoldings.map(h => {
            const q = data.quotes.find(q => q.symbol === h.symbol) ?? null;
            const investedUsd = h.shares * h.avgCostUsd;
            const currentUsd  = q ? h.shares * q.price : investedUsd;
            return {
                symbol:     h.symbol,
                shares:     h.shares,
                avgCostUsd: h.avgCostUsd,
                quote:      q,
                investedUsd,
                currentUsd,
                gainUsd:    currentUsd - investedUsd,
                gainPct:    investedUsd > 0 ? ((currentUsd - investedUsd) / investedUsd) * 100 : 0,
            };
          })
        : null;

    const stockInvestedNok = stockLive
        ? stockLive.reduce((s, h) => s + h.investedUsd * usdNok, 0)
        : stockFallback.invested;
    const stockCurrentNok = stockLive
        ? stockLive.reduce((s, h) => s + h.currentUsd * usdNok, 0)
        : stockFallback.current;
    const sGain    = stockCurrentNok - stockInvestedNok;
    const sGainPct = stockInvestedNok > 0 ? (sGain / stockInvestedNok) * 100 : 0;

    // Total P&L på aksjekontoen: realisert + urealisert
    const stockAccountTotalGain = totalRealizedGain + sGain;
    // Totalt innskudd på aksjekontoen (aldri tatt ut)
    const totalDeposited = 20000;
    const stockAccountValue = totalDeposited + stockAccountTotalGain;

    // Globale totaler
    const totalFundsInvested = fundHoldings.reduce((s, f) => s + f.invested, 0);
    const totalFundsCurrent  = fundCurrentValues.reduce((s, v) => s + v, 0);
    const totalInvested = totalFundsInvested + totalDeposited;
    const totalCurrent  = totalFundsCurrent  + stockAccountValue;
    const totalGain     = totalCurrent - totalInvested;
    const totalGainPct  = (totalGain / totalInvested) * 100;

    const fundsAllocPct  = totalCurrent > 0 ? (totalFundsCurrent  / totalCurrent) * 100 : 0;
    const stocksAllocPct = totalCurrent > 0 ? (stockCurrentNok / totalCurrent) * 100 : 0;

    function fmtNok(n: number) {
        return n.toLocaleString('no-NO', { maximumFractionDigits: 0 }) + ' kr';
    }
    function fmtUsd(n: number) {
        return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    function fmtPct(n: number) {
        return (n >= 0 ? '+' : '') + n.toFixed(2) + '%';
    }

    const fetchedAt = new Date(data.fetchedAt);
    const timeStr = fetchedAt.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
</script>

<div class="flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-full breakpoint:items-center">
    <div class="flex w-full flex-col">

        <h2 class="text-4xl text-yellow-500 mb-1">Investments</h2>
        <p class="text-white/40 text-xs tracking-[0.35em] mb-10">PORTFOLIO · {fundHoldings.length + stockHoldings.length} ASSETS</p>

        <!-- Samlet porteføljeverdi -->
        <div class="mb-2">
            <div class="font-mono text-[10px] tracking-[0.4em] text-yellow-500/70 mb-1">TOTAL VALUE</div>
            <div class="text-5xl font-semibold tabular-nums text-white">{fmtNok(totalCurrent)}</div>
            <div class="font-mono text-sm mt-2 {totalGain >= 0 ? 'text-green-400' : 'text-red-400'}">
                {totalGain >= 0 ? '+' : ''}{fmtNok(totalGain)} &nbsp;({fmtPct(totalGainPct)})
                <span class="text-white/30 ml-2">from {fmtNok(totalInvested)} invested</span>
            </div>
        </div>

        <!-- Allokeringsbar -->
        <div class="w-full h-1 rounded-full overflow-hidden bg-white/10 mt-6 mb-1">
            <div class="h-full flex">
                <div class="h-full bg-yellow-500/80 transition-all duration-500" style="width: {fundsAllocPct}%"></div>
                <div class="h-full bg-yellow-500/25 transition-all duration-500" style="width: {stocksAllocPct}%"></div>
            </div>
        </div>
        <div class="flex justify-between font-mono text-[10px] text-white/30 mb-12">
            <span>FUNDS {fundsAllocPct.toFixed(0)}%</span>
            <span>STOCKS {stocksAllocPct.toFixed(0)}%</span>
        </div>

        <!-- FUNDS-seksjon -->
        <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
                <span class="font-mono text-xs tracking-[0.45em] text-yellow-500">FUNDS</span>
                <div class="flex-1 h-px bg-white/15"></div>
                <span class="font-mono text-xs text-white/40">{fundHoldings.length} HOLDING{fundHoldings.length !== 1 ? 'S' : ''}</span>
            </div>

            {#each fundHoldings as fund, i}
                {@const current = fundCurrentValues[i]}
                {@const gain    = current - fund.invested}
                {@const gainPct = (gain / fund.invested) * 100}
                <div class="py-3 border-b border-white/10 last:border-0">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <div class="font-mono text-[10px] tracking-widest text-yellow-500/60 mb-0.5">INDEX FUND</div>
                            <div class="text-base text-white/90 font-medium">{fund.name}</div>
                            <div class="font-mono text-xs text-white/40 mt-0.5">Invested: {fmtNok(fund.invested)} · {fund.units.toFixed(3)} units</div>
                        </div>
                        <div class="text-right flex-shrink-0">
                            <div class="text-lg font-semibold tabular-nums text-white/90">{fmtNok(current)}</div>
                            <div class="font-mono text-xs {gain >= 0 ? 'text-green-400' : 'text-red-400'}">
                                {gain >= 0 ? '+' : ''}{fmtNok(gain)} &nbsp;{fmtPct(gainPct)}
                            </div>
                        </div>
                    </div>

                    <!-- Live NAV-indikator -->
                    {#if data.fundNav}
                        <div class="mt-2 flex items-center gap-1.5">
                            <span class="relative flex h-1.5 w-1.5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60"></span>
                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400"></span>
                            </span>
                            <span class="font-mono text-[9px] text-white/30">LIVE · NAV {fmtNok(data.fundNav.nav)} · {data.fundNav.date}</span>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>

        <!-- STOCKS-seksjon -->
        <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
                <span class="font-mono text-xs tracking-[0.45em] text-yellow-500">STOCKS</span>
                <div class="flex-1 h-px bg-white/15"></div>
                <span class="font-mono text-xs text-white/40">{stockHoldings.length} HOLDINGS</span>
            </div>

            <!-- Samlet aksjekontooppsummering -->
            <div class="py-3 border border-white/10 rounded-md px-4 mb-6 bg-white/[0.02]">
                <div class="font-mono text-[10px] tracking-widest text-yellow-500/60 mb-2">ACCOUNT TOTAL</div>
                <div class="text-2xl font-semibold tabular-nums text-white mb-2">{fmtNok(stockAccountValue)}</div>
                <div class="flex items-end justify-between gap-4">
                    <div class="font-mono text-xs text-white/35">
                        <span class="text-white/20">Realized</span>&nbsp;
                        <span class="{totalRealizedGain >= 0 ? 'text-green-400/70' : 'text-red-400/70'}">{totalRealizedGain >= 0 ? '+' : ''}{fmtNok(totalRealizedGain)}</span>
                        &nbsp;·&nbsp;
                        <span class="text-white/20">Unrealized</span>&nbsp;
                        <span class="{sGain >= 0 ? 'text-green-400/70' : 'text-red-400/70'}">{sGain >= 0 ? '+' : ''}{fmtNok(sGain)}</span>
                    </div>
                    <div class="font-mono text-sm font-semibold tabular-nums {stockAccountTotalGain >= 0 ? 'text-green-400' : 'text-red-400'}">
                        {stockAccountTotalGain >= 0 ? '+' : ''}{fmtNok(stockAccountTotalGain)}
                    </div>
                </div>
            </div>

            <!-- Aggregert aksjetotal -->
            <div class="py-3 border-b border-white/10 mb-4">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <div class="font-mono text-[10px] tracking-widest text-yellow-500/60 mb-0.5">PORTFOLIO TOTAL</div>
                        <div class="font-mono text-xs text-white/55 mt-0.5">KITT</div>
                        <div class="font-mono text-xs text-white/40 mt-0.5">Invested: {fmtNok(stockInvestedNok)}</div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <div class="text-lg font-semibold tabular-nums text-white/90">{fmtNok(stockCurrentNok)}</div>
                        <div class="font-mono text-xs {sGain >= 0 ? 'text-green-400' : 'text-red-400'}">
                            {sGain >= 0 ? '+' : ''}{fmtNok(sGain)} &nbsp;{fmtPct(sGainPct)}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Per-aksje live-data -->
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span class="font-mono text-[10px] tracking-[0.4em] text-white/40">LIVE MARKET · {timeStr} · 1 USD = {usdNok.toFixed(2)} NOK</span>
                </div>

                {#if !data.quotes || data.quotes.length === 0}
                    <p class="font-mono text-xs text-white/30">// market data unavailable</p>
                {:else}
                    {#each stockHoldings as holding}
                        {@const quote = data.quotes.find(q => q.symbol === holding.symbol)}
                        {@const liveEntry = stockLive?.find(l => l.symbol === holding.symbol)}
                        {#if quote}
                            {@const pos = quote.change >= 0}
                            <div class="py-2.5 border-b border-white/5 last:border-0">
                                <!-- Symbol + navn + daglig kursendring -->
                                <div class="flex items-center gap-3">
                                    <div class="w-12 font-mono text-xs font-bold text-yellow-500/80 flex-shrink-0">{quote.symbol}</div>
                                    <div class="flex-1 font-mono text-xs text-white/45 truncate">{quote.name}</div>
                                    <div class="font-mono text-sm tabular-nums text-white/85 flex-shrink-0">
                                        {fmtUsd(quote.price)} <span class="text-white/30 text-[10px]">{quote.currency}</span>
                                    </div>
                                    <div class="font-mono text-xs flex-shrink-0 w-20 text-right {pos ? 'text-green-400' : 'text-red-400'}">
                                        {pos ? '▲' : '▼'} {fmtPct(quote.changePercent)}
                                    </div>
                                </div>
                                <!-- Antall aksjer og P&L (hvis holdings er konfigurert) -->
                                {#if liveEntry && liveEntry.shares > 0}
                                    <div class="mt-1 pl-12 flex items-center justify-between font-mono text-[10px] text-white/35">
                                        <span>{liveEntry.shares} shares · avg {fmtUsd(liveEntry.avgCostUsd)} USD</span>
                                        <span class="{liveEntry.gainUsd >= 0 ? 'text-green-400/70' : 'text-red-400/70'}">
                                            {liveEntry.gainUsd >= 0 ? '+' : ''}{fmtUsd(liveEntry.gainUsd)} USD &nbsp;{fmtPct(liveEntry.gainPct)}
                                        </span>
                                    </div>
                                {:else}
                                    <div class="mt-1 pl-12 font-mono text-[10px] text-white/20">// legg til shares og avgCostUsd for P&L</div>
                                {/if}
                            </div>
                        {/if}
                    {/each}
                {/if}
            </div>
        </div>

        <!-- CLOSED POSITIONS-seksjon -->
        <div class="mb-12">
            <div class="flex items-center gap-3 mb-4">
                <span class="font-mono text-xs tracking-[0.45em] text-yellow-500">CLOSED POSITIONS</span>
                <div class="flex-1 h-px bg-white/15"></div>
                <span class="font-mono text-xs text-white/40">{closedPositions.length} TRADES</span>
            </div>

            <!-- Realisert totalgevinst -->
            <div class="py-3 border-b border-white/10 mb-4">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <div class="font-mono text-[10px] tracking-widest text-yellow-500/60 mb-0.5">TOTAL REALIZED P&L</div>
                        <div class="font-mono text-xs text-white/40 mt-0.5">All closed stock trades</div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <div class="text-lg font-semibold tabular-nums {totalRealizedGain >= 0 ? 'text-green-400' : 'text-red-400'}">
                            {totalRealizedGain >= 0 ? '+' : ''}{fmtNok(totalRealizedGain)}
                        </div>
                    </div>
                </div>
            </div>

            {#each closedPositions as pos}
                {@const gain = pos.receivedNok - pos.paidNok}
                {@const gainPct = pos.paidNok > 0 ? (gain / pos.paidNok) * 100 : 0}
                <div class="py-2 border-b border-white/5 last:border-0">
                    <div class="flex items-center gap-3">
                        <div class="w-12 font-mono text-xs font-bold text-white/30 flex-shrink-0">{pos.symbol}</div>
                        <div class="flex-1 font-mono text-xs text-white/25 truncate">{pos.name}</div>
                        <div class="font-mono text-xs text-white/25 flex-shrink-0">{pos.date}</div>
                        <div class="font-mono text-xs flex-shrink-0 w-28 text-right {gain >= 0 ? 'text-green-400/60' : 'text-red-400/60'}">
                            {gain >= 0 ? '+' : ''}{fmtNok(gain)} &nbsp;{fmtPct(gainPct)}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

    </div>
</div>
