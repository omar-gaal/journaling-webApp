<script setup lang="ts">



const isOpen = useSidebar();

function iconToggle () {
isOpen.value = !isOpen.value;
}

</script>


<template>
<div 
     @click="iconToggle" 
     :class="isOpen ? 'change' : '' ">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>    
</template>


<style>
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
} 
.change .bar2 {
    opacity: 0;
}
.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>