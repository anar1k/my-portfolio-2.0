<script setup lang="ts">
const isAcceptCookies = useCookie<boolean | undefined>('accept-cookies');
</script>

<template>
  <div
    v-if="!isAcceptCookies"
    class="mx-4
           inset-x-0
           sm:mx-auto
           sm:w-1/2
           xl:w-1/4
           bg-[#3f3f40]
           rounded-lg
           shadow-xl
           px-6
           py-3
           bottom-20
           fixed
           z-10
           flex
           items-center
           justify-between
           animate-bounce
    "
  >
    <span class="text-white normal-case">{{ $t('cookie') }}! 🍪</span>

    <UButton
      color="white"
      :ui="{
        variant: {
          link: `text-white
                 hover:text-neutral-400
                 transition
          `
        }
      }"
      variant="link"
      icon="i-heroicons-x-mark"
      @click="isAcceptCookies = true"
    />
  </div>
</template>
