<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    identifier: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
    autocomplete: {
        type: String,
        required: false,
    },
})

const model = defineModel()
</script>



<template>
    <div class="sm:col-span-6">
        <label :for="identifier" class="block text-sm/6 font-medium text-gray-900">{{ label }}</label>
        <div class="mt-2">
            <input v-model="model" :type="type" :name="identifier" :id="identifier" :autocomplete="autocomplete"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
    </div>
</template>
