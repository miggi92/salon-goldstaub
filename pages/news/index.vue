<template>
  <UPage>
    <UPageHeader title="Aktuelles" />
    <UPageBody>
      <ContentQuery v-slot="{ data }" path="/news" :sort="{ date: -1 }">
        <UPageGrid>
          <div v-for="(content, index) in data">
            <UCard :key="index">
              <template #header>
                <UPageHeader
                  :title="content.title"
                  :headline="`${content.creationDate} ${content.creationTime}`"
                />
              </template>

              <p>{{ content.description }}</p>

              <template #footer>
                <div class="flex-auto">
                  <UButton :to="content._path">
                    Beitrag lesen
                  </UButton>
                </div>
              </template>
            </UCard>
          </div>
        </UPageGrid>
      </ContentQuery>
    </UPageBody>
  </UPage>
</template>
