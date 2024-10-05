<script lang="ts">
    export let imgURL: string;
    export let skill: string;
</script>

<div class=" flex items-center w-fit h-12 border border-white/70 rounded-lg px-2 p-1">
    <img class=" h-7 mr-2" src={imgURL} alt="skill icon">
    <p>{skill}</p>
</div>