
<script setup lang="ts">
import { PartialSidebar } from '#components';

const isOpen = useSidebar();

</script>

<template>
    <div>
        <PartialMainHeader/>
         
        <Transition>
           <PartialSidebar v-if="isOpen"/>
        </Transition>
        
        <div>
            <slot/>
        </div>

    </div>
</template>