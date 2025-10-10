<script lang="ts">
    import type { Picture } from 'vite-imagetools';

    interface Props {
        landscape?: boolean;
        src: Picture;
    }

    let { src, landscape = false }: Props = $props();
</script>

<div class={landscape ? 'col-span-2' : ''}>
    <enhanced:img
        loading="lazy"
        src={src}
        alt="image1"
        class="rounded-lg shadow-lg w-full h-auto"
    />
</div>
