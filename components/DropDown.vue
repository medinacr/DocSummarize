<script setup>
import { ref } from 'vue'
import {DropDown, DropDownSVG} from "#components";

const props = defineProps({
    countries: Array,
    selected: Number
});

let enabled = ref(false);
const selected = ref(props.selected);
const selectedCountry = ref(props.countries.find(c => c.id === selected.value));

function toggleDropDown() {
    enabled.value = !enabled.value;
}

function selectCountry(country) {
    console.log(country)
    selectedCountry.value = country;
    selected.value = country.id;
    enabled.value = false;
    // Emit a 'country-selected' event with the newly selected country
    //emit('country-selected', selectedCountry.value)
}
</script>

<template>
    <div class="bg-white font-bold tracking-wider px-2 py-4 flex items-center rounded-xl relative cursor-pointer"
         @click="toggleDropDown">
        <div class="px-1">
            <span class="fi px-2" :class="selectedCountry.svg"></span>
        </div>
        <div class="w-20 truncate" :title="selectedCountry.language">{{ selectedCountry.language }}</div>
        <div class="pl-1 w-7"><DropDownSVG /></div>
        <div class="">
            <div v-if="enabled" class="absolute bg-white w-full top-full left-0 flex flex-col rounded-b-xl font-medium items-baseline  overflow-hidden">
                <div v-for="country in countries" :key="country.id" class="px-4 py-3 hover:bg-stone-100 w-full"
                     @click="() => selectCountry(country)">
                    <span class="fi pr-2" :class="country.svg"></span>
                    {{ country.language }}
                </div>
            </div>
        </div>
    </div>
</template>
