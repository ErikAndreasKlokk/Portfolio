<script lang="ts">
    interface Props {
        createdDate: string;
        lastUpdatedDate: string;
        author: string;
    }

    let { createdDate, lastUpdatedDate, author }: Props = $props();
</script>

<div class="w-full mb-8">
    <!-- Tilbake-knapp -->
    <a href="/blog" class="inline-block text-white/40 text-xs tracking-[0.3em] hover:text-yellow-500 transition-colors mb-4">← BLOG</a>

    <!-- Metadata-rad -->
    <div class="flex items-center flex-wrap gap-x-6 gap-y-1 py-3 border-y border-white/15 text-xs">
        <span><span class="text-yellow-500">BY</span>&nbsp;<span class="text-white/60">{author}</span></span>
        <span><span class="text-yellow-500">PUBLISHED</span>&nbsp;<span class="text-white/60">{createdDate}</span></span>
        <span><span class="text-yellow-500">UPDATED</span>&nbsp;<span class="text-white/60">{lastUpdatedDate}</span></span>
    </div>
</div>