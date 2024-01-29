<script setup lang="ts">

</script>

<template>
  <ul class="text-sm mb-7">
    <li
      v-for="item in 3"
      :key="item"
      class="flex gap-x-12 group"
    >
      <div class="flex flex-col items-center">
        <div
          class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-[0_0_0_4px] shadow-gray-200 dark:shadow-gray-700"
        />

        <div class="w-[1px] h-full bg-gray-200 dark:bg-gray-700 group-last:hidden" />
      </div>

      <div class="pb-5 group-last:pb-0">
        <h4 class="mb-2 capitalize font-medium sm:text-base">
          Company
        </h4>

        <div class="text-primary font-normal">
          From — Until
        </div>

        <p class="mb-2 text-gray-500">
          Location
        </p>

        <p class="font-light text-gray-700 dark:text-gray-100 ">
          Position
        </p>
      </div>
    </li>
  </ul>
</template>
