<script setup>
import { reactive, ref, onMounted } from "vue";
import {DropDown, Refresh} from "#components";
import SummarizedCard from '/components/SummarizedCard.vue'
import TextEntry from '/components/TextEntry.vue'

const firstPrompt =
    {
        id: generateUniqueId(),
        summary: "Enter a document above and press the summarize button to summarize the document in the desired language.",
        saved: true
    }

const summarizedText = ref([])
let selectedCountry = ref('Spanish')
const loading = ref(false)
function getSavedSummaries() {
    const savedSummaries = localStorage.getItem('summary');
    if (savedSummaries) {
        const parsedSummaries = JSON.parse(savedSummaries);
        summarizedText.value = [...parsedSummaries, ...summarizedText.value];
    } else {
        // Add the first prompt to the summarizedText array and local storage
        summarizedText.value.unshift(firstPrompt);
        localStorage.setItem('summary', JSON.stringify(summarizedText.value));
    }
}

function generateUniqueId() {
    // Generate a unique ID based on the current timestamp
    return Date.now();
}
function storeSummarizedText(text) {
    summarizedText.value.unshift(text);
    console.log(summarizedText.value)
}

function deleteCard(id) {
    summarizedText.value = summarizedText.value.filter((t) => t.id !== id)
}
function saveCard(summary) {
    summary.saved = !summary.saved;

    // Update the corresponding summary in the summarizedText array
    const index = summarizedText.value.findIndex(item => item.id === summary.id);
    if (index !== -1) {
        summarizedText.value[index] = summary;
    }

    // Filter the saved summaries
    const savedSummaries = summarizedText.value.filter(item => item.saved);

    if (savedSummaries.length > 0) {
        // Save the saved summaries to local storage
        localStorage.setItem('summary', JSON.stringify(savedSummaries));
    } else {
        // Remove the summary from local storage
        localStorage.removeItem('summary');
    }
}

const countries = reactive([
    {id: 1, language:"Spanish",svg:"fi-es"},
    {id: 0, language:"English",svg:"fi-us"},
    {id: 2, language:"Arabic",svg:"fi-ae"},
    {id: 3, language:"Russian",svg:"fi-ru"},
]);
function countrySelected (country) {
    selectedCountry.value = country.language
    console.log(selectedCountry)
}

let sourceLanguageId = 0;
let translatedLanguageId = 1;

onMounted(() => {
    getSavedSummaries();
});

</script>

<template>
    <div class="py-7 px-3 flex justify-between items-center">

        <DropDown :countries="countries" :selected="sourceLanguageId"
                  @country-selected="sourceLanguageId = $event.id" />
        <div>
            <div class="w-9 h-9 rounded-full p-[5.5px] inline-block bg-blue-500 text-white"><Refresh /></div>
        </div>

        <DropDown :countries="countries" :selected="translatedLanguageId"
                  @country-selected="translatedLanguageId = $event.id" @selectedCountry = '(countrySelected)'/>
    </div>

    <div>
        <TextEntry @response="storeSummarizedText" :selectedCountry="selectedCountry"/>
    </div>

    <div>
        <SummarizedCard :summarizedText="summarizedText" @card-deleted="deleteCard" @card-saved="saveCard"/>
    </div>
</template>