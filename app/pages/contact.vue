<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { email, required } from '@vuelidate/validators'

const title = ref('Kontakt')

const state = reactive({
  name: '',
  email: '',
  message: '',
})

const schema = computed(() => {
  return {
    email: { required, email },
    name: { required },
    message: { required },
  }
})

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  // eslint-disable-next-line no-console
  console.log(event.data)
}
</script>

<template>
  <UPage>
    <UPageHeader :title="title" />
    <UPageBody>
      <div class="flex">
        <UForm :state="state" :schema="schema" class="space-y-4 w-fit" @submit="onSubmit">
          <UFormField label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormField>
          <UFormField label="E-Mail" name="email">
            <UInput v-model="state.email" type="email" />
          </UFormField>
          <UFormField label="Nachricht" name="message">
            <UTextarea v-model="state.message" />
          </UFormField>

          <UButton type="submit" label="Abschicken" icon="i-mdi-email" />
        </UForm>
      </div>
    </UPageBody>
  </UPage>
</template>
