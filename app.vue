<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

useHead({
    title: 'Salon Goldstaub',
    meta: [
        {
            name: 'description',
            content: 'Salon Goldstaub'
        }
    ]
})
</script>