


<script setup lang="ts">
import { useEditorContent } from '~/composables/useEditorContent';
import { useUmbracoData } from '~/composables/useUmbracoData';
const { umbracoData } = useUmbracoData();

const isOpen = useSidebar();
const { editorContent, saveEntry } = useEditorContent();


</script>
    <template>
      <div>
        <Transition>
        <PartialSidebar v-if="isOpen"/>
        </Transition>
        <PartialJournalWorkspace> 
        <h2 class="title-frontpage">{{ umbracoData.properties.title }}</h2>
          <BaseEditor v-model="editorContent"/>
          <BaseButton class="saveBtn" text="Save" @click="saveEntry()"/>
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