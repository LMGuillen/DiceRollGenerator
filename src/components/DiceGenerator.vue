<template>
    <p>This should be a dropdown</p>
    <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="label"
        placeholder="Select a City"
        class="w-full md:w-14rem"
    />

    <div v-if="selectedCity" class="mt-2">Selected: {{ selectedCity.label || selectedCity }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCity = ref(null)

const cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
]
</script>

<style scoped></style>