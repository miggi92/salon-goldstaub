<script setup lang="ts">
import { bookingURL } from '~/app/constants'

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
