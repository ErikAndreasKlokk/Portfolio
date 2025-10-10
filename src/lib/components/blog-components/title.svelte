<script lang="ts">
    interface Props {
        title: string;
    }

    let { title }: Props = $props();
</script>

<h2 class=" text-4xl text-yellow-500 mb-1 text-center">{title}</h2>