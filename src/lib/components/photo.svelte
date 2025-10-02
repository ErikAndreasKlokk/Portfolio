<script lang="ts">
    export let src: string;
    export let landscape: boolean = false;
</script>

<div class=" {landscape ? 'col-span-2' : ''}">
    <img loading="lazy" src="/photos/{src}" alt="{src}" class="rounded-lg shadow-lg w-full h-auto"/>
</div>