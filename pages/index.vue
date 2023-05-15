<template>
    <div class="py-7 px-3 bg-stone-100 flex justify-between items-center">

        <DropDown :countries="countries" :selected="sourceLanguageId" isOpen="isOpen1" @toggle="toggleDropdown1"
                  @country-selected="sourceLanguageId = $event.id" />
        <div>
            <div class="w-9 h-9 rounded-full p-[5.5px] inline-block bg-blue-500 text-white"><Refresh /></div>
        </div>
        <DropDown :countries="countries" :selected="translatedLanguageId" isOpen="isOpen2" @toggle="toggleDropdown2"
                  @country-selected="translatedLanguageId = $event.id" />
    </div>

    <div>
        <div class="py-7 px-3 bg-white m-4 rounded-xl flex">
            <textarea class="w-full resize-none p-3 border-none border-transparent outline-none text-lg"></textarea>
            <button class="h-full">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
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