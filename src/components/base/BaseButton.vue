<script setup lang="ts">

 defineProps<{
  text?: string
}>()



</script>


<template>

    <button class="save-btn">
      {{ text }}
    </button>
</template>