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
      label: t('about'),
      icon: 'i-heroicons-home'
    },
    {
      href: '/resume',
      label: t('resume'),
      icon: 'i-heroicons-document'
    },
    {
      href: '/portfolio',
      label: t('portfolio'),
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
        class="flex flex-col items-center"
        active-class="text-primary"
        inactive-class="text-neutral-200 hover:text-neutral-500 hover:text-neutral-400 transition"
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
