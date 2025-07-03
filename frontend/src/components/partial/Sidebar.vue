<script setup lang="ts">
// Define props to receive the labels from pages/index.vue
defineProps<{
  newEntryLabel?: string;
  allEntriesLabel?: string;
  latestLabel?: string;
}>();
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
        <h3>- lorem ipsum lorem </h3>
        <h3>- lorem ipsum lorem </h3>
        <h3>- lorem ipsum lorem </h3>
    </aside>
</template>

<style>
/* Your styles */
</style>