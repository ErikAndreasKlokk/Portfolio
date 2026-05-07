<script lang="ts">
    interface Props {
        title: string;
    }

    let { title }: Props = $props();

    // Lag ID fra tittel: lowercase, mellomrom til bindestrek, fjern ikke-alfanumeriske tegn
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
</script>

<h3 {id} class=" text-2xl text-yellow-500 mt-10 text-center">{title}</h3>