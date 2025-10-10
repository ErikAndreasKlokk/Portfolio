<script lang="ts">
    interface Props {
        createdDate: string;
        lastUpdatedDate: string;
        author: string;
    }

    let { createdDate, lastUpdatedDate, author }: Props = $props();
</script>

<div class=" flex gap-5 mb-6 w-full justify-center">
    <p class=" text-white/70 text-xs">Author: {author}</p>
    <p class=" text-white/70 text-xs">Created: {createdDate}</p>
    <p class=" text-white/70 text-xs">Last updated: {lastUpdatedDate}</p>
</div>