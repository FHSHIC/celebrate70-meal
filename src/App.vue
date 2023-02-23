<script setup>
import { watch, reactive } from "vue";

import TopImg from "./components/TopImg.vue";
import MainTitle from "./components/MainTitle.vue";
import TopNav from "./components/TopNav.vue";
import SectionTitle from "./components/SectionTitle.vue";
import MealInfo from "./components/MealInfo.vue";
import Gap from "./components/Gap.vue";
import Flow from "./components/Flow.vue";
import Timeline from "./components/Timeline.vue";
import MealIntro from "./components/MealIntro.vue";
import InviteButton from "./components/InviteButton.vue";
import TransferInfo from "./components/TransferInfo.vue";

const preGapHeight = "5rem";

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
    id: "#timeline",
    content: "餐會活動時間表",
  },
  {
    id: "#flow",
    content: "參與流程",
  },
  {
    id: "#transfer",
    content: "參與方式",
  },
];
</script>

<template>
  <div
    id="container"
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
      <InviteButton content="我要參加" href="#flow" />
    </section>

    <section id="basic-info" class="relative">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="餐會資訊" />
      <MealInfo />
      <InviteButton content="我要參加" href="#flow" />
    </section>

    <section id="timeline">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="餐會活動時間表" />
      <Timeline />
      <InviteButton content="我要參加" href="#flow" />
    </section>

    <section id="flow">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="參與流程" />
      <Flow />
      <InviteButton content="了解更多" />
    </section>

    <section id="transfer">
      <Gap :gapHeight="preGapHeight" />
      <SectionTitle title="參與方式" />
      <TransferInfo />
      <InviteButton href="https://forms.gle/u73UoxdhkdRZbpq58" />
      <Gap gapHeight="10vh" />
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
  @apply tracking-[0.2rem];
}
</style>
