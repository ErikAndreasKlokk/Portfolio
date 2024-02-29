<script>
    import { language } from '../lib/stores/languages'

    function changeLang(lang) {
        language.set({
          language: lang
        })
    }
</script>

<header class=" w-full flex justify-end">
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn"><img src="/language_FILL0_wght400_GRAD0_opsz24.svg" alt="Select language"></div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-48 mt-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><button on:click={() => changeLang("Norsk")}>Norsk</button></li> 
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><button on:click={() => changeLang("English")}>English</button></li>
        </ul>
      </div>
</header>