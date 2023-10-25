<template>
    <div>
        <div class="grid gap-4 place-content-center">
            <h1 class="text-primary text-5xl">{{ title }}</h1>
            <AppLogo />
        </div>

        <h2>News</h2>
    </div>
</template>

<script setup lang="ts">
const title = ref('Salon Goldstaub')
</script>
