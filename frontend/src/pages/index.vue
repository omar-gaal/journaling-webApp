<script setup lang="ts">
import { useEditorContent } from '~/composables/useEditorContent';

const entryTitle = ref('');


const { editorContent, saveEntry } = useEditorContent();

const handleSave = () => {
  saveEntry({
    title: entryTitle.value,
    content: editorContent.value,
  });
};
</script>

<template>
  <div>


    <PartialJournalWorkspace>
  
      <div class="title-textArea-btn">
        <h2 class="header-journal">Welcome</h2>
        <PartialFormfield v-model:title="entryTitle" />
        <BaseEditor v-model="editorContent"/>
        <BaseButton
          class="saveBtn"
          text="Save"
          @click="handleSave()"
        />
      </div>
   
    </PartialJournalWorkspace>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>