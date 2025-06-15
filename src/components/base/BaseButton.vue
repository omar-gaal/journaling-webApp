<script setup lang="ts">

const props = defineProps<{
  text?: string
}>()



</script>


<template>

    <button class="save-btn">
      {{ text }}
    </button>
</template>