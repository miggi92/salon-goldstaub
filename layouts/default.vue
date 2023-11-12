<template>
    <div>
        <AppHeader />
        <div v-show="$pwa.needRefresh">
            <span>
                Neue Inhalte verfügbar. Bitte laden Sie die Seite neu.
            </span>

            <UButton click="$pwa.updateServiceWorker()" label="Neu laden" icon="i-mdi-refresh" />

        </div>
        <div class="ml-5 mr-5">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { appName } from '../constants'
const { $pwa } = useNuxtApp()

const route = useRoute()
var title = `${appName} - ${route.meta.title}`;

if (!route.meta.title) {
    title = appName;
}


useHead({
    meta: [{ property: 'og:title', content: title }]
})
</script>
