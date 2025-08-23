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
            <input v-model="title" type="text" class="title-input">
        </label>
    </form>
</template>


<style scoped>
.title-input {
    
    width: 100%; 
    padding: 0.75rem 1rem; 
    font-size: 1rem;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem; 
    color: #333; 
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); 
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.title-input:focus {
    outline: none; 
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}


label {
    display: block;
    font-weight: 600;
    color: #555;
    margin-bottom: 0.5rem;
    
}
</style>