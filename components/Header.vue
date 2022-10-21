<script setup lang="ts">
const items = [
    { url: "/home", label: "Goldstaub"},
    { url: "/philosophy", label: "Philosophie"},
    {url: "/about", label: "Meisterfriseurin"},
    {url: "/prices", label: "Preise"},
    {url:"/products", label:"Produkte"},
    {url: "https://www.studiobookr.com/salon-goldstaub-64474", label: "Termin buchen"}
];
</script>

<template>
    <header w-full flex items-center p-5 pb-10>
        <div>
            <nav flex gap-8 mx-auto>
                <div v-for="item in items" :key="item.url" :to="item.url">
                    <NuxtLink :to="item.url">
                        <div color-salongoldstaub-primary uppercase>
                            {{item.label}}
                        </div>
                    </NuxtLink>
                </div>                       
            </nav>
        </div>
    </header>
</template>