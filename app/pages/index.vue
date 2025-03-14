<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').path('/').first())

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
    </UPageBody>
  </UPage>
</template>
