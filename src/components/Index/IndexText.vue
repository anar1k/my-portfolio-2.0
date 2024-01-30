<script setup lang="ts">
const list: string[] = [
  'dsadas',
  `Начальный опыт я получил на Geek University Frontend-разработки,
  который длился больше года. Я открыл для себя программирование,
  когда мне нужно было создать свой собственный веб-сайт, чтобы защитить диплом в университете,
  где я получил степень бакалавра по специальности "Информационные системы и технологии".
  Создав свой собственный веб-сайт, я с удовольствием углубился в программирование.
  Вначале я много изучал, в основном JavaScript. Теперь я полноценный Frontend-разработчик.
    `,
  ''
];
</script>

<template>
  <ul class="font-light text-sm">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="mb-3.5"
    >
      {{ item }}

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores consequatur dolorum error explicabo fuga fugiat, laborum maxime, nulla quaerat rem reprehenderit tenetur. Accusantium aliquam aut corporis deserunt dicta, dolor doloribus, et impedit incidunt ipsa iure iusto
    </li>
  </ul>
</template>
