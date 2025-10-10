<script lang="ts">
    interface Props {
        title: string;
    }

    let { title }: Props = $props();
</script>

<h3 class=" text-2xl text-yellow-500 mb-4 mt-6 text-center">{title}</h3>