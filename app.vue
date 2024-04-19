<script setup lang="ts">
import { appDescription, appName } from './constants'

useHead({
  title: appName,
  meta: [
    {
      name: 'description',
      content: appDescription,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
