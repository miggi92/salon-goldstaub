<template>
  <UHeader :links="links">
    <template #logo>
      <div class="w-12 h-6 flex-no-shrink fill-current">
        <AppLogo />
      </div>
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const links = [{
  label: "Startseite",
  to: '/'
}, {
  label: "Leistungen",
  to: '/services'
}, {
  label: "Über uns",
  to: '/about'
}, {
  label: "Kontakt",
  to: '/contact'
}]
</script>