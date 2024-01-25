<script setup lang="ts">
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import SidebarDefault from '~/components/SidebarDefault.vue';
</script>

<template>
  <Body class="text-gray-700 dark:text-white">
    <NuxtLoadingIndicator />

    <main class="pt-4 pb-20 sm:pt-16 sm:pb-24 lg:pb-16">
      <UContainer class="grid xl:grid-cols-[25%_1fr] gap-4 sm:gap-6">
        <sidebar-default />

        <section class="relative">
          <navbar-desktop />

          <UCard>
            <NuxtPage />
          </UCard>

          <navbar-mobile />
        </section>
      </UContainer>
    </main>

    <cookie-notification />
  </Body>
</template>
