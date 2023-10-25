<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
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