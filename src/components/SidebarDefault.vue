<script setup lang="ts">
import UiThemeButton from '~/components/Ui/UiThemeButton.vue';
import UiLanguageButton from '~/components/Ui/UiLanguageButton.vue';

interface IContact {
  icon: `i-${'heroicons' | 'simple-icons'}-${string}`,
  heading: string
  label: string,
  href: string,
}

const contacts: IContact[] = [
  {
    heading: 'github',
    icon: 'i-simple-icons-github',
    label: 'anar1k',
    href: 'https://github.com/anar1k'
  },

  {
    heading: 'telegram',
    icon: 'i-simple-icons-telegram',
    label: 'anar1k',
    href: 'https://t.me/anar1k'
  },

  {
    heading: 'mail',
    icon: 'i-heroicons-envelope',
    label: 'aanar1k14@gmail.com',
    href: 'mailto:aanar1k14@gmail.com'
  }
];

const isShowContacts = ref<boolean>(false);
</script>

<template>
  <aside class="relative">
    <UCard class="xl:sticky xl:top-16">
      <div class="flex items-center xl:flex-col gap-x-4 sm:gap-6">
        <nuxt-img
          class="w-20 sm:w-32 xl:w-40 rounded-full"
          src="/images/avatar.webp"
          alt="avatar"
        />

        <div class="xl:flex flex-col items-center">
          <h2 class="text-base sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 dark:text-white">
            {{ $t('sidebar.name') }}
          </h2>

          <UBadge
            variant="soft"
            :ui="{
              base: 'capitalize shadow',
              rounded: 'rounded-lg',
              size: {
                sm: 'px-2 py-1 sm:px-4 sm:py-2'
              }
            }"
          >
            Web {{ $t('developer') }}
          </UBadge>
        </div>
      </div>

      <button
        class="text-primary
             absolute
             right-0
             top-0
             z-10
             p-[10px]
             sm:px-4
             rounded-tr-3xl
             rounded-bl-3xl
             border-l
             border-b
             dark:border-gray-700
             shadow-md
             bg-gradient-to-bl
             from-primary-100
             to-white
             dark:from-primary-700
             dark:to-gray-800
             to-60%
             xl:hidden
      "
        type="button"
        :aria-label="$t('sidebar.showContacts')"
        @click="isShowContacts = !isShowContacts"
      >
        <span class="capitalize text-xs hidden sm:inline">{{ $t('sidebar.showContacts') }}</span>

        <UIcon
          class="block duration-200 sm:hidden"
          :class="[isShowContacts ? '-rotate-180' : '']"
          name="i-heroicons-chevron-down"
        />
      </button>

      <div
        class="grid grid-rows-[0fr] transition-all duration-300 ease-out xl:!grid-rows-[1fr]"
        :class="[isShowContacts ? 'grid-rows-[1fr]' : '']"
      >
        <div class="overflow-hidden">
          <u-divider class="my-4 sm:my-8" />

          <ul class="grid md:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-5 md:gap-7">
            <li
              v-for="(item, index) in contacts"
              :key="item.heading + index"
              class="flex gap-x-4 items-center"
            >
              <div
                class="w-8
                       sm:w-12
                       h-8
                       sm:h-12
                       flex
                       justify-center
                       items-center
                       rounded-lg
                       sm:rounded-xl
                       shadow-md
                       bg-gradient-to-br
                       from-primary-200
                       dark:from-primary-700
                       to-white
                       dark:to-gray-800
                       to-60%
                "
              >
                <UIcon
                  :name="item.icon"
                  class="text-primary sm:text-xl"
                />
              </div>

              <div>
                <p class="text-gray-500 dark:text-gray-400 text-xs uppercase mb-0.5">
                  {{ item.heading }}
                </p>

                <a
                  class="text-sm
                         sm:text-base
                         font-light
                         text-gray-900
                         dark:text-white
                         hover:text-primary-700
                         dark:hover:text-primary-500
                         hover:underline
                  "
                  :href="item.href"
                  target="_blank"
                >
                  {{ item.label }}
                </a>
              </div>
            </li>
          </ul>

          <u-divider class="my-4 sm:my-8 xl:hidden" />

          <div class="flex items-center xl:justify-center mt-4">
            <ui-language-button />

            <ui-theme-button />
          </div>
        </div>
      </div>
    </UCard>
  </aside>
</template>
