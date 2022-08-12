<script setup>
useHead({
  title: 'Salon Goldstaub',
  charset: 'utf-8',
  link: [
    {
      rel: 'icon', type: 'image/x-icon', href: '/logo/favicon.ico',
    },
  ],
  meta: [
    { name: 'description', content: 'Salon Goldstaub in Leingarten.' },
    { name: 'keywords', content: 'goldstaub, salon, salon goldstaub, friseur, leingarten' },
    // social media tags
    { name: 'og:title', content: 'Salon Goldstaub' },
    { name: 'og:url', content: 'https://goldstaub-heilbronn.de/' },
    { name: 'og:site_name', content: 'Salon Goldstaub' },
    { name: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
