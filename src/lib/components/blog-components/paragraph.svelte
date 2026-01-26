<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

</script>

<p class=" text-base text-white my-4 leading-7 self-start">
    {@render children?.()}
</p>