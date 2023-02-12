<script setup>
import ti_phone from "../assets/top-img-phone.png";
import ti_tablet from "../assets/top-img-tablet.png";
import ti_desktop from "../assets/top-img-desktop.png";
</script>

<template>
  <div class="absolute inset-x-0 w-full">
    <img :src="ti_phone" alt="top-img" class="h-full w-full sm:hidden" />
    <img
      :src="ti_tablet"
      alt="top-img"
      class="hidden h-full w-full sm:block lg:hidden"
    />
    <img
      :src="ti_desktop"
      alt="top-img"
      class="hidden h-full w-full lg:block"
    />
  </div>
  <div id="TopImgGap" class="h-36 sm:h-44 lg:h-52"></div>
</template>
