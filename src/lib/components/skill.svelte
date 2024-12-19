<script lang="ts">
    import Borderbox from "./borderbox.svelte";

    export let imgURL: string;
    export let skill: string;
</script>

<Borderbox marginY="my-1" marginX="mx-1"> 
    <div class=" flex items-center w-fit h-12 rounded-lg px-2 p-1">
        <img class=" h-7 mr-2" src={imgURL} alt="skill icon">
        <p>{skill}</p>
    </div>
</Borderbox> 