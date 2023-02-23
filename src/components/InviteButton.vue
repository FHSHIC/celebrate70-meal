<script setup>
import { defineProps } from "vue";

const props = defineProps(["href", "content"]);
const href = props.href || "#transfer";
const content = props.content || "現在立刻報名";
const inPage =
  props.href === undefined || props.href.length === 0 || props.href[0] === "#";
</script>

<template>
  <div class="mx-auto flex items-center justify-center py-12 px-8 md:max-w-2xl">
    <a
      class="noto-font w-full cursor-pointer rounded-xl bg-pink-400 py-4 text-center text-3xl tracking-[0.5rem] text-white"
      v-scroll-to="{
        el: href,
        duration: 500,
        easing: 'ease-out',
      }"
      v-if="inPage"
    >
      {{ content }}
    </a>
    <a
      class="noto-font w-full cursor-pointer rounded-xl bg-pink-400 py-4 text-center text-3xl tracking-[0.5rem] text-white"
      :href="href"
      target="_blank"
      v-if="!inPage"
    >
      {{ content }}
    </a>
  </div>
</template>
