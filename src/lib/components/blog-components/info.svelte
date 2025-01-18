<script lang="ts">
    export let createdDate: string;
    export let lastUpdatedDate: string;
    export let author: string;
</script>

<div class=" flex gap-5 mb-6 w-full justify-center">
    <p class=" text-white/70 text-xs">Author: {author}</p>
    <p class=" text-white/70 text-xs">Created: {createdDate}</p>
    <p class=" text-white/70 text-xs">Last updated: {lastUpdatedDate}</p>
</div>