<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Entry } from '~/types/entry';

const route = useRoute();
const entryId = route.params.id;

const { data: entry, pending, error } = await useFetch<Entry>(`http://localhost:5001/entry/${entryId}`);
</script>

<template>
  <div class="page-container">
    <div v-if="pending">
      <p>Loading entry...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
      <p>Could not load the journal entry. Please try again later.</p>
    </div>
    <div v-else-if="entry" class="entry-content-wrapper">
      <h1 class="entry-title">{{ entry.title }}</h1>
      <div class="entry-text" v-html="entry.content"></div>
    </div>
    <div v-else>
      <p>Entry not found.</p>
    </div>
  </div>
</template>

<style scoped>
/*
  Use a scoped style block here to ensure these styles
  only apply to this component.
*/
.page-container {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

.entry-content-wrapper {
  max-width: 800px; /* Set a max-width for readability */
  width: 100%;
  padding: 2rem;
  background-color: #fdfdfd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  line-height: 1.6;
}

.entry-title {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.entry-text {
  font-size: 1rem;
  color: #555;
   word-wrap: break-word; /* Older browsers */
  word-break: break-word; /* Modern browsers */
}

/* You might need to add specific styles for elements inside the v-html rendered content */
.entry-text h1, .entry-text h2, .entry-text p {
  margin-bottom: 1rem;
}
</style>