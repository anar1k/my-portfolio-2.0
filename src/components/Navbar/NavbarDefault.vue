<script setup lang="ts">
import type { TIcon } from '~/types/icon';

const { t } = useI18n();

interface ILink {
  name: string,
  label: string,
  icon: TIcon
}

const links = computed<ILink[]>(() => (
  [
    {
      name: 'index',
      label: t('title.about'),
      icon: 'i-heroicons-home'
    },
    {
      name: 'resume',
      label: t('title.resume'),
      icon: 'i-heroicons-document'
    },
    {
      name: 'portfolio',
      label: t('title.portfolio'),
      icon: 'i-heroicons-briefcase'
    },
    {
      name: 'github',
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
        :to="{ name: item.name }"
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
