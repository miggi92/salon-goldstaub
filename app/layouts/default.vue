<script setup lang="ts">
import { appName } from '../constants'

const { $pwa } = useNuxtApp()
const needRefresh = $pwa?.needRefresh || false

const route = useRoute()
let title = `${appName} - ${route.meta.title}`

if (!route.meta.title)
  title = appName

useHead({
  meta: [{ property: 'og:title', content: title }],
})
</script>

<template>
  <div>
    <AppHeader />
    <div v-show="needRefresh">
      <span>
        Neue Inhalte verfügbar. Bitte laden Sie die Seite neu.
      </span>

      <UButton click="$pwa.updateServiceWorker()" label="Neu laden" icon="i-mdi-refresh" />
    </div>
    <UContainer>
      <div>
        <slot />
      </div>
    </UContainer>
    <AppFooter />
  </div>
</template>
