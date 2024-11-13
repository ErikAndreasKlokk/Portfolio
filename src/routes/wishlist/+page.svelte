<script lang="ts">
  import SideProfile from "$lib/components/sideProfile.svelte";
import Wish from "$lib/components/wish.svelte";
</script>

<main class=" text-white py-56 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
    <a class=" fixed top-5 left-5 text-lg underline breakpoint:top-2" href="/"> {"<"} Homepage</a>
    <SideProfile />
    <div class=" flex flex-col items-start w-1/2 h-full px-5 breakpoint:w-fit breakpoint:items-center">
        <div class=" flex w-fit items-center flex-col">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Wishlist</h2>
            <Wish title="AMD Ryzen 7 9800X3D" desc="8 cores, 16 threads, 4.7 GHz base clockspeed, 5.2 GHz top clockspeed" date="Nov 13, 2024" link="https://www.komplett.no/product/1315831/datautstyr/pc-komponenter/prosessorer/amd-ryzen-7-9800x3d-cpu?queryid=5287d22d3da9cf1da301bee42bc402e1&sort=None#"/>
            <Wish title="NZXT N7 B650E Motherboard (black)" desc="ATX, AM5 socket, DDR5 at 6000MHz, 2.5 Gigabit Ethernet, 3 x M.2" date="Nov 13, 2024" link="https://www.komplett.no/product/1243997/datautstyr/pc-komponenter/hovedkort/amd-socket/nzxt-n7-b650e-hovedkort-sort?channable=0428076964003132343339393728&utm_source=prisjakt&utm_medium=listing&utm_campaign=Components_Mainboards#"/>
            <Wish title="G.Skill Trident Z5 Neo" desc="DDR5, 6000MHz, CL30, 2x 16 GB" date="Nov 13, 2024" link="https://www.komplett.no/product/1245558/datautstyr/pc-komponenter/minnebrikker/gskill-trident-z5-neo-ddr5-6000mhz-32gb?queryid=d7047c1b507ee1ca39e713c5ea1b790e&sort=PriceAsc"/>
            <Wish title="Fractal North Charcoal Black Mesh" desc="ATX / mATX / Mini-ITX, 2x Aspect 140mm PWM fans" date="Nov 13, 2024" link="https://www.komplett.no/product/1223056/datautstyr/pc-komponenter/kabinetterbarebone/midi-tower/fractal-north-charcoal-black-mesh-mid-tower?queryid=9a65e0758097e107c5eb4674d639512d&sort=None"/>
            <Wish title="Cooler Master MWE Gold 550 V2 PSU" desc="ATX 12V, 80 PLUS Gold, Fully Modular, 2x 6+2-pin PCIe" date="Nov 13, 2024" link="https://www.komplett.no/product/1176422/datautstyr/pc-komponenter/stroemforsyning/enheter/cooler-master-mwe-gold-550-v2-psu?queryid=4c9aeb2a11dbcc6eeb65de335b22f6f5&sort=None#"/>
            <Wish isLast={true} title='PNY CS900 2,5" SSD' desc="550/530 MB/s, SATA-3, 2TB" date="Nov 13, 2024" link="https://www.komplett.no/product/1300533/datautstyr/lagring/harddiskerssd/ssd-25/pny-cs900-25-ssd-2tb?queryid=c2c767fda7cabe82c64f86ad399a33e6&sort=None#"/>
            <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
        </div>
        <div class=" flex w-fit items-center flex-col mt-10">
            <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Current gear</h2>
            <Wish title="AMD Ryzen 7 5800X" desc="???"/>
            <Wish title="Nvidia RTX 3070TI" desc="???"/>
            <Wish title="Unknown RAM" desc="2x 16 GB, DDR4, 3600MHz"/>
            <Wish title="Unknown 750W PSU" desc="80 Plus gold, fully modular"/>
            <Wish title="Unknown 2x 1 TB M.2 SSD" desc="???"/>
            <Wish title="Unknown Motherboard" desc="AM4 socket"/>
            <Wish title="NZXT radiator" desc="240mm i belive"/>
            <Wish title="Fractal case" desc="???"/>
            <Wish title="Shure MV7" desc="Shure MV7 microphone"/>
            <Wish title="Artisan Zero XSoft" desc="Artisan Zero XSoft mousepad (black)"/>
            <Wish title="ZOOM TKL custom keyboard" desc="Gateron CAP V2 Golden Yellow switches, ZOOM TKL case (black with forest green accents), unknown keycaps and stabilizers"/>
            <Wish title="WL Mouse BeastX" desc="8K polling rate, 39g"/>
            <Wish isLast={true} title="MSI MAG 271QPX QD-OLED" desc="1440p, 360hz, 0.03ms, QD-OLED"/>

            <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
        </div>
    </div>
    <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
        <p>Erik Andreas Klokk © 2024</p>
        <p>Contact: eaklokk@gmail.com</p>
    </div>
</main>