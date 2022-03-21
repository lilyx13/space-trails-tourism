<template>
  <!-- This should point to  -->
  <nuxt-link
    :to="props.url"
    class="grid place-items-center rounded-full bg-white p-4 md:p-6 lg:p-8 hover:drop-shadow-xl md:hover:drop-shadow-2xl text-black text-3xl md:text-4xl"
    >{{ props.text }}</nuxt-link
  >
</template>
<script setup>
g;
const props = defineProps({
  url: {
    type: String,
    default: "/",
  },
  text: {
    type: String,
    default: "Explore",
  },
});
</script>
