<script setup lang="ts">
import UiCardGradient from '~/components/Ui/UiCardGradient.vue';

const aboutStore = useABoutStore();

const { technologies } = storeToRefs(aboutStore);

const { locale } = useI18n();
</script>

<template>
  <ul class="grid lg:grid-cols-2 gap-6">
    <li
      v-for="item in technologies"
      :key="item.id"
      class="text-center sm:text-left"
    >
      <ui-card-gradient
        class="h-full"
        :ui="{
          body: {
            base: 'sm:flex sm:gap-x-5'
          }
        }"
      >
        <div>
          <UIcon
            dynamic
            :name="item.icon"
            class="w-12 h-12"
            :style="{
              color: item.iconColor
            }"
          />
        </div>

        <div>
          <h4 class="text-lg font-medium sm:text-xl mb-2 capitalize text-gray-900 dark:text-white">
            {{ item.title }}
          </h4>

          <p class="text-sm dark:text-gray-300">
            {{ item.description[locale] }}
          </p>
        </div>
      </ui-card-gradient>
    </li>
  </ul>
</template>
