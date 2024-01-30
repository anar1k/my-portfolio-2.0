<script setup lang="ts">
const list: string[] = [
  'I am a programmer who aware of the tiny moments in a persons life that reveal greater truths.',
  `My concentrate is Web Developer & Cybersecurity, my expertise lies within this both
  jobs since 2011, and the main languages in my tech stack are Python, Javascript, React, HTML/CSS, Kotlin, etc.
  `,
  'I also have 1 year of experience in Back End Web Developer and 2 years in Data Analyst.',
  'Apart from being a programmer, I enjoy most of my time being an aspirin musician, gamer, ' +
  'watching comedy, action and horror genre movies, or spend my time with my family. I spend a ' +
  'large amount of my free time exploring the latest technology advancements.'
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
