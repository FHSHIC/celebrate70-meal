<script setup>
import FlowContent from "./FlowContent.vue";

const flows = [
  "填寫表單",
  "完成匯款",
  "等待匯款審核",
  "發送餐券及收據",
  "募款餐會",
];
</script>

<template>
  <div class="flex flex-col items-center justify-center py-4 lg:flex-row">
    <FlowContent
      class="lg:hidden"
      v-for="(flow, index) in flows"
      :isNext="index + 1 < flows.length"
      :key="index"
    >
      {{ flow }}
    </FlowContent>
    <FlowContent
      class="hidden md:flex"
      :isCol="false"
      v-for="(flow, index) in flows"
      :isNext="index + 1 < flows.length"
      :key="flow + index"
    >
      {{ flow }}
    </FlowContent>
  </div>
</template>
