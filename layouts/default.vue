<template>
    <div>
        <AppHeader />
        <div class="ml-5 mr-5">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { appName } from '~/constants'

const route = useRoute()
var title = `${appName} - ${route.meta.title}`;

if (!route.meta.title) {
    title = appName;
}


useHead({
    meta: [{ property: 'og:title', content: title }]
})
</script>
