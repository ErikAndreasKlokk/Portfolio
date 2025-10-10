<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

</script>

<p class=" text-base text-white my-1">
    {@render children?.()}
</p>