<script setup>
import { defineProps, reactive } from "vue";
import logo from "../assets/celebrate-70-logo.png";

let checked = reactive({
  nav: false,
});

const props = defineProps(["navContents"]);
</script>

<template>
  <div
    class="fixed inset-x-0 z-10 flex items-center justify-between bg-[#b6cecc]/[0.7] p-2 px-4"
  >
    <a
      class="flex cursor-pointer items-center justify-center gap-2"
      href="#index"
    >
      <img :src="logo" alt="" class="h-8" />
      <p class="h1-font flex flex-col items-center justify-center">
        <span class="text-sm sm:text-base lg:text-lg">70 週年</span>
        <span class="text-xs sm:text-sm lg:text-base">校慶募款餐會</span>
      </p>
    </a>

    <label
      for="nav-menu"
      class="z-30 cursor-pointer rounded-lg border-2 border-black px-2 py-1"
      v-if="!checked.nav"
    >
      <font-awesome-icon icon="fa-solid fa-bars" class="" />
    </label>
  </div>
  <div>
    <input
      type="checkbox"
      id="nav-menu"
      class="peer hidden"
      v-model="checked.nav"
    />
    <div
      class="fixed top-12 z-20 flex w-screen -translate-y-[100vh] flex-col items-center justify-center gap-y-8 bg-[#c7dfdd] py-4 px-4 duration-150 peer-checked:translate-y-0 sm:gap-10 sm:px-[10vw]"
    >
      <a
        class="w-full cursor-pointer rounded-md border-2 border-gray-500 py-2 text-center text-lg sm:text-xl lg:text-3xl"
        v-for="content in props.navContents"
        :key="content.id"
        :href="content.id"
        @click="
          () => {
            checked.nav = false;
          }
        "
      >
        {{ content.content }}
      </a>
    </div>
    <label
      for="nav-menu"
      class="fixed inset-0 z-10 hidden h-screen w-screen bg-black/40 peer-checked:block"
    ></label>
  </div>
</template>
