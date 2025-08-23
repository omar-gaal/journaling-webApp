<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Entry } from '~/types/entry';


const route = useRoute();
const entryId = route.params.id;

const { data: entry, pending, error } = await useFetch<Entry>(`http://localhost:5001/entry/${entryId}`);

</script>

<template>
    <div>
        <div v-if="pending">
            <p>Loading entry...</p>
        </div>
        <div v-else-if="error">
            <p>Error: {{ error.message }}</p>
            <p>Could not load the journal entry. Please try again later</p>
        </div>
        <div v-else-if="entry">
            <h1>{{ entry.title }}</h1>
            <div v-html="entry.content"></div>
        </div>
        <div v-else>
            <p>Entry not found</p>
        </div>
    </div>
</template>
