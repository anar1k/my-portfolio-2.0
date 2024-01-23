<script setup lang="ts">
const { t } = useI18n();

interface ILink {
  href: string,
  label: string
}

const links = computed<ILink[]>(() => (
  [
    {
      href: '/',
      label: t('about')
    },
    {
      href: '/resume',
      label: t('resume')
    },
    {
      href: '/portfolio',
      label: t('portfolio')
    },
    {
      href: '/github',
      label: 'github'
    }
  ]
));
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="(item, index) in links"
        :key="item.label + index"
      >
        <ULink
          :to="item.href"
          active-class="text-primary"
          inactive-class="text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition"
        >
          {{ item.label }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>
