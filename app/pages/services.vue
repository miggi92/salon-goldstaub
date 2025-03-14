<script setup lang="ts">
const damenServices = [{
  description: '',
  title: 'Trijuven Haarverjüngung',
}, {
  description: '',
  title: 'Waschen, Schneiden, Föhnen',
}, {
  description: '',
  title: 'Pflege intensiv',
}]

const herrenServices = [{
  description: '',
  title: 'Schnitt incl. Styling und Beratung',
}, {
  description: '',
  title: 'Seiten schneiden',
}, {
  description: '',
  title: 'Shading',
}, {
  description: '',
  title: 'Maschinen Haarschnitt',
}]
</script>

<template>
  <UPageSection title="Leistungen" description="Leistungen des Salon Goldstaub">
    <UPage>
      <UPageHeader title="Damen" />

      <UPageBody>
        <UPageGrid>
          <UPageCard
            v-for="(module, index) in damenServices" :key="index" v-bind="module" :title="module.title" target="_blank" :description="module.description" spotlight
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
            v-for="(module, index) in herrenServices" :key="index" v-bind="module" :title="module.title" target="_blank" :description="module.description" spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UPageSection>
</template>
