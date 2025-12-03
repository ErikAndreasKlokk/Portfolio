<script lang="ts">
    interface Props {
        href: string,
        downloadBool?: boolean,
        children?: import('svelte').Snippet
    }

    let { href, downloadBool, children }: Props = $props();
</script>

<a class="text-yellow-500 underline" target="_blank" href={href} download={downloadBool ? '' : undefined}>
    {@render children?.()}
</a>