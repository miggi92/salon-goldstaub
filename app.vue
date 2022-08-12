<script setup>
useHead({
  title: 'Salon Goldstaub',
  link: [
    {
      rel: 'icon', type: 'image/x-icon', href: '/logo/favicon.ico',
    },
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
