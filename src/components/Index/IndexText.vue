<script setup lang="ts">
const list: string[] = [
  `Hey, my name is Stefan, and I'm a Frontend Developer.
    My passion is to create and develop a clean UI/UX for my users.
  `,
  'My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.'
];
</script>

<template>
  <ul class="text-base font-light">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="mb-6"
    >
      {{ item }}
    </li>
  </ul>
</template>
