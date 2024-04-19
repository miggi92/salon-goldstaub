<script setup lang="ts">
const title = 'Leistungen'
</script>

<template>
  <UPage>
    <UPageHeader :title="title" />
    <UPageBody prose>
      <div>
        <ContentDoc path="/services" />
      </div>
    </UPageBody>
  </UPage>
</template>
