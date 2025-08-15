<script lang="ts" setup>

const emits = defineEmits(['update:title']);

const title = ref('');

watch(title, (newValue) => {
    emits('update:title', newValue);
});

</script>


<template>
    <form >
        <label> 
            Title entry 
            <input v-model="title" type="text">
        </label>
    </form>
</template>