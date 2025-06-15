


<script setup lang="ts">
import { useEditorContent } from '~/composables/useEditorContent';
const {data, pending, error} = await useFetch('http://localhost:35865/umbraco/delivery/api/v2/content/item/')


const isOpen = useSidebar();
const { editorContent, saveEntry } = useEditorContent();


</script>
    <template>
    <Transition>
    <PartialSidebar v-if="isOpen"/>
    </Transition>
    
    <PartialJournalWorkspace> 
      <!-- testing -->
       <pre v-if="!pending">
        {{ data }}
       </pre>
       <p v-if="error">Error: {{ error.message }}</p>
       <!-- testing -->
      <h1 class="title-frontpage">Welcome back</h1>
      <BaseEditor v-model="editorContent"/>
      <BaseButton @click="saveEntry()" text="Save" class="saveBtn" />

    </PartialJournalWorkspace>



  
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