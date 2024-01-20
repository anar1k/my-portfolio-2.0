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
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ item.label }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>
