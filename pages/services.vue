<script setup lang="ts">
const { data: page } = await useAsyncData('services', () => queryContent('/services').findOne())
</script>

<template>
  <ULandingSection :title="page?.title" :description="page?.description">

    <UPage>
      <UPageHeader :title="page?.damen.title"/>

      <UPageBody>
        <UPageGrid>
      <UPageCard v-for="(module, index) in page?.damen.cards" :key="index" v-bind="module" target="_blank">
        <template #description>
          <span class="line-clamp-2">{{ module.description }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
        </UPageBody>
    </UPage>



    
    <UPage>
      <UPageHeader :title="page?.herren.title"/>

      <UPageBody>
        <UPageGrid>
      <UPageCard v-for="(module, index) in page?.herren.cards" :key="index" v-bind="module" target="_blank">
        <template #description>
          <span class="line-clamp-2">{{ module.description }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
        </UPageBody>
    </UPage>
  </ULandingSection>
</template>
