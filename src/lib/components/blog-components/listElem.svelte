<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet
    }

    let { children }: Props = $props();
</script>

<li class="text-base text-white leading-7 marker:text-yellow-500">
    {@render children?.()}
</li>