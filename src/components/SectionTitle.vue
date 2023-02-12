<script setup>
import { defineProps } from "vue";

const props = defineProps(["title"]);
</script>

<template>
  <h2 class="h1-font text-center text-2xl sm:text-3xl lg:text-5xl">
    {{ props.title }}
  </h2>
</template>
