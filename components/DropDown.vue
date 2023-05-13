<script setup>
import { ref } from 'vue'
import {DropDown, DropDownSVG} from "#components";

const props = defineProps({
    countries: Array,
    selected: Number
});

const enabled = ref(false);
const selected = ref(props.selected);

const selectedLanguage = computed(()=> {
    return props.countries.filter((country)=>{
        return country.id === selected.value
    })[0];
});
</script>

<template>
    <div class="bg-white font-bold tracking-wider px-2 py-4 flex items-center rounded-xl relative cursor-pointer"
         @click="()=>enabled=!enabled">
        <div class="px-1">
            <span class="fi px-2" :class="selectedLanguage.svg"></span>
        </div>
        <div class="w-20 truncate" title="English">{{ selectedLanguage.language }}</div>
        <div class="pl-1 w-7"><DropDownSVG /></div>
        <div class="">
            <div v-if="enabled" class="absolute bg-white w-full top-full left-0 flex flex-col rounded-b-xl font-medium items-baseline  overflow-hidden">
                <div v-for="country in countries" :key="country.id" class="px-4 py-3 hover:bg-stone-100 w-full">
                    <span class="fi pr-2" :class="country.svg"></span>
                    {{ country.language }}
                </div>
            </div>
        </div>
    </div>

</template>

