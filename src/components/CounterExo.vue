<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = 0
</script>

<template>
  <div class="exo-container">
    <div class="card">
      <div class="header">
        <h2>🔢 Exercice 1 : Compteur</h2>
        <p class="subtitle">Bases & Réactivité</p>
      </div>

      <div class="display-area">
        <div class="stat-box">
          <span class="label">Compteur</span>
          <span class="value main-value">{{ count }}</span>
        </div>
        
        <div class="divider"></div>
        
        <div class="stat-box">
          <span class="label">Doublé</span>
          <span class="value secondary-value">{{ doubleCount }}</span>
        </div>
      </div>

      <div class="controls">
        <button @click="decrement" class="btn btn-secondary">
          <span class="icon">−</span>
        </button>
        
        <button @click="reset" class="btn btn-danger">
          Reset
        </button>

        <button @click="increment" class="btn btn-primary">
          <span class="icon">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exo-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 350px; /* Slightly smaller to fit with others */
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}

.header {
  margin-bottom: 1.5rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, #42d392, #647eff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  color: #94a3b8;
  font-size: 0.85rem;
  margin: 0;
}

.display-area {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #647eff;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.value {
  font-family: 'Courier New', monospace;
  font-weight: 700;
}

.main-value { font-size: 2rem; color: #42d392; }
.secondary-value { font-size: 1.5rem; color: #a5b4fc; }

.divider { width: 1px; height: 40px; background: rgba(255, 255, 255, 0.1); }

.controls {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
}

.btn {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary { background: #42d392; color: #0f172a; }
.btn-primary:hover { background: #34d399; transform: translateY(-2px); }

.btn-secondary { background: #647eff; color: white; }
.btn-secondary:hover { background: #818cf8; transform: translateY(-2px); }

.btn-danger { background: transparent; border: 1px solid rgba(248, 113, 113, 0.3); color: #f87171; }
.btn-danger:hover { background: rgba(248, 113, 113, 0.1); border-color: #f87171; }
</style>
