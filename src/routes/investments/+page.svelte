<script lang="ts">
    import Borderbox from "$lib/components/borderbox.svelte";
    import Paragraph from "$lib/components/blog-components/paragraph.svelte";

    let stocksInvestements: number = 20000;
    let stocksTotal: number = 21518;
    let fundsInvestements: number = 87000;
    let fundsTotal: number = 102052;
    let totalInvestements: number = stocksInvestements + fundsInvestements;
    let totalCurrent: number = stocksTotal + fundsTotal;
</script>

<div class=" flex flex-col items-start w-7/12 h-full px-5 breakpoint:w-fit breakpoint:items-center">
    <div class=" flex w-full items-center flex-col">
        <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Investments</h2>
        <div class=" flex flex-col items-center w-full justify-between mb-10">
            <Borderbox widthFull={true} marginY="my-2" >
                <div class=" w-full p-2">
                    <h3>Total</h3>
                    <h2 class=" text-3xl">{totalCurrent}kr</h2>
                    <p class=" text-green-500">+{((totalCurrent-totalInvestements)/totalInvestements*100).toFixed(2)}% (+{(totalCurrent-totalInvestements)}kr)</p>
                </div>
            </Borderbox>
            <Paragraph> 
                Breakdown of my current investments:
            </Paragraph>
            <Borderbox widthFull={true} marginY="my-2" >
                <div class=" w-full p-2">
                    <h3>Funds</h3>
                    <h2 class=" text-3xl">{fundsTotal}kr</h2>
                    <p class=" text-green-500">+{((fundsTotal-fundsInvestements)/fundsInvestements*100).toFixed(2)}% (+{(fundsTotal-fundsInvestements)}kr)</p>
                </div>
            </Borderbox>
            <Paragraph> 
                My funds are mostly put in index funds, primarily aimed at global technologies. Right now I only have one fund, Alfred berg Global C, but I plan to diversify more in the future.
            </Paragraph>
            <Borderbox widthFull={true} marginY="my-2" >
                <div class=" w-full p-2">
                    <h3>Stocks</h3>
                    <h2 class=" text-3xl">{stocksTotal}kr</h2>
                    <p class=" text-green-500">+{((stocksTotal-stocksInvestements)/stocksInvestements*100).toFixed(2)}% (+{(stocksTotal-stocksInvestements)}kr)</p>
                </div>
            </Borderbox>
            <Paragraph> 
                All my stocks are in the technology sector and I have a mid- to long-term perspective on them. Here is a list of my current stocks:
            </Paragraph>
            <Borderbox widthFull={true} marginY="my-2" >
                <div class=" w-full p-2">
                    <h3>Current Stocks</h3>
                    <ul class=" list-disc ml-5">
                        <li>Intel (INTC)</li>
                        <li>Nvidia (NVDA)</li>
                        <li>Micron Technology (MU)</li>
                        <li>Advanced Micro Devices (AMD)</li>
                    </ul>
                </div>
            </Borderbox>
        </div>
    </div>
    <p class=" text-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium sit quia modi expedita quaerat, dolores facilis iure quidem praesentium, voluptate earum ex, eius possimus cumque illum. Saepe, nobis in?</p>
</div>