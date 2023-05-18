<script setup>
  import { ref, computed} from 'vue';
  import CircleAnimation from './CircleAnimation.vue';
  import { summarizer } from '@/utils/summarizer.js'

  const emit = defineEmits(['response'])

  const props = defineProps({
      selectedCountry: String
  })

  const textAreaRef = ref(null);
  const length = ref(0);
  const loading = ref(false);

  let showAnimation = false
  function getTextValue () {
      if(textAreaRef.value) {
          const value = textAreaRef.value.value
          length.value = value.length
      }
  }

  const hasText = computed(() => {
      if (textAreaRef.value) {
          const value = length.value;
          return value > 0;
      }
  });

  function clearText () {
      textAreaRef.value.value = '';
      length.value = 0
  }

  async function summarizeText() {
      if(hasText.value){
          const value = textAreaRef.value.value
          const language = props.selectedCountry
          loading.value = true
          emit('response', await summarizer(value, language))
          loading.value = false
          clearText()
      }
  }

</script>

<template>
     <div class="py-7 px-3 bg-white m-4 rounded-xl h-50">
            <div class="flex">
                <textarea @input="getTextValue" ref="textAreaRef" class="w-full resize-none p-3 border-none border-transparent outline-none text-lg h-36 mb-3" maxlength="200" placeholder="Enter Text"></textarea>
                <button v-show="hasText" @click="clearText" class="h-full">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="flex justify-between">
                <Loading v-show="loading"/>
                <svg v-show="!loading" @click="summarizeText" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span class="m1-auto text-sm text-gray-500"> {{length}}/200</span>
            </div>
     </div>
</template>