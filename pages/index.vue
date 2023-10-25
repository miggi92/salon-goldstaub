<template>
    <div>
        <div class="grid gap-4 place-content-center">
            <h1 class="text-primary text-5xl">{{ title }}</h1>
            <AppLogo />
        </div>

        <NuxtImg src="/pictures/goldstaub_image.jpg" alt="Goldstaub" class="m-5" />
        <h2 class="text-primary text-3xl">Goldstaub</h2>
        <div class="grid grid-cols-2 gap-10 m-5">
            <p class="text-start hyphens-auto break-normal">
                Bereits im alten Ägypten und in der Antike verwendeten die wohlhabenden Frauen viel Zeit und Geld, um dem
                jeweiligen Schönheitsideal zu entsprechen und einfach gut auszusehen.

                Schon damals galt Gold, das edelste aller Metalle, als kostbare Kosmetikzutat. Gesicht und Dekolleté,
                bestäubt mit feinstem Goldstaub, verliehen dem Teint einen zauberhaften Schimmer, der die Haut jünger und
                glatter aussehen ließ.
            </p>
            <p class="text-start break-normal hyphens-auto">
                Dezent im Haar verteilt, schuf Goldstaub glanzvolle Reflektionen, die seiner Verwenderin die Aura einer
                Göttin verliehen. Ein glanzvoller Auftritt und bewundernde Blicke waren garantiert.

                Genau wie heute, nach einem Besuch im Salon Goldstaub. Herzlich willkommen. Mit unseren Produkten und
                unserer Erfahrung schaffen wir glänzende Ergebnisse – wenn Sie möchten auch mit der Anmutung von Goldstaub.
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
const title = ref('Salon Goldstaub')
</script>
