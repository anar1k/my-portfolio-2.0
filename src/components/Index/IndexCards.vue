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
          <h4 class="text-lg font-medium sm:text-xl mb-2 capitalize text-gray-900 dark:text-white">
            React
          </h4>

          <p class="text-sm dark:text-gray-300">
            I build modern and advanced websites and applications with React or Expo by React Native.
          </p>
        </div>
      </ui-card-gradient>
    </li>
  </ul>
</template>
