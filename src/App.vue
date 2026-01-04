<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <DiceGenerator />
</template>

<script setup lang="ts">
import router from './router';
import DiceGenerator from '../src/components/DiceGenerator.vue'

//router.push('/stuff')
</script>

<style scoped></style>
