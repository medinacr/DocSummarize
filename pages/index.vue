<template>
    <div class="py-7 px-3 bg-stone-100 flex justify-between items-center">

        <DropDown :countries="countries" :selected="sourceLanguageId" />
        <div>
            <div class="w-9 h-9 rounded-full p-[5.5px] inline-block bg-blue-500 text-white"><Refresh /></div>
        </div>
        <DropDown :countries="countries" :selected="translatedLanguageId" />
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import {DropDown, Refresh} from "#components";

const countries = reactive([
    {id: 1, language:"Spanish",svg:"fi-es"},
    {id: 0, language:"English",svg:"fi-us"},
    {id: 2, language:"Arabic",svg:"fi-ae"},
    {id: 3, language:"Russian",svg:"fi-ru"},
]);

let sourceLanguageId = 0;
let translatedLanguageId = 1;



</script>