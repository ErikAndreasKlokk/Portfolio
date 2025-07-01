<script lang="ts">
    export let src: string;
</script>

<div class=" max-w-full h-80 max-h-80 my-3 flex justify-center">
    <img class=" h-full max-h-full" src={src} alt={src} loading="lazy">
</div>