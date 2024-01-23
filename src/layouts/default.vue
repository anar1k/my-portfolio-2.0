<script setup lang="ts">
import CContainer from '~/components/UI/CContainer.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-4 sm:py-16">
      <CContainer class="flex flex-col xl:flex-row xl:justify-between gap-6">
        <aside class="bg-neutral-900 p-7 rounded-3xl border border-neutral-800">
          <navbar-default />
        </aside>

        <section class="bg-[#1e1e1f] p-7 rounded-3xl border border-neutral-800">
          <NuxtPage />
        </section>
      </CContainer>
    </main>

    <cookie-notification />
  </Body>
</template>
