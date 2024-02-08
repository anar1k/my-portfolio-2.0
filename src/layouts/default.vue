<script setup lang="ts">
import NavbarDesktop from '~/components/Navbar/NavbarDesktop.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import SidebarDefault from '~/components/SidebarDefault.vue';

const { locale, t } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale
  },

  title: 'anar1k.dev',

  meta: [
    { name: 'description', content: t('description') }
  ]
});
</script>

<template>
  <Body class="text-gray-700 dark:text-gray-300">
    <NuxtLoadingIndicator :height="4" />

    <main class="pt-4 pb-20 sm:pt-16 sm:pb-24 lg:pb-16">
      <UContainer class="grid xl:grid-cols-[25%_1fr] gap-4 sm:gap-6">
        <sidebar-default />

        <section class="relative">
          <navbar-desktop />

          <UCard class="relative">
            <NuxtPage
              :transition="{
                name: 'page',
                mode: 'out-in',
              }"
            />
          </UCard>

          <navbar-mobile />
        </section>
      </UContainer>
    </main>

    <cookie-notification />
  </Body>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
