<script setup>
import { onErrorCaptured, ref } from 'vue'
import GameLoader from '../components/games/GameLoader.vue'
import GameListAPI from '../components/games/GameListAPI.vue'

const error = ref(null)

onErrorCaptured((e) => {
  error.value = e
  return true 
})
</script>

<template>
  <div class="page-container">
    <header class="page-header">
        <h1>BIBLIOTHÈQUE</h1>
        <div class="subtitle">EXPLORATION DES JEUX RÉCENTS</div>
    </header>

    <div v-if="error" class="error-box">
        Impossible de charger le module de jeux.
    </div>

    <Suspense v-else>
      <template #default>
        <GameListAPI />
      </template>

      <template #fallback>
        <div class="loader-wrapper">
            <GameLoader />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 2rem;
}

h1 {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
    color: var(--text-muted);
}

.subtitle {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -1px;
    margin-top: 0.5rem;
}

.loader-wrapper {
    display: flex;
    justify-content: center;
    padding: 4rem;
}

.error-box {
    padding: 2rem;
    border: 1px solid var(--border);
    color: #ef4444;
}
</style>
