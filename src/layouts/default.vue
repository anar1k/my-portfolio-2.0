<script setup lang="ts">
import SidebarDefault from '~/components/Sidebar/SidebarDefault.vue';
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import CookieNotification from '~/components/CookieNotification.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-4 sm:py-16">
      <u-container class="grid xl:grid-cols-[25%_1fr] gap-6">
        <aside>
          <u-card>
            <sidebar-default />
          </u-card>
        </aside>

        <section class="relative">
          <navbar-desktop />

          <u-card>
            <NuxtPage />
          </u-card>

          <navbar-mobile />
        </section>
      </u-container>
    </main>

    <cookie-notification />
  </Body>
</template>
