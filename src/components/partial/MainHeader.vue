<script setup lang="ts">

import { useUmbracoData } from '#imports'; 

const {umbracoData} = useUmbracoData(); 
</script>

<template>
    <header>
        <div class="mainHeader">
            <BaseHamburgerMenu/>
            <h1 v-if="umbracoData?.properties">{{ umbracoData?.properties.journalHeader }}</h1>
         
        </div>
    </header>
</template>