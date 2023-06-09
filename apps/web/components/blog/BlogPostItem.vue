<template>
  <div class="flex row-span-6" :class="sizeClass">
    <NuxtLink
      class="flex flex-col transition-all duration-300 hover:-translate-y-2"
      :class="[data.isIncoming ? 'cursor-auto' : 'cursor-pointer']"
      :to="`/blog/${data.slug}`"
    >
      <div
        class="flex h-[320px] laptop:h-[480px] relative rounded-3xl overflow-hidden"
        data-cursor-size="80"
        data-cursor-icon="fi fi-sr-play"
      >
        <!-- categories -->
        <div
          class="flex bg-white dark:text-black px-5 h-12 rounded-full gap-3 absolute right-5 top-5 justify-center items-center z-10"
        >
          <span class="h-2 w-2 rounded-full bg-black"></span>
          <span class="text-base font-medium">{{ data.tag }}</span>
        </div>

        <!-- release date -->
        <div
          v-show="!data.isIncoming"
          class="flex justify-center items-center bg-white px-5 h-12 rounded-full gap-3 absolute text-gray-600 text-base left-5 bottom-5 z-10"
        >
          {{ parsedDate }}
        </div>

        <!-- incoming tags -->
        <span
          class="flex absolute z-10 bg-white dark:text-black px-6 py-3 rounded-full bottom-4 left-4 text-lg"
          v-show="data.isIncoming"
        >
          Coming soon
        </span>

        <!-- thumbnail -->
        <NuxtImg
          :src="data.thumbnail"
          class="h-full w-full object-cover transition-all duration-1000 hover:scale-105"
        />
      </div>

      <h3
        class="text line-clamp-2 font-medium mt-8 w-10/12 leading-snug"
        :class="size === 'large' ? 'text-3xl' : 'text-2xl'"
      >
        {{ data.title }}
      </h3>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { BlogPost } from '~/types/content'

interface BlogPostItemProps {
  size?: 'medium' | 'large'
  data: BlogPost
}

const { size = 'medium', data } = defineProps<BlogPostItemProps>()

const sizeClass = computed(() => {
  return size == 'large' ? 'col-span-4' : 'col-span-2'
})
const parsedDate = computed(() => {
  return parseDateToRelative(new Date(data._createdAt))
})
</script>
