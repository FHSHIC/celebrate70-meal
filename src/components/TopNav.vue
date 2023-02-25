<script setup>
import { defineProps, reactive } from "vue";
import logo from "../assets/celebrate-70-logo.png";

const checked = reactive({
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
      v-scroll-to="{
        el: '#index',
        easing: 'ease',
        duration: 400,
      }"
    >
      <img :src="logo" alt="" class="h-8" />
      <p
        class="h-font flex w-full flex-col items-center justify-center px-3 tracking-normal"
      >
        <span class="text-sm sm:text-base lg:text-lg">
          70 週年&nbsp;&nbsp;&nbsp;
        </span>
        <span class="text-xs sm:text-sm lg:text-base">校慶募款餐會</span>
      </p>
    </a>

    <label
      for="nav-menu"
      class="z-30 flex cursor-pointer items-center justify-center gap-x-3 rounded-lg border-2 border-black px-2 py-1 xl:hidden"
      v-if="!checked.nav"
    >
      <font-awesome-icon icon="fa-solid fa-bars" class="text-xl sm:text-2xl" />
      <p class="hidden flex-col items-center justify-center sm:flex">
        <span>快捷</span>
        <span>選單</span>
      </p>
    </label>

    <div class="hidden items-center justify-center gap-x-10 pr-6 xl:flex">
      <a
        class="noto-font cursor-pointer py-1 px-2 text-xl hover:bg-black/60 hover:text-gray-50"
        v-for="content in props.navContents"
        :key="content.id"
        :href="content.id"
        v-scroll-to="{
          el: content.id,
          duration: 500,
          easing: 'ease-out',
        }"
      >
        {{ content.content }}
      </a>
    </div>
  </div>
  <div>
    <input
      type="checkbox"
      id="nav-menu"
      class="peer hidden"
      v-model="checked.nav"
    />
    <div
      class="fixed top-12 z-20 flex w-screen -translate-y-[200vh] flex-col items-center justify-center gap-y-8 bg-[#c7dfdd] py-4 px-4 duration-150 peer-checked:translate-y-0 sm:gap-10 sm:px-[10vw]"
    >
      <a
        class="w-full cursor-pointer rounded-md border-2 border-gray-500 py-2 text-center text-lg sm:text-xl lg:text-3xl"
        v-for="content in props.navContents"
        :key="content.id"
        :href="content.id"
        v-scroll-to="{
          el: content.id,
          duration: 500,
          easing: 'ease-out',
        }"
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
