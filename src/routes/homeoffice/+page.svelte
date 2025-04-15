<script lang="ts">
    import SideProfile from "$lib/components/sideProfile.svelte";
    import Wish from "$lib/components/wish.svelte";
  </script>
  
  <main class=" text-white py-56 flex w-full h-full px-3 relative breakpoint:flex-col breakpoint:items-center breakpoint:py-10">
      <SideProfile />
      <div class=" flex flex-col items-start w-7/12  h-full px-5 breakpoint:w-fit breakpoint:items-center">
  
          <div class=" flex w-full items-center flex-col">
              <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Main PC</h2>
              <Wish title="AMD Ryzen 7 9800X3D" date="Jan 8, 2025" desc="8 cores, 16 threads, 4.7 GHz base clockspeed, 5.2 GHz top clockspeed" link="https://www.komplett.no/product/1315831/datautstyr/pc-komponenter/prosessorer/amd-ryzen-7-9800x3d-cpu?queryid=5287d22d3da9cf1da301bee42bc402e1&sort=None#"/>
              <Wish title="Nvidia GeForce RTX 3070TI" date="Feb 21, 2022" desc="ASUS GeForce RTX 3070 Ti TUF OC" link="https://www.komplett.no/product/1188792?noredirect=true#"/>
              <Wish title="Corsair Vengeance RGB DDR5" date="Des 16, 2024" desc="Corsair Vengeance RGB DDR5 6000Mhz 32GB 2x16GB, XMP 3.0, DIMM, CL30 with 30-36-36-76 timings." link="https://www.komplett.no/product/1246830/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-rgb-ddr5-6000mhz-32gb"/>
              <Wish title="Corsair TX750M" date="Feb 21, 2022" desc="750W PSU, rated 80 Plus gold, semi modular" link="https://www.komplett.no/product/915833?noredirect=true"/>
              <Wish title="Kingston KC3000 1TB" date="Nov 29, 2024" desc="Kingston KC3000 1TB M.2 SSD, r/w 7000/7000 MB/s" link="https://www.elkjop.no/product/gaming/pc-komponenter/intern-lagring/intern-ssd/kingston-kc3000-pcie-40-intern-nvme-ssd-1024-gb/512635"/>
              <Wish title="WD BLACK SN750 M.2 1TB" date="Feb 21, 2022" desc="WD BLACK SN750 M.2 NVMe SSD 1TB, r/w 3470 MBps/3000 MBps" link="https://www.komplett.no/product/1121774?noredirect=true#"/>
              <Wish title="ASUS PRIME X870-P WIFI" date="Nov 29, 2024" desc="AM5 socket, ATX, supports up to 8000MHz DDR5, Wifi 7" link="https://www.elkjop.no/product/gaming/pc-komponenter/hovedkort/asus-prime-x870-p-wifi-motherboard/842798"/>
              <Wish title="NZXT F120 RGB 120mm" date="Des 16, 2024" desc="20mm, 500-1800rpm, 17.2 - 27.5 dBA, 4-pin PWM, RGB" link="https://www.komplett.no/product/1221145/datautstyr/pc-komponenter/vifterkjoelingvannkjoeling/vifter/nzxt-f120-rgb-120mm-pwm-vifte-sort"/>
              <Wish title="NZXT Kraken 360 AIO" date="Des 16, 2024" desc="NZXT Kraken 360 AIO in black, for AM4 and AM5 sockets." link="https://www.komplett.no/product/1245197/datautstyr/pc-komponenter/vifterkjoelingvannkjoeling/cpu-vannkjoeling/nzxt-kraken-360-aio-cpu-kjoeler-sort"/>
              <Wish isLast={true} title="Fractal North Charcoal Black Mesh" date="Des 16, 2024" desc="ATX / mATX / Mini-ITX, 2x Aspect 140mm PWM fans" link="https://www.komplett.no/product/1223056/datautstyr/pc-komponenter/kabinetterbarebone/midi-tower/fractal-north-charcoal-black-mesh-mid-tower?queryid=9a65e0758097e107c5eb4674d639512d&sort=None"/>
              <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
          </div>
          
          <div class=" flex w-full items-center flex-col mt-10">
              <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Office/gaming setup</h2>
              <Wish title="Wooting 80HE custom keyboard" date="May, 2025" desc="Geon raw HE switches, Wooting 80HE aluminium case, Keychron cherry profile carbon vibe keycaps, main" link="https://wooting.io/configurator/wooting-80he?model=ISO&lang=Nordic&keycaps=none&quantity=1&product=module&switches=54037562261848&case=47937557004632"/>
              <Wish title="ZOOM TKL custom keyboard" date="Feb, 2023" desc="Gateron CAP V2 Golden Yellow switches, ZOOM TKL case (black with forest green accents), unknown keycaps and stabilizers, secondary"/>
              <Wish title="WL Mouse BeastX" desc="8K polling rate, 39g, purple" link="https://www.wlmouse.com/en-wl/products/beast-x-8k-wireless-gaming-mouse?variant=48748797526314"/>
              <Wish title="Artisan FX Type-99 XSoft" desc="Artisan Type-99 XSoft - XXL - mousepad (gray), main" link="https://www.maxgaming.no/no/musematter/musematte-fx-type-99-soft-xxl-svart"/>
              <Wish title="Artisan FX Zero XSoft" desc="Artisan Zero XSoft - XXL - mousepad (black), secondary" link="https://www.maxgaming.no/no/musematter/musematte-fx-zero-xsoft-xxl-svart"/>
              <Wish title="Shure MV7" desc="Shure MV7 microphone" link="https://www.maxgaming.no/no/mikrofoner/mv7-podcast-mikrofon-svart"/>
              <Wish title="Elgato Wave XLR" desc="Elgato Wave XLR" link="https://www.komplett.no/product/1242789/datautstyr/streaming/mikrofon/elgato-wave-xlr"/>
              <Wish title="Elgato Wave Mic Arm LP" desc="Low profile elgato mic arm" link="https://www.komplett.no/product/1200519/datautstyr/streaming/streaming-tilbehoer/elgato-wave-mic-arm-lp"/>
              <Wish title="Elgato Stream Deck Mini" desc="Elgato Stream Deck Mini" link="https://www.komplett.no/product/1081448/datautstyr/streaming/capture-streaming/elgato-stream-deck-mini?queryid=351f8f7aa734f8aa20c153f5422ca1bb&sort=None"/>
              <Wish title="Elgato Facecam Full HD" desc="Elgato Facecam Full HD, 1080p 60FPS" link="https://www.komplett.no/product/1192127/datautstyr/pc-tilbehoer/webkamera/elgato-facecam-full-hd-webkamera?queryid=3e1c3e041ba9c1d645dc1fdf6c7bab04&sort=None#"/>
              <Wish title="Secretlab TITAN 2020" desc="Secretlab TITAN 2020 in black" link="https://secretlab.eu/collections/titan-series"/>
              <Wish title="MSI MAG 271QPX QD-OLED" desc="1440p, 360hz, 0.03ms, QD-OLED" link="https://www.proshop.no/Skjerm/265-MSI-MAG-271QPX-2560x1440-360Hz-QD-OLED/3281381"/>
              <Wish isLast={true} title="Acer 27 inch Predator XB271HU" desc="2560x1440 IPS, 165hz, 4ms, 100m:1, G-Sync, used as second monitor" date="Jan 31, 2021" link="https://www.komplett.no/product/859681?noredirect=true"/>
              <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
          </div>

          <div class=" flex w-full items-center flex-col mt-10">
              <h2 class=" text-4xl text-yellow-500 mb-6 text-center">Homelab Server</h2>
              <Wish title="AMD Ryzen 7 5800X" date="Feb 21, 2022" desc="AM4 socket, 8-core, 16 threads, base clockspeed 3.8GHz, max clockspeed 4.7GHz" link="https://www.komplett.no/product/1172187?noredirect=true"/>
              <Wish title="Kingston FURY Beast DDR4" date="Feb 21, 2022" desc="32GB 2x16GB, DDR4, 3600MHz, CL18" link="https://www.komplett.no/product/1191392/datautstyr/pc-komponenter/minnebrikker/kingston-fury-beast-ddr4-3600mhz-32gb"/>
              <Wish title="ASUS ROG Strix B550-E" date="Feb 21, 2022" desc="AM4 socket, ATX, supports up to 4400MHz DDR4" link="https://www.komplett.no/product/1159991?noredirect=true"/>
              <Wish title="NZXT Kraken X53" date="Feb 21, 2022" desc="240mm radiator with 2 120mm fans." link="https://www.komplett.no/product/1150460?noredirect=true"/>
              <Wish title="Cooler Master MWE Gold 550 V2 PSU" date="Des 16, 2024" desc="ATX 12V, 80 PLUS Gold, Fully Modular" link="https://www.komplett.no/product/1176422/datautstyr/pc-komponenter/stroemforsyning/enheter/cooler-master-mwe-gold-550-v2-psu?queryid=4c9aeb2a11dbcc6eeb65de335b22f6f5&sort=None#"/>
              <Wish title="Fractal Design Define S2" date="Feb 21, 2022" desc="Fractal Design Define S2 Black" link="https://www.komplett.no/product/1090405?noredirect=true"/>
              <Wish title="WD BLACK SN750 M.2 1TB" date="Feb 21, 2022" desc="WD BLACK SN750 M.2 NVMe SSD 1TB, r/w 3470 MBps/3000 MBps" link="https://www.komplett.no/product/1121774?noredirect=true#"/>
              <Wish isLast={true} title="Random 500GB M.2 SSD" desc="Found a random 500GB M.2 SSD in my house and put it in the server."/>
              <!-- <Wish title="" desc="" date="Nov 13, 2024" link=""/> -->
          </div>
  
      </div>
      <div class=" fixed bottom-5 left-5 text-sm text-white/70 breakpoint:static breakpoint:mt-10">
          <p>Erik Andreas Klokk © 2024</p>
          <p>Contact: eaklokk@gmail.com</p>
      </div>
  </main>