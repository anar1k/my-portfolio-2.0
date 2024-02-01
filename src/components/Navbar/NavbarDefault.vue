<script setup lang="ts">
const { t } = useI18n();

interface ILink {
  href: string,
  label: string,
  icon: `i-${'heroicons' | 'simple-icons'}-${string}`
}

const links = computed<ILink[]>(() => (
  [
    {
      href: '/',
      label: t('nav.about'),
      icon: 'i-heroicons-home'
    },
    {
      href: '/resume',
      label: t('nav.resume'),
      icon: 'i-heroicons-document'
    },
    {
      href: '/portfolio',
      label: t('nav.portfolio'),
      icon: 'i-heroicons-briefcase'
    },
    {
      href: '/github',
      label: 'GitHub',
      icon: 'i-simple-icons-github'
    }
  ]
));

interface IProps {
  hasIcons?: boolean
}

withDefaults(defineProps<IProps>(), {
  hasIcons: false
});
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in links"
      :key="item.label + index"
    >
      <ULink
        :to="item.href"
        class="flex flex-col items-center transition-colors"
        active-class="text-primary"
        inactive-class="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500"
      >
        <UIcon
          v-if="hasIcons"
          :name="item.icon"
        />

        {{ item.label }}
      </ULink>
    </li>
  </ul>
</template>
