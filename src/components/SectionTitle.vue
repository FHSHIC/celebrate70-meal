<script setup>
import { defineProps } from "vue";

const props = defineProps(["title"]);
</script>

<template>
  <h2 class="h-font text-center text-3xl lg:text-5xl">
    {{ props.title }}
  </h2>
</template>
