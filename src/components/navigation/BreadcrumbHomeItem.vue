<script setup>
import IconHome from '../icons/IconHome.vue';
</script>

<template>
    <li>
        <div>

        
            <RouterLink to="/" class="text-gray-400 hover:text-gray-500">
                <IconHome />
            
                <span class="sr-only">Home</span>
            </RouterLink>
        </div>
    </li>
</template>