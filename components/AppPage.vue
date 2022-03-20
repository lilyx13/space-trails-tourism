<template>
  <div v-editable="blok">
    <component
      v-for="blok in blok.body"
      :key="blok.id"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
