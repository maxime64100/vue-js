<script setup>
import CounterExo from '../components/CounterExo.vue'
</script>

<template>
  <div class="page-container">
    <div class="welcome-section">
      <h1>Bienvenue sur Vue 3 Mastery</h1>
      <p>Explorez les concepts de Vue.js à travers ces exercices.</p>
    </div>
    
    <CounterExo />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.welcome-section {
  text-align: center;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #42d392, #647eff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

p {
  color: #94a3b8;
}
</style>
