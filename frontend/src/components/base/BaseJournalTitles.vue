<script setup lang="ts">
const props = defineProps<{
    titles: Array<{ _id: string; title: string;}> | null | undefined;
    pending: boolean
}>();
</script>

<template>
    <div class="jounal-titles">
        <h3 v-if="props.pending">Loading Titles....</h3>
        <template v-else-if="props.titles && props.titles.length > 0">
            <h3 v-for="entry in props.titles" :key="entry._id">
                <NuxtLink :to="`/entries/${entry._id}`" class="link-style">
                    - {{ entry.title }}
                </NuxtLink>
            </h3>
        </template>
        <h3 v-else>No titles found.</h3>
    </div>
</template>


<style scoped>
.link-style {
  color: inherit; 
  text-decoration: none; 
}


.link-style:hover {
  text-decoration: underline;
  color: #555; 
}
</style>