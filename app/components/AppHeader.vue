<script setup lang="ts">
import { bookingURL } from '../../constants'

const links = [{
  label: 'Startseite',
  to: '/',
}, {
//   label: 'Aktuelles',
//   to: '/news',
// }, {
  label: 'Leistungen',
  to: '/services',
}, {
  label: 'Über uns',
  to: '/about',
}, {
  label: 'Termin vereinbaren',
  to: bookingURL,
  target: '_blank',
}]
</script>

<template>
  <UHeader>
    <template #title>
      <div class="w-12 h-6 flex-no-shrink fill-current">
        <AppLogo />
      </div>
    </template>

    <UNavigationMenu :items="links" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
