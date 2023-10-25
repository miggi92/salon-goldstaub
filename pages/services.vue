<template>
    <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
const { t } = useI18n({
    useScope: 'local'
})
const title = ref(t('services'))
</script>