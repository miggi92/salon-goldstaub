<template>
    <UPage>
        <UPageHeader :title="title" />
        <UPageBody>
            <UForm :state="state" :schema="schema" @submit="onSubmit">
                <UFormGroup label="Name" name="name">
                    <UInput v-model="state.name" />
                </UFormGroup>7
                7
                <UFormGroup label="E-Mail" name="email">
                    <UInput v-model="state.name" />
                </UFormGroup>

                <UButton type="submit" label="Abschicken" icon="i-mdi-email" />
            </UForm>
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import { string, objectAsync, email, minLength, type Input } from 'valibot'
import type { FormError, FormSubmitEvent } from '#ui/types'

const title = ref("Kontakt")

var state: {
    name: "",
    email: ""
}

const schema = objectAsync({
    email: string([email('Falsche E-Mail-Adresse')]).required('Erforderlich'),
    name: string().required('Erforderlich'),
})

type Schema = Input<typeof schema>

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
}
</script>

