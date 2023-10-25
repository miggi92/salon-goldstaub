<template>
  <nav class="bg-neutral-600 shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Website Logo -->
          <div>
            <a href="#" class="flex items-center py-4 px-2">
              <img class="mr-2" src="/logo.svg" style="height: 20px" alt="Logo" loading="lazy" />
              <span class="font-medium dark:text-neutral-200">
                <NuxtLink to="/">{{ title }}</NuxtLink>
              </span>
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1" v-for="navItem in navItems" :key="navItem.name">
            <a class="py-4 px-2 text-neutral-200 font-semibold hover:text-primary">
              <NuxtLink :to="navItem.path" activeClass="text-primary">{{ navItem.name }}
              </NuxtLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const title = t('title')
const navItems = [{
  name: t('home'),
  path: '/'
}, {
  name: t('services'),
  path: '/services'
}, {
  name: t('about'),
  path: '/about'
}, {
  name: t('contact'),
  path: '/contact'
}]
</script>