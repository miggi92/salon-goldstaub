<script setup lang="ts">
const { data: womenServices, pending: womenPending } = await useAsyncData('women-services', () => {
  return queryCollection('data').where('stem', '=', 'data/services/women').first()
})

const { data: menServices, pending: menPending } = await useAsyncData('men-services', () => {
  return queryCollection('data').where('stem', '=', 'data/services/men').first()
})

const isLoading = computed(() => womenPending.value || menPending.value)
</script>

<template>
  <UPageSection title="Leistungen" description="Leistungen des Salon Goldstaub">
    <UPage>
      <UPageHeader title="Damen" />

      <UPageBody>
        <UPageGrid>
          <UPageCard
            v-for="(service, index) in womenServices?.meta?.body" :key="index" v-bind="service" target="_blank" spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>

    <UPage>
      <UPageHeader title="Herren" />

      <UPageBody>
        <UPageGrid>
          <UPageCard
            v-for="(service, index) in menServices?.meta?.body" :key="index" v-bind="service" target="_blank" spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UPageSection>
</template>
