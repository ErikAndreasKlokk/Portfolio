<script lang="ts">
    import { codeToHtml } from 'shiki'
    import { addCopyButton } from 'shiki-transformer-copy-button'
    import { onMount } from 'svelte'
    import type { CodeObject } from './how-i-set-up-my-homelab-codes';

    interface Props {
        codeObject: CodeObject
    }

    const { codeObject }: Props = $props()
    let html = $state<string>("")

    const options = {
        // delay time from "copied" state back to normal state
        toggle: 2000
    }

    onMount(async () => {
      html = await codeToHtml(codeObject.code, {
        lang: codeObject.lang,
        theme: 'slack-dark',
        transformers: [
            addCopyButton(options),
            {
                pre(node) {
                    this.addClassToHast(node, "font w-full overflow-x-auto py-2.5 px-5 ")
                },
                code(node) {
                    this.addClassToHast(node, "font")
                }
            }
        ]
      })
    })
</script>

{@html html}