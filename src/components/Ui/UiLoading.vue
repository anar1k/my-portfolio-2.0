<script setup lang="ts">
interface IProps {
  loading?: boolean,
}

withDefaults(defineProps<IProps>(), {
  loading: false
});
</script>

<template>
  <Transition>
    <div
      v-if="loading"
      class="absolute inset-0 bg-[#FFFFFFB2] dark:bg-gray-700 opacity-75 z-10 flex justify-center items-center"
    >
      <div class="flex gap-x-2 animate-pulse">
        <div
          v-for="item in 3"
          :key="item"
          class="size-3 bg-gray-700 dark:bg-white rounded-full"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
