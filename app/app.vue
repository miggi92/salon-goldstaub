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
  <UApp>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <VitePwaManifest />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
