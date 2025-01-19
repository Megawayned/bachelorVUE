<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <RouterLink
        :to="link"
        class="block px-3 py-1 text-sm/6 text-gray-900"
        role="menuitem"
        tabindex="-1"
        id="options-menu-0-item-0"
    >
        {{ name }}
    </RouterLink>
</template>