<script lang="ts">
    import type { Picture } from 'vite-imagetools';

    interface Props {
        src: Picture;
    }

    let { src }: Props = $props();
</script>

<div class=" max-w-full h-80 max-h-80 my-5 flex justify-center items-center">
    <enhanced:img class=" w-full max-h-80" src={src} alt="image1" loading="lazy" />
</div>