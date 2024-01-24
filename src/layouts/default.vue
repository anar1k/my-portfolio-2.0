<script setup lang="ts">
import UiContainer from '~/components/Ui/UiContainer.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import UiCard from '~/components/Ui/UiCard.vue';
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue';
import SidebarDefault from '~/components/Sidebar/SidebarDefault.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-4 sm:py-16">
      <ui-container class="grid xl:grid-cols-[25%_1fr] gap-6">
        <aside>
          <ui-card>
            <sidebar-default />
          </ui-card>
        </aside>

        <section class="relative">
          <navbar-desktop />

          <ui-card>
            <NuxtPage />
          </ui-card>

          <navbar-mobile />
        </section>
      </ui-container>
    </main>

    <cookie-notification />
  </Body>
</template>
