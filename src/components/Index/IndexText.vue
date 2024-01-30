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
  <ul class="font-light">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="mb-3.5"
    >
      {{ item }}

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid asperiores consequatur dolorum error explicabo fuga fugiat, laborum maxime, nulla quaerat rem reprehenderit tenetur. Accusantium aliquam aut corporis deserunt dicta, dolor doloribus, et impedit incidunt ipsa iure iusto magnam modi necessitatibus non nostrum obcaecati optio quas quisquam quo soluta sunt totam vero! Error eveniet ipsa, iure magnam nesciunt numquam ullam. Alias deleniti et fugit ipsa iste laboriosam, maiores nam natus nulla quis quisquam repellendus sunt vero vitae voluptatibus! Dolorum et illo nemo. Accusantium dolorem ex sequi? Ab accusamus alias animi architecto at beatae, consectetur cum delectus deserunt dignissimos enim eum iure iusto laboriosam magni maxime nostrum odit officia perspiciatis porro praesentium quia quibusdam quo repellat sed temporibus vel voluptas. Adipisci aliquam asperiores at debitis dolorem earum est et ex excepturi id itaque iure iusto magnam mollitia nihil nostrum nulla obcaecati, odio optio quaerat quasi quia suscipit totam unde, velit voluptate voluptatum! Accusantium at aut blanditiis consectetur corporis cupiditate debitis illo, illum ipsa iste labore laboriosam libero modi neque nisi, nulla perspiciatis placeat quia ratione, voluptatibus! A, commodi consequuntur cumque cupiditate debitis distinctio dolore eos eum fuga fugit hic id incidunt inventore maxime minus molestias mollitia, necessitatibus nemo nobis non officiis pariatur perferendis quaerat quam quas quibusdam quis quod reprehenderit saepe sapiente similique suscipit tempore tenetur totam ullam, veniam vitae? Aperiam autem commodi consequatur distinctio dolore eius error illum libero minima minus nam nemo optio pariatur quibusdam quidem, repellendus reprehenderit. Eos, officia, voluptas. Corporis cupiditate, eum ex facere in incidunt iusto laborum maxime molestias nulla obcaecati odit perferendis porro quo sequi similique sit voluptas voluptatibus. Doloremque enim, ipsum nam neque placeat sed. Commodi cupiditate dolor eligendi fugit officia optio pariatur possimus provident qui quod sed, sint velit! Deserunt doloremque ducimus sequi. Ab, aliquid animi atque consectetur culpa cupiditate distinctio dolor dolore dolores ducimus eaque eius explicabo facere fuga illo ipsa ipsam ipsum laudantium magni maxime nam natus numquam obcaecati omnis optio quas quibusdam, repudiandae rerum sequi soluta tempore temporibus tenetur ullam veritatis voluptas voluptates voluptatum? Accusamus accusantium, alias aliquid architecto atque beatae cumque dignissimos earum eos esse hic modi perferendis quam, quisquam, rem sint voluptates. Aperiam cupiditate debitis earum esse est quaerat quisquam quod saepe sint sit. Aliquid amet eum in iusto nihil, possimus veritatis voluptas! Animi, asperiores aspernatur consequuntur cumque dolor dolorem eaque enim et facere itaque laudantium libero maxime nostrum optio possimus praesentium repellat rerum unde, ut, veritatis? Aliquam aspernatur autem corporis culpa delectus doloribus, eaque earum et illum in incidunt labore maiores maxime modi natus, necessitatibus nesciunt non nostrum porro possimus quam quos rerum sequi tempora ut voluptate voluptatem voluptatibus. At enim libero nulla qui, veniam veritatis vero. Amet debitis dolores error excepturi impedit in neque quia soluta tempore vitae? Et modi, perferendis provident qui ullam voluptatibus. Eius fugit iure molestias perspiciatis quam repudiandae sunt voluptas. Atque blanditiis cumque dignissimos fuga ut vero! Accusamus aliquam, aut exercitationem explicabo id incidunt ipsum laboriosam molestiae nihil porro, sed suscipit, vero voluptate? Atque dicta eligendi magni neque nihil provident quam repellendus?
    </li>
  </ul>
</template>
