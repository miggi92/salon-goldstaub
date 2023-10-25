<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route)

useHead({
    meta: [{ property: 'og:title', content: `Salon Goldstaub - ${route.meta.title}` }]
})
</script>
