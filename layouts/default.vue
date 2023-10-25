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
const route = useRoute()
console.log(route)

useHead({
    meta: [{ property: 'og:title', content: `Salon Goldstaub - ${route.meta.title}` }]
})
</script>
