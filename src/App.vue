<script setup>
import TopImg from "./components/TopImg.vue";
import MainTitle from "./components/MainTitle.vue";
import TopNav from "./components/TopNav.vue";
import SectionTitle from "./components/SectionTitle.vue";
import MealInfo from "./components/MealInfo.vue";
import Gap from "./components/Gap.vue";

const navContents = [
  {
    id: "#basic-info",
    content: "餐會資訊",
  },
];
</script>

<template>
  <div
    class="relative h-screen w-screen overflow-y-auto overflow-x-hidden bg-[#c7dfdd]"
  >
    <TopNav :navContents="navContents" />
    <section id="index">
      <TopImg />
      <MainTitle />
    </section>

    <section id="basic-info" class="relative pb-5">
      <Gap gapHeight="3rem" />
      <SectionTitle title="餐會資訊" class="mb-5" />
      <MealInfo />
    </section>
  </div>
</template>

<style>
@font-face {
  font-family: "wang-han-chi";
  src: url("./assets/test2.woff2") format("woff2");
}
.h1-font {
  font-family: "wang-han-chi", sans-serif;
}
</style>
