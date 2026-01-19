<script setup>
import { ref } from 'vue'
import GameCardAPI from './GameCardAPI.vue'

// Clé par défaut (peut être expirée)
const DEFAULT_KEY = '5032cff4417948c7b29bb121fe3a5291'
const apiKey = ref(localStorage.getItem('rawg_api_key') || DEFAULT_KEY)

const games = ref([])
const error = ref(null)
const isAuthError = ref(false)

const loadGames = async () => {
    error.value = null
    isAuthError.value = false
    
    try {
        // Petit délai pour l'animation
        await new Promise(resolve => setTimeout(resolve, 800))

        const response = await fetch(`/rawg/games?key=${apiKey.value}&dates=2024-01-01,2025-12-31&ordering=-rating&page_size=12`)
        
        if (response.status === 401) {
            isAuthError.value = true
            throw new Error("Clé API invalide ou manquante.")
        }

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status}`)
        }

        const data = await response.json()
        games.value = data.results
        
        // Save working key
        if (apiKey.value !== DEFAULT_KEY) {
            localStorage.setItem('rawg_api_key', apiKey.value)
        }

    } catch (e) {
        error.value = e.message
        if (!isAuthError.value) console.error(e)
    }
}

const updateKeyAndRetry = async () => {
    if (apiKey.value) {
        await loadGames()
    }
}

// Initial load
await loadGames()

</script>

<template>
  <div class="wrapper">
    <!-- State: Error (Auth or other) -->
    <div v-if="error" class="error-state">
       <span class="error-icon" v-if="isAuthError">🔐</span>
       <span class="error-icon" v-else>⚠️</span>
       
       <p>{{ error }}</p>

       <div v-if="isAuthError" class="auth-box">
            <p class="hint">La clé de démonstration ne fonctionne plus. Entrez votre clé gratuite (disponible sur <a href="https://rawg.io/apidocs" target="_blank">rawg.io</a>).</p>
            <div class="input-group">
                <input v-model="apiKey" type="text" placeholder="Collez votre clé API ici..." />
                <button @click="updateKeyAndRetry">Réessayer</button>
            </div>
       </div>
    </div>

    <!-- State: Success -->
    <div v-else class="games-grid">
      <GameCardAPI 
        v-for="game in games" 
        :key="game.id" 
        :game="game" 
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  animation: fadeIn 0.5s ease;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.error-state {
  border: 1px solid var(--border);
  padding: 3rem;
  text-align: center;
  border-radius: var(--radius-md);
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto;
  background: var(--bg-secondary);
}

.error-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
}

.auth-box {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

.hint {
    font-size: 0.85rem;
    margin-bottom: 1rem;
}

.hint a { color: var(--text-primary); text-decoration: underline; }

.input-group {
    display: flex;
    gap: 0.5rem;
}

input {
    flex: 1;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    padding: 0.8rem;
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    outline: none;
}

input:focus {
    border-color: #fff;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
