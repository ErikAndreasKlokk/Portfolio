<script>
    import { language } from '../lib/stores/languages'

    function changeLang(lang) {
        language.set({
          language: lang
        })
        document.activeElement.blur()
    }
</script>

<header class=" w-full max-w-[1500px] flex justify-end fixed z-50">
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn"><img src="/language.svg" alt="Select language"></div>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <ul tabindex="0" class="menu dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-48 mt-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><button on:click={() => changeLang("Norsk")}>Norsk</button></li> 
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><button on:click={() => changeLang("English")}>English</button></li>
    </ul>
  </div>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn"><img src="/menu.svg" alt="Select language"></div>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <ul tabindex="0" class="menu dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-48 mt-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="#forside" alt="go to" on:click={document.activeElement.blur()}>Forside</a></li> 
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="#omsiden" alt="go to" on:click={document.activeElement.blur()}>Om siden</a></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="#ommeg" alt="go to" on:click={document.activeElement.blur()}>Om meg</a></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="#ommegbilde" alt="go to" on:click={document.activeElement.blur()}>Bilde</a></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="#prosjekter" alt="go to" on:click={document.activeElement.blur()}>Prosjekter</a></li>
    </ul>
  </div>
</header>