<template>
    <UFooter :links="links">
        <template #left>
            Copyright © 2023 - {{ new Date().getFullYear() }} <ULink to="" class="text-primary">MGM12</ULink>
        </template>

        <template #top>
            <UFooterColumns>
                <template #right>
                    <UContainer>
                        <UContainer>
                            <UIcon name="i-mdi-home" />
                            Maybachstraße 22, 74211 Leingarten
                        </UContainer>
                        <UContainer>
                            <UIcon name="i-mdi-phone" />
                            <ULink to="tel:+4971317907480" class="text-primary"> 07131 7907480</ULink>
                        </UContainer>
                        <UContainer>
                            <UIcon name="i-mdi-email" />
                            <ULink to="mailto:salon@goldstaub-heilbronn.de" class="text-primary">
                                SALON(AT)GOLDSTAUB-HEILBRONN.DE</ULink>
                        </UContainer>
                        <UContainer>
                            <UIcon name="i-mdi-clock" /> Montag: Ruhetag, Dienstag bis Samstag nach Vereinbarung
                        </UContainer>
                    </UContainer>
                </template>
            </UFooterColumns>
        </template>
    </UFooter>
</template>

<script setup>
const links = [{
    label: 'Datenschutz',
    to: '/privacy'
}, {
    label: 'Kontakt',
    to: '/contact'
}, {
    label: 'Anfahrt',
    to: '/arrival'
}, {
    label: 'Impressum',
    to: '/imprint'
}]
</script>
