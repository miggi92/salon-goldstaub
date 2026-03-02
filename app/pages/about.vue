<script setup lang="ts">
const { data: vitae, pending: vitaePending } = await useAsyncData('vitae', () => {
  return queryCollection('data').where('stem', '=', 'data/employees/elena/vitae').first()
})

const { data: attributes, pending: attributesPending } = await useAsyncData('attributes', () => {
  return queryCollection('data').where('stem', '=', 'data/employees/elena/attributes').first()
})
const testimonial = ref({
  user: {
    name: 'Elena Köse',
    description: 'Meiserfriseurin und Geschäftsführerin',
    avatar: {
      src: '/pictures/bild_meisterfriseurin.jpg',
      alt: 'Elena Köse',
    },
  },
  quote: '“Mein Beruf ist meine Berufung, nichts verfolge ich mit mehr Leidenschaft als diesen. Und ich liebe schönes Haar und die Arbeit mit Menschen.”',
})
</script>

<template>
  <UPage>
    <UPageHeader title="Über uns" />
    <UPageBody>
      <UPageHero
        title="Meisterfriseurin"
        description="Gestatten, Elena Köse, Ihre Meisterfriseurin."
        orientation="horizontal"
      >
        <LazyNuxtImg src="/pictures/bild_meisterfriseurin.jpg" alt="Meisterfriseurin" class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
      </UPageHero>
      <UPageCard
        :description="testimonial.quote"
        spotlight
        spotlight-color="primary"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" />
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
