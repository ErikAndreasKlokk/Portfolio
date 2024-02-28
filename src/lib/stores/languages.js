import { readonly, writable } from 'svelte/store';

const Norsk = {
    word1: "Hei",
    word2: "Heisann"
}

const English = {
    word1: "Hello",
    word2: "Helluu"
}


export const language = writable({
    word1: Norsk.word1
});
