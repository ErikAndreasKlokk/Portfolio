<script lang="ts">
  import Wish from "$lib/components/wish.svelte";
</script>

<main class=" text-white py-56 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <div class=" flex flex-col w-1/2 h-fit sticky px-5 top-56 breakpoint:static breakpoint:mb-5 breakpoint:items-center breakpoint:w-fit">
        <h1 class=" font-bold text-6xl mb-4 breakpoint:text-center">ERIK ANDREAS KLOKK</h1>
        <div class=" border flex flex-col border-white/60 rounded-md px-3 py-1 w-4/5 breakpoint:w-full breakpoint:my-1">
            <div class=" flex justify-between ">
                <p class=" flex text-white/60 text-sm gap-1 items-center">
                    <img class=" h-4" src="/location.svg" alt="location">
                    Oslo, Norway
                </p>
                <div class=" flex gap-4 py-2">
                    <a href="mailto:eaklokk@gmail.com">
                        <img class=" h-6" src="/mail.svg" alt="new mail">
                    </a>
                    <a target="_blank" href="https://github.com/ErikAndreasKlokk">
                        <img class=" h-6" src="/github.svg" alt="github link">
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/erik-andreas-klokk-5415882a0/">
                        <img class=" h-6" src="/linkedin.svg" alt="linkedin link">
                    </a>
                    <a target="_blank" href="https://steamcommunity.com/profiles/76561198848256576/">
                        <img class=" h-6" src="/steam.svg" alt="steam link">
                    </a>
                </div>
            </div>
            <p class=" text-lg my-1">18 year old frontend web developer working at Statens Pensjonskasse.</p>
        </div>
    </div>
    <div class=" flex flex-col items-start w-1/2 h-full px-5 breakpoint:w-fit breakpoint:items-center">
        <div class=" flex w-fit items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Wishlist</h2>
            <Wish title="AMD Ryzen 7 9800X3D" desc="8 cores, 16 threads, 4.7 GHz base clockspeed, 5.2 GHz top clockspeed" date="Nov 13, 2024" link="https://www.komplett.no/product/1315831/datautstyr/pc-komponenter/prosessorer/amd-ryzen-7-9800x3d-cpu?queryid=5287d22d3da9cf1da301bee42bc402e1&sort=None#"/>
            <Wish title="NZXT N7 B650E Motherboard (black)" desc="ATX, AM5 socket, DDR5 at 6000MHz, 2.5 Gigabit Ethernet, 3 x M.2" date="Nov 13, 2024" link="https://www.komplett.no/product/1243997/datautstyr/pc-komponenter/hovedkort/amd-socket/nzxt-n7-b650e-hovedkort-sort?channable=0428076964003132343339393728&utm_source=prisjakt&utm_medium=listing&utm_campaign=Components_Mainboards#"/>
            <Wish title="G.Skill Trident Z5 Neo" desc="DDR5, 6000MHz, CL30" date="Nov 13, 2024" link="https://www.komplett.no/product/1245558/datautstyr/pc-komponenter/minnebrikker/gskill-trident-z5-neo-ddr5-6000mhz-32gb?queryid=d7047c1b507ee1ca39e713c5ea1b790e&sort=PriceAsc"/>
            <Wish title="Fractal North Charcoal Black Mesh" desc="ATX / mATX / Mini-ITX, 2x Aspect 140mm PWM fans" date="Nov 13, 2024" link="https://www.komplett.no/product/1223056/datautstyr/pc-komponenter/kabinetterbarebone/midi-tower/fractal-north-charcoal-black-mesh-mid-tower?queryid=9a65e0758097e107c5eb4674d639512d&sort=None"/>
            <Wish title="Cooler Master MWE Gold 550 V2 PSU" desc="ATX 12V, 80 PLUS Gold, Fully Modular, 2x 6+2-pin PCIe" date="Nov 13, 2024" link="https://www.komplett.no/product/1176422/datautstyr/pc-komponenter/stroemforsyning/enheter/cooler-master-mwe-gold-550-v2-psu?queryid=4c9aeb2a11dbcc6eeb65de335b22f6f5&sort=None#"/>
            <Wish isLast={true} title='PNY CS900 2,5" SSD' desc="550/530 MB/s, SATA-3, 2TB" date="Nov 13, 2024" link="https://www.komplett.no/product/1300533/datautstyr/lagring/harddiskerssd/ssd-25/pny-cs900-25-ssd-2tb?queryid=c2c767fda7cabe82c64f86ad399a33e6&sort=None#"/>
            <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>