<script setup lang="ts">
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
</script>

<template>
  <nav
    class="absolute
           right-0
           top-0-0
           z-50
           py-5
           px-10
           rounded-tr-3xl
           rounded-bl-3xl
           bg-primary-50
           dark:bg-[#282829]
           border-b
           border-l
           dark:border-gray-700
           hidden
           lg:block
    "
  >
    <navbar-default class="flex justify-around items-center gap-7 text-base font-medium" />
  </nav>
</template>
