<script setup>
defineProps({
    title: {
        type: String,
    },
    value: '',
})
</script>
<template>
    <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">{{ title }}</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ value }}</dd>
    </div>
</template>
