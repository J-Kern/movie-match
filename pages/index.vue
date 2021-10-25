<template>
  <NuxtLayout name="main">
    <section class="w-full min-h-full">
      <div class="text-center font-bold">Hello World!</div>
      <div class="text-center">I'm a Text...</div>
      <div class="text-center">created with Emmet</div>
      <div class="text-center"></div>
      <div class="text-center">and efficient</div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      testString: ""
    }
  }
})
</script>
