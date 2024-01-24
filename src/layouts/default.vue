<script setup lang="ts">
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import SidebarDefault from '~/components/Sidebar/SidebarDefault.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-4 sm:py-16">
      <UContainer class="grid xl:grid-cols-[25%_1fr] gap-4 sm:gap-6">
        <aside class="relative">
          <sidebar-default />
        </aside>

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
