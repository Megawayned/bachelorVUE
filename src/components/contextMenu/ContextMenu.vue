<script setup>
import { ref } from 'vue';

const contextMenu = ref(false);

function toggleContextMenu() {
    contextMenu.value = !contextMenu.value;
}
</script>
<template>
    <div class="relative flex-none">
        <button v-on:click="toggleContextMenu()" type="button"
            class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900" id="options-menu-0-button"
            aria-expanded="false" aria-haspopup="true">
            <span class="sr-only">Open options</span>
            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path
                    d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
        </button>

        <div v-show="contextMenu"
            class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabindex="-1">
            <slot></slot>
        </div>
    </div>
</template>