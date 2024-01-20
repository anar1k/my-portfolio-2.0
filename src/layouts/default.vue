<script setup lang="ts">
import CContainer from '~/components/UI/CContainer.vue';
import CookieNotification from '~/components/CookieNotification.vue';
import NavbarDefault from '~/components/Navbar/NavbarDefault.vue';
</script>

<template>
  <Body>
    <NuxtLoadingIndicator />

    <main class="py-16">
      <CContainer>
        <navbar-default />

        <NuxtPage />
      </CContainer>
    </main>

    <cookie-notification />
  </Body>
</template>
