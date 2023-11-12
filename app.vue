<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <VitePwaManifest />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { appName, appDescription } from './constants'

useHead({
    title: appName,
    meta: [
        {
            name: 'description',
            content: appDescription
        }
    ]
})
</script>

