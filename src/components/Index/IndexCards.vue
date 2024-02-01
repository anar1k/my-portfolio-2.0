<script setup lang="ts">
import UiCardGradient from '~/components/Ui/UiCardGradient.vue';

interface ITechnology {
  id: number,
  title: string,
  description: string,
  icon: `i-${'heroicons' | 'simple-icons'}-${string}`,
  iconColor: string
}

const technologies: ITechnology[] = [
  {
    id: 1,
    title: 'Vue',
    description: 'I build modern and advanced websites and applications with Vue.',
    icon: 'i-simple-icons-vuedotjs',
    iconColor: '#4FC08D'
  },

  {
    id: 2,
    title: 'Nuxt',
    description: `I use Nuxt, a modern JavaScript and Typescript
      framework, while making dynamic and static websites and applications.`,
    icon: 'i-simple-icons-nuxtdotjs',
    iconColor: '#00DC82'
  },

  {
    id: 3,
    title: 'TypeScript',
    description: 'I use TypeScript to develop and maintain JavaScript application code by adding static typing.',
    icon: 'i-simple-icons-typescript',
    iconColor: '#3178C6'
  },

  {
    id: 4,
    title: 'Tailwind CSS',
    description: `I use Tailwind CSS to quickly and easily develop the user interface of web applications
      using a set of pre-designed classes.`,
    icon: 'i-simple-icons-tailwindcss',
    iconColor: '#06B6D4'
  }

];
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
            {{ item.description }}
          </p>
        </div>
      </ui-card-gradient>
    </li>
  </ul>
</template>
