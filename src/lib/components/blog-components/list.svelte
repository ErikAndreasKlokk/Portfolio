<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet
    }

    let { children }: Props = $props();
</script>

<ol class="list-decimal text-white my-4 ml-5 space-y-2">
    {@render children?.()}
</ol>