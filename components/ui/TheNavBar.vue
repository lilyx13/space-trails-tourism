<template>
  <nav
    class="grid grid-cols-4 place-content-around place-items-center gap-4 backdrop-blur-xl py-6"
  >
    <nuxt-link
      v-for="link in navLinks"
      :key="link.id"
      :to="link.url"
      class="nav"
      ><span class="font-bold">{{ link.num }}</span
      >{{ link.text }}</nuxt-link
    >
  </nav>
</template>
<script setup></script>
