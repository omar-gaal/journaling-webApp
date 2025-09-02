<script setup lang="ts">
defineProps<{
  newEntryLabel?: string;
  allEntriesLabel?: string;
  latestLabel?: string;
}>();   



const {data: titles, pending } = await useFetch<{ _id: string, title: string}[]>('/api/titles')

</script>

<template>
    <aside class="sidebar">
     
        <br>
         <div class="sidebar-child" >
         <Icon name="uil:chat" size="2rem" />
         <NuxtLink to="/">{{ newEntryLabel || 'New entry' }}</NuxtLink>
        </div>

        <div class="sidebar-child" >
            <Icon name="uil:bookmark" size="2rem"/>
            <NuxtLink to="/all">
                <h2>{{ allEntriesLabel || 'All entries' }}</h2>
            </NuxtLink>
        </div>

        <h2>{{ latestLabel || 'Latest' }}</h2>
        <BaseJournalTitles
        class="journalTitles"
        :titles="titles?.slice(0, 14)" 
        :pending="pending"
        />


    </aside>
</template>

