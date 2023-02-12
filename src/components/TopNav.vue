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
      class="fixed top-12 z-20 flex h-12 w-screen -translate-y-24 flex-col items-center justify-center bg-[#c7dfdd] duration-75 peer-checked:translate-y-0"
    >
      <a
        class="w-full cursor-pointer text-center"
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
