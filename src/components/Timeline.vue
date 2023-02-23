<script setup>
const timelines = [
  {
    time: "11:30-12:00",
    content: "入席",
  },
  {
    time: "12:00-12:20",
    content: "來賓致詞",
  },
  {
    time: "12:20-14:20",
    content: "餐敘交流及表演",
  },
  {
    time: "14:30-15:00",
    content: "校慶再見",
  },
];
</script>

<template>
  <div class="mx-auto w-full px-6 pt-8 pb-6 md:max-w-3xl md:text-4xl">
    <div
      class="flex flex-col gap-5 rounded-md border-2 border-gray-100 p-8 md:gap-16"
    >
      <p
        class="space-y-5 text-center text-3xl"
        v-for="(timeline, index) in timelines"
        :key="index"
      >
        <span class="block">{{ timeline.time }}</span>
        <span class="block">{{ timeline.content }}</span>
      </p>
    </div>
  </div>
</template>
