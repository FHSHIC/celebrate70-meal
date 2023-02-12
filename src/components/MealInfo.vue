<script setup>
const infos = [
  "時間：2023年3月11日(六) 11:30入席",
  "地點：臺北市復興四路70號 (臺北市復興高中中正堂)",
  "方式：中式辦桌",
];
</script>

<template>
  <div
    class="space-y-4 px-10 pt-4 sm:flex sm:flex-col sm:items-start sm:justify-center sm:pl-[18vw] xl:pl-[22vw]"
  >
    <p
      class="h1-font mx-auto text-xl sm:w-full sm:text-2xl lg:text-3xl"
      v-for="(info, index) in infos"
      :key="index"
    >
      {{ info }}
    </p>
  </div>
</template>
