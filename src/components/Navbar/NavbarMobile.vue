<script setup lang="ts">
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
</script>

<template>
  <nav
    class="fixed
           inset-x-0
           bottom-0
           z-50
           py-3
           rounded-t-2xl
           bg-white
           dark:bg-[#2b2b2cbf]
           border-t
           border-x
           dark:border-gray-700
           backdrop-blur
           shadow-2xl
           lg:hidden
    "
  >
    <navbar-default
      class="flex justify-center items-center gap-6 text-sm"
      has-icons
    />
  </nav>
</template>
