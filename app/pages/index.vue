<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <UPage>
    <UPageBody>
      <ULandingHero :links="page?.hero?.links" orientation="horizontal">
        <template #title>
          <span v-html="page?.hero.title" />
        </template>

        <template #default>
          <img
            :src="page?.hero.image"
            alt="Image"
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          >
        </template>

        <template #description>
          <span v-html="page?.hero.description" />
        </template>
      </ULandingHero>
    </UPageBody>
  </UPage>
</template>
