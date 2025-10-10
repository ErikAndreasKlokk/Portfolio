<script lang="ts">
    import Borderbox from "./borderbox.svelte";

    interface Props {
        imgURL: string;
        skill: string;
    }

    let { imgURL, skill }: Props = $props();
</script>

<Borderbox marginY="my-1" marginX="mx-1"> 
    <div class=" flex items-center w-fit h-12 rounded-lg px-2 p-1">
        <img src={imgURL} class=" h-7 mr-2" alt="skill icon" />
        <p>{skill}</p>
    </div>
</Borderbox> 