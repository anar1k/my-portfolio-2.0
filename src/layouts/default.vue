<script setup lang="ts">
import CContainer from '~/components/UI/CContainer.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
import NavbarMobile from '~/components/Navbar/NavbarMobile.vue';
import LanguageToggleButton from '~/components/UI/LanguageToggleButton.vue';
import ThemeToggleButton from '~/components/UI/ThemeToggleButton.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-4 sm:py-16">
      <CContainer class="grid xl:grid-cols-[25%_1fr] gap-6">
        <aside>
          <language-toggle-button />

          <theme-toggle-button />

          <navbar-default class="p-7 bg-neutral-900 rounded-3xl border border-[#383838]" />
        </aside>

        <section class="bg-[#1e1e1f] p-7 rounded-3xl border border-[#383838]">
          <NuxtPage />

          <navbar-mobile />
        </section>
      </CContainer>
    </main>

    <cookie-notification />
  </Body>
</template>
