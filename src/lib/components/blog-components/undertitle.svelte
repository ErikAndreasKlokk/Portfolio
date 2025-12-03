<script lang="ts">
    interface Props {
        title: string;
    }

    let { title }: Props = $props();
</script>

<h3 class=" text-2xl text-yellow-500 mt-10 text-center">{title}</h3>