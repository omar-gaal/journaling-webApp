


<script setup lang="ts">
import { useEditorContent } from '~/composables/useEditorContent';
const { data: umbracoData, pending, error, refresh } = await useFetch('http://localhost:35865/umbraco/delivery/api/v2/content/item');


const isOpen = useSidebar();
const { editorContent, saveEntry } = useEditorContent();


</script>
    <template>
    <Transition>
    <PartialSidebar v-if="isOpen"/>
    </Transition>
    
    <PartialJournalWorkspace> 
      <!-- testing -->
       <h1>Umbraco Content</h1>

       <div v-if="pending">
        <p>loading content...</p>
       </div>

       <div v-else-if="error">
        <p>Error loading content: {{ error.message }}</p>
       </div>

       <div v-else-if="umbracoData && umbracoData.properties">
        <h2>{{  umbracoData.properties.title }}</h2>
        <p>{{ umbracoData.properties.helloWorld }}</p>
       </div>
       
        <div v-else>
         <p>No content found.</p>
          </div>
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