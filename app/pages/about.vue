<script setup lang="ts">
const { data: vitae, pending: vitaePending } = await useAsyncData('vitae', () => {
  return queryCollection('data').where('stem', '=', 'data/employees/elena/vitae').first()
})

const { data: attributes, pending: attributesPending } = await useAsyncData('attributes', () => {
  return queryCollection('data').where('stem', '=', 'data/employees/elena/attributes').first()
})

const { data: profile, pending: profilePending } = await useAsyncData('profile', () => {
  return queryCollection('data').where('stem', '=', 'data/employees/elena/profile').first()
})
</script>

<template>
  <UPage>
    <UPageHeader title="Über uns" />
    <UPageBody>
      <UPageHero
        :title="profile?.meta?.title_short"
        :description="`Gestatten, ${profile?.meta?.name}, Ihre ${profile?.meta?.title_short}.`"
        orientation="horizontal"
      >
        <LazyNuxtImg :src="profile?.meta?.picture" :alt="profile?.meta?.title_short" class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
      </UPageHero>
      <UPageCard
        :description="profile?.meta?.testimonial?.quote"
        spotlight
        spotlight-color="primary"
      >
        <template #footer>
          <UUser :avatar="{ src: profile?.meta?.picture, alt: profile?.meta?.title }" :name="profile?.meta?.name" :description="profile?.meta?.title" />
        </template>
      </UPageCard>
      <UPageSection title="Vitae" description="Hier nun die wichtigsten Stationen meiner beruflichen Vitae" align="center">
        <UPageGrid>
          <UPageCard
            v-for="(card, index) of vitae?.meta?.body"
            :key="index"
            v-bind="card"
            spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageSection>
      <UPageSection title="Was mich noch auszeichnet" description="" align="center">
        <UPageGrid>
          <UPageCard
            v-for="(attribute, index) of attributes?.meta?.body"
            :key="index"
            v-bind="attribute"
            spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
