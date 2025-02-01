<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <form>
        <div class="space-y-12">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                <div class="flex flex-col">
                    <h2 class="text-base/7 font-semibold text-gray-900">{{ title }}</h2>
                    <p class="mt-1 text-sm/6 text-gray-600">{{ description }}</p>
                    <slot name="infos"></slot>
                </div>


                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <slot name="form"></slot>
                </div>
            </div>
        </div>
        <slot></slot>
    </form>
</template>
