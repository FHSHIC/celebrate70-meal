<script setup>
import { defineProps } from "vue";

const props = defineProps(["gapHeight"]);
</script>

<template>
  <div :style="{ height: props.gapHeight }"></div>
</template>
