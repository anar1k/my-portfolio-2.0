<script setup lang="ts">
interface IContact {
  icon: `i-${'heroicons' | 'simple-icons'}-${string}`,
  heading: string
  label: string,
  href: `https://${string}`,
}

const contacts: IContact[] = [
  {
    heading: 'github',
    icon: 'i-simple-icons-github',
    label: 'anar1k',
    href: 'https://github.com/anar1k'
  }
];
</script>

<template>
  <div class="relative">
    <div class="flex items-center gap-x-4">
      <nuxt-img
        class="w-20 md:w-40"
        src="/images/avatar.png"
        alt="avatar"
      />

      <div>
        <h2 class="text-base font-medium mb-2">
          Абилов А. И.
        </h2>

        <p class="bg-[#22262a] rounded py-1 px-3 text-xs capitalize">
          {{ $t('developer') }}
        </p>
      </div>
    </div>

    <div>
      <u-divider class="my-4" />

      <ul>
        <li
          v-for="(item, index) in contacts"
          :key="item.heading + index"
          class="flex gap-x-4 items-center"
        >
          <div
            class="w-8
                   h-8
                   flex
                   justify-center
                   items-center
                   rounded-lg
                   shadow-md
                   bg-gradient-to-br
                   from-[#404040]
                   to-[#40404000]
                   to-50%
            "
          >
            <UIcon
              :name="item.icon"
              class="text-primary"
            />
          </div>

          <div>
            {{ item.heading }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
