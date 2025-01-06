<script setup>
defineProps({
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})
</script>

#<template>
    <li>
        <div class="flex items-center">
            <svg class="size-5 shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{ title }}</a>
        </div>
    </li>
</template>