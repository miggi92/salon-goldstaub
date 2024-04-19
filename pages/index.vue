<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <UPage>
    <UPageBody>
      <ULandingHero :links="page.hero.links" orientation="vertical">
        <template #title>
          <span v-html="page.hero.title" />
        </template>

        <template #description />
        <template #default>
          <img
            :src="page.hero.image"
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          >
        </template>
      </ULandingHero>
      <ULandingTestimonial
        :quote="page.hero.description"
        card
      />
    </UPageBody>
  </UPage>
</template>
