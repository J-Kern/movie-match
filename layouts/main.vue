<template>
    <div>
        <header>

        </header>
        <main class="container p-2 mx-auto border dark:border-dark-900 border-light-500">
            <slot />
        </main>
        <footer>

        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        getPreferredDarkMode() {
            return window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                const newColorScheme = e.matches ? "dark" : "light";
            });
        }
    }
});
</script>

<style>

</style>