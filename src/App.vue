<script setup>
import TopImg from "./components/TopImg.vue";
import MainTitle from "./components/MainTitle.vue";
import TopNav from "./components/TopNav.vue";
import SectionTitle from "./components/SectionTitle.vue";
import MealInfo from "./components/MealInfo.vue";
import Gap from "./components/Gap.vue";
import Flow from "./components/Flow.vue";
import Timeline from "./components/Timeline.vue";
import MealIntro from "./components/MealIntro.vue";

const preGapHeight = "4.5rem";

const navContents = [
  {
    id: "#meal-intro",
    content: "緣起",
  },
  {
    id: "#basic-info",
    content: "餐會資訊",
  },
  {
    id: "#flow",
    content: "參與流程",
  },
  {
    id: "#timeline",
    content: "餐會活動時間表",
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

    <section id="meal-intro">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="緣起" />
      <MealIntro />
    </section>

    <section id="basic-info" class="relative">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="餐會資訊" />
      <MealInfo />
    </section>

    <section id="flow">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="參與流程" />
      <Flow />
      <Gap gapHeight="50vh" />
    </section>

    <section id="timeline">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="餐會活動時間表" />
      <Timeline />
      <Gap gapHeight="50vh" />
    </section>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap");

@font-face {
  font-family: "wang-han-kai";
  src: url("./assets/test2.woff2") format("woff2");
}

@font-face {
  font-family: "testinig";
  src: url("./assets/test.woff2") format("woff2");
}

.h-font {
  font-family: "wang-han-kai", sans-serif;
}

.noto-font {
  font-family: "Noto Sans TC", sans-serif;
}

p {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
