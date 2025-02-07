<script setup>

import { ref } from 'vue';

defineProps({
    name: {
        required: true,
    },
    kaufpreis: {
        required: true,
    },
    sarnierungskosten: {
        required: true,
    },
    stadt: {
        required: true,
    },
    plz: {
        required: true,
    },
    bundesland: {
        required: true,
    },
    miete: {
        required: true,
    },
})

const contextMenu = ref(false);

function toggleContextMenu() {
    contextMenu.value = !contextMenu.value;
}

</script>
<template>
    <li class="flex items-center justify-between gap-x-6 py-5 px-4 bg-slate-100 rounded-md">
        <div class="min-w-0">
            <div class="flex items-start gap-x-3">
                <p class="text-sm/6 font-semibold text-gray-900">{{ name }}</p>
            </div>
            <div class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                <p class="whitespace-nowrap">Anschaffungskosten {{ kaufpreis}} €</p>
                <svg viewBox="0 0 2 2" class="size-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="truncate">Miete {{ miete }} €</p>
            </div>
            <div class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                <p class="whitespace-nowrap">{{ plz }}</p>
                <svg viewBox="0 0 2 2" class="size-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="truncate">{{ stadt }}</p>
                <svg viewBox="0 0 2 2" class="size-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="truncate">{{ bundesland }}</p>
            </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
            <slot name="onItemOptions"></slot>
            <div>
                <slot></slot>
            </div>

        </div>
    </li>
</template>