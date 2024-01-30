<script setup lang="ts">

import UiCardGradient from '~/components/Ui/UiCardGradient.vue';
</script>

<template>
  <ul class="grid lg:grid-cols-2 gap-6">
    <li
      v-for="item in 3"
      :key="item"
      class="text-center sm:text-left"
    >
      <ui-card-gradient
        :ui="{
          body: {
            base: 'sm:flex sm:gap-x-5'
          }
        }"
      >
        <div>
          <UIcon
            name="i-simple-icons-react"
            class="w-12 h-12 text-[#61DAFB]"
          />
        </div>

        <div>
          <h4 class="text-base sm:text-lg mb-2 capitalize">
            React
          </h4>

          <p class="font-light text-sm sm:text-base">
            I build modern and advanced websites and applications with React or Expo by React Native.
          </p>
        </div>
      </ui-card-gradient>
    </li>
  </ul>
</template>
