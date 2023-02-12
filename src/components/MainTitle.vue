<script setup>
import logo from "../assets/celebrate-70-logo.png";
import sakura from "../assets/sakura.png";
import soil from "../assets/sakura_soil.png";
import fhshText from "../assets/fhshTEXT.png";
</script>

<template>
  <h1 class="px-5 text-center lg:top-48">
    <img :src="fhshText" alt="" class="mx-auto mb-6 w-[70vw]" />
    <span
      class="h-font rounded-[2.5rem] bg-[#f8b7b5] px-6 py-1 text-2xl sm:px-8 sm:text-3xl lg:px-12 lg:text-5xl"
    >
      70週年校慶募款餐會
    </span>

    <div class="lg:w-/612 relative mx-auto mt-3 w-full px-6 sm:w-6/12">
      <img :src="logo" alt="復興高中70周年" class="" />
    </div>

    <div class="relative">
      <p
        class="h-font absolute inset-0 left-[24vw] top-8 w-[60vw] text-[6vw] md:top-14 lg:top-16"
      >
        相思大屯 ‧ 苒苒歲月
      </p>
      <img :src="soil" alt="" class="w-full" />
      <img
        :src="sakura"
        alt=""
        class="absolute bottom-1 left-0 w-[20vw] sm:bottom-4 lg:bottom-6"
      />
    </div>
  </h1>
</template>
