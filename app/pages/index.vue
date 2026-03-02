<script setup lang="ts">

const { data: testimonials, pending: testimonialsPending } = await useAsyncData('testimonials', () => {
  return queryCollection('data').where('stem', '=', 'data/customers/testimonials').first()
})

const links = ref([
  {
    label: 'Termin vereinbaren',
    to: 'https://www.studiobookr.com/salon-goldstaub-64474#/',
    icon: 'i-heroicons-calendar',
    target: '_blank',
  },
  {
    label: 'Instagram',
    to: 'https://www.instagram.com/salongoldstaub/',
    target: '_blank',
    icon: 'i-simple-icons-instagram',
  },
])

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
</script>

<template>
  <UPage>
    <UPageBody>
      <UPageHero
        :links="links" orientation="horizontal" title="Salon Goldstaub"
        description="Der Name ist Programm: Bei uns erstrahlt Ihr Haar in neuem Glanz. Ob schimmernde Colorationen,  voluminöse Stylings oder  gesunde Pflege – wir setzen Ihre Wünsche gekonnt um.Erleben Sie  exklusiven Service und  individuelle Beratung in einem  stilvollen Ambiente. Buchen Sie jetzt Ihren Termin online!"
      >
        <img
          src=" /pictures/goldstaub_image.jpg"
          alt="Image"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        >
      </UPageHero>

      <UMarquee
      pause-on-hover
      reverse
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials?.meta?.body"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser :avatar="{ alt: testimonial.name }" :name="testimonial.name" :description="formatDate(testimonial.date)" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UMarquee>
    </UPageBody>
  </UPage>
</template>
