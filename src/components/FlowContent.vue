<script setup>
import { defineProps } from "vue";

const props = defineProps(["isCol", "borderColor", "isNext"]);

const isCol = props.isCol === undefined ? true : props.isCol;
const borderColor =
  props.borderColor === undefined ? "white" : props.borderColor;
const isNext = props.isNext === undefined ? false : props.isNext;
</script>

<template>
  <div
    class="flex items-center justify-center gap-3"
    :class="[isCol ? 'flex-column' : '']"
  >
    <div
      class="p-font flex flex-col items-center justify-center rounded-md border-2 p-4 text-xl shadow-md md:text-3xl"
      :class="[!isCol ? 'text-updown' : '']"
      :style="{
        'border-color': props.borderColor,
        width: isCol ? '100%' : '10vw',
      }"
    >
      <p class="tracking-[0.6rem]"><slot></slot></p>
    </div>
    <div class="w-full py-3 text-center" v-if="props.isNext">
      <font-awesome-icon
        v-if="!isCol"
        icon="fa-solid fa-arrow-right"
        class="text-5xl"
      />
      <font-awesome-icon
        icon="fa-solid fa-arrow-down"
        class="text-5xl"
        v-if="isCol"
      />
    </div>
  </div>
</template>

<style scoped>
.flex-column {
  flex-direction: column;
}

.text-updown {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
