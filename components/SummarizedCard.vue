<script setup>
const emit = defineEmits(['card-deleted', 'card-saved'])
const props = defineProps({
    summarizedText: Array
});
function deleteCard(id) {
    emit('card-deleted', id);
}

function copyText(summary) {
    const textToCopy = summary;
    // showAnimation = true;
    // setTimeout(() => {
    //     showAnimation = false;
    // }, 500);
    navigator.clipboard.writeText(textToCopy);
}

function saveCard(summary) {
    emit('card-saved', summary)
}

</script>

<template>
    <div v-for="summaryItem in summarizedText" :key="summaryItem.id" class="py-7 px-3 bg-white m-4 rounded-xl h-50">
        <div class="flex">
            <div class="w-full resize-none p-3 border-none border-transparent outline-none text-lg">{{ summaryItem.summary }}</div>
            <button class="h-full">
                <svg @click="deleteCard(summaryItem.id)" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="flex justify-between">
            <svg @click="saveCard(summaryItem)"  :style="{ fill: summaryItem.saved ? '#FDDA0D' : 'none' }"  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"/></svg>
            <svg @click="copyText(summaryItem.summary)" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/></svg>
        </div>
    </div>
</template>