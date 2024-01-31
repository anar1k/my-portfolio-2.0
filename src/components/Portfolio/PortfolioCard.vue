<script setup lang="ts">
defineProps<{index: boolean}>();
</script>

<template>
  <div class="grid auto-rows-[200px_auto] group cursor-pointer gap-y-3">
    <div class="overflow-hidden rounded-2xl relative">
      <NuxtPicture
        format="webp"
        :src="`/images/portfolio/img${index ? 0 : 1}.png`"
        :img-attrs="{
          class: 'object-cover group-hover:scale-[1.1] h-full w-full transition-transform duration-200 ease-in',
          alt: ''
        }"
      />

      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60" />

      <UIcon
        name="i-heroicons-eye"
        class="absolute
               inset-0
               m-auto
               h-8
               w-8
               text-white
               opacity-0
               group-hover:opacity-100
               scale-75
               group-hover:scale-100
               duration-200
               ease-in
        "
      />
    </div>

    <div class="pl-3 capitalize leading-5">
      <div class="font-medium text-gray-900 dark:text-white group-hover:text-primary">
        eazydeal
      </div>

      <div class="text-gray-500 dark:text-gray-400 font-light">
        dsada
      </div>
    </div>
  </div>
</template>
