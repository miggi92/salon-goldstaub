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
                    <UInput v-model="state.email" type="email" />
                </UFormGroup>

                <UButton type="submit" label="Abschicken" icon="i-mdi-email" />
            </UForm>
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import { email, required } from '@vuelidate/validators'
import type { FormError, FormSubmitEvent } from '#ui/types'

const title = ref("Kontakt")

var state: reactive({
    name: "",
    email: ""
})

const schema = computed(() => {
    return {
        email: { required, email },
        name: { required },
    }
})

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
}
</script>

