<script setup lang="ts">
import { useEditorContent } from '~/composables/useEditorContent';
// import { useUmbracoData } from '~/composables/useUmbracoData';
// import { useUmbracoSettings } from '~/composables/useUmbracoSettings';






const isOpen = useSidebar();
const { editorContent, saveEntry } = useEditorContent();

</script>

<template>
  <div>
    <Transition>
      <PartialSidebar
        v-if="isOpen"
      />
    </Transition>

    <PartialJournalWorkspace>
  
      <div class="title-textArea-btn">
        <h2 class="header-journal">Welcome</h2>


        <BaseEditor v-model="editorContent"/>
        <BaseButton
          class="saveBtn"
          text="Save"
          @click="saveEntry()"
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