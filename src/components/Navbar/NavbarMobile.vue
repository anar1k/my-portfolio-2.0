<script setup lang="ts">
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-10 py-3 rounded-t-2xl bg-[#2b2b2cbf] border border-[#383838] backdrop-blur">
    <navbar-default
      class="flex justify-center items-center gap-6 text-sm"
      has-icons
    />
  </nav>
</template>
