<template>
    <div class="min-h-screen w-full bg-gray-200 dark:bg-gray-800 custom-flex-container flex-col">
        <TheHeader>

        </TheHeader>
        <main class="container flex-grow relative p-2 mx-auto rounded-4xl dark:bg-dark-800 bg-light-200 text-black dark:text-white shadow-md dark:shadow-none glass-morphic glass-border">
            <slot />
        </main>
        <TheFooter>
            
        </TheFooter>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style lang="scss">

</style>