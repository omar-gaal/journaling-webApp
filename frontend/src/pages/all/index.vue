<script setup lang="ts">

const {data: titles, pending } = await useFetch<{ _id: string, title: string}[]>('/api/titles')

</script>

<template>

    <div class="all-entry-titles">
        <h1>All entries </h1>
        <div class="title-list">
            <BaseJournalTitles    
                class="journalTitles"
                :titles="titles" 
                :pending="pending"
                />

        </div>
    </div>


</template>

<style>

.all-entry-titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 24px;
}
.title-list {
    display: flex;
    flex-direction: column;
    gap: 6rem;
}

</style>