<script setup lang="ts">
const vitae = [{
  title: 'Ausbildung im Salon D´Ostuni Heilbronn',
  description: 'D´Ostuni ist mehrmaliger Landesmeister im Bereich Herrenhaarschnitt',
  class: 'col-span-4 row-span-1',
  icon: 'i-mdi-school',
}, {
  title: 'Meisterschule „Zieger Akademie“ am Bodensee',
  description: 'Besuch der renommierten Meisterschule „Zieger Akademie“ am Bodensee mit Abschluss als Friseurmeisterin.Trainiert und geschult wurde ich unter anderem von Natalie Zieger, Friseurweltmeisterin',
  class: 'col-span-5 row-span-1',
  icon: 'i-mdi-school',
}, {
  title: 'Laufende Fort- und Weiterbildung',
  description: 'z. B. ein Seminar speziell zu der schwierigen Farbe blond. Als Blond-Expertin habe ich eine große Erfahrung mit dieser Farbe',
  class: 'col-span-4 row-span-1',
  icon: 'i-mdi-school',
}, {
  title: 'Spezielles Training',
  description: 'Spezielles Training auf die Farben Illumina Color von Wella Auszeichnungen',
  class: 'col-span-3 row-span-1',
  icon: 'i-mdi-school',
}, {
  title: 'IHK Auszeichnung',
  description: ' Bei der Gesellenprüfung unter den 10 Besten im Kammerbezirk Heilbronn, Urkunde und goldene Schere für besondere Leistung',
  class: 'col-span-3 row-span-1',
  icon: 'i-mdi-trophy-award',
}, {
  title: '3. Platz bei der Südwestdeutschen Meisterschaft',
  description: ' 3. Platz bei der Südwestdeutschen Meisterschaft für Gesellen in den Bereichen Herrenhaarschnitt und Styling',
  class: 'col-span-5 row-span-1',
  icon: 'i-mdi-trophy',
}]

const attributes = [{
  title: 'Hochzeits-Komplettservice',
  description: 'meine Stärke im Hochzeits-Komplettservice',
  class: 'col-span-3 row-span-1',
  icon: 'i-mdi-cake-layered',
}, {
  title: 'Flecht- und Hochsteckfrisuren',
  description: 'meine Leidenschaft für Flecht- und Hochsteckfrisuren',
  class: 'col-span-4 row-span-1',
  icon: 'i-game-icons-knot',
}, {
  title: 'Make-ups',
  description: ' meine typgerechten Tages- und Abend-Make-ups',
  class: 'col-span-3 row-span-1',
  icon: 'i-streamline-make-up-brush',
}, {
  title: 'Shading-Service',
  description: 'mein schneller und wirkungsvoller Shading-Service für Männer, die Anti-Grau-Sofort-Schattierung ohne zu Färben',
  class: 'col-span-3 row-span-1',
  icon: 'i-mdi-format-color-fill',
}]
const testimonial = ref({
  user: {
    name: 'Elena Köse',
    description: 'Meiserfriseurin und Geschäftsführerin',
    avatar: {
      src: '/pictures/bild_meisterfriseurin.jpg',
      alt: 'Elena Köse',
    },
  },
  quote: '“Mein Beruf ist meine Berufung, nichts verfolge ich mit mehr Leidenschaft als diesen. Und ich liebe schönes Haar und die Arbeit mit Menschen.”',
})
</script>

<template>
  <UPage>
    <UPageHeader title="Über uns" />
    <UPageBody>
      <UPageHero
        title="Meisterfriseurin"
        description="Gestatten, Elena Köse, Ihre Meisterfriseurin."
        orientation="horizontal"
      >
        <LazyNuxtImg src="/pictures/bild_meisterfriseurin.jpg" alt="Meisterfriseurin" class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
      </UPageHero>
      <UPageCard
        :description="testimonial.quote"
        spotlight
        spotlight-color="primary"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" />
        </template>
      </UPageCard>
      <UPageSection title="Vitae" description="Hier nun die wichtigsten Stationen meiner beruflichen Vitae" align="center">
        <UPageGrid>
          <UPageCard
            v-for="(card, index) of vitae"
            :key="index"
            v-bind="card"
            spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageSection>
      <UPageSection title="Was mich noch auszeichnet" description="" align="center">
        <UPageGrid>
          <UPageCard
            v-for="(attribute, index) of attributes"
            :key="index"
            v-bind="attribute"
            spotlight
            spotlight-color="primary"
          />
        </UPageGrid>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
