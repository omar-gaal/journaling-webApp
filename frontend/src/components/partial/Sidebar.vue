<script setup lang="ts">
// Define props to receive the labels from pages/index.vue
defineProps<{
  newEntryLabel?: string;
  allEntriesLabel?: string;
  latestLabel?: string;
}>();   


const {data: titles, pending } = useFetch('/api/titles')
console.log(titles.value)
</script>

<template>
    <aside class="sidebar">
     
        <br>
         <div class="sidebar-child" >
         <Icon name="uil:chat" size="2rem" />
         <h2>{{ newEntryLabel || 'New entry' }}</h2>
        </div>

        <div class="sidebar-child" >
            <Icon name="uil:bookmark" size="2rem"/>
            <NuxtLink to="/all">
                <h2>{{ allEntriesLabel || 'All entries' }}</h2>
            </NuxtLink>
        </div>

        <h2>{{ latestLabel || 'Latest' }}</h2>
        <h3 v-if="pending"> loading Titles...</h3>
        <template v-else-if="titles && titles.length > 0">
            <h3 v-for="title in titles" :key="title">
                - {{ title }}
            </h3>
        </template>
        <h3 v-else>No titles found.</h3>




        <!-- <h2>{{ latestLabel || 'Latest' }}</h2>
        <h3>- lorem ipsum lorem </h3>
        <h3>- lorem ipsum lorem </h3>
        <h3>- lorem ipsum lorem </h3> -->
    </aside>
</template>

<style>
/* Your styles */
</style>