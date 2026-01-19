<script setup>
import { ref } from 'vue'
import CounterExo from './components/CounterExo.vue'
import UserListExo from './components/UserListExo.vue'

// Simple state to toggle exercises if we want, or display both.
// Displaying both side-by-side or stacked implies a nice layout.
// Let's create a simple tab system for a cleaner view.
const activeTab = ref(2) 

</script>

<template>
  <div class="app-container">
    <header class="main-header">
      <h1>✨ Vue 3 Mastery</h1>
      <nav class="nav-tabs">
        <button 
          :class="['nav-btn', { active: activeTab === 1 }]" 
          @click="activeTab = 1"
        >
          Exo 1: Compteur
        </button>
        <button 
          :class="['nav-btn', { active: activeTab === 2 }]" 
          @click="activeTab = 2"
        >
          Exo 2: Composants
        </button>
      </nav>
    </header>

    <main class="content-area">
      <Transition name="fade" mode="out-in">
        <CounterExo v-if="activeTab === 1" />
        <UserListExo v-else-if="activeTab === 2" />
      </Transition>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
}

.main-header {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #fff 30%, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
}

.nav-tabs {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem;
  border-radius: 12px;
  gap: 0.3rem;
}

.nav-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-btn:hover {
  color: #fff;
}

.nav-btn.active {
  background: #647eff;
  color: #fff;
  box-shadow: 0 4px 12px rgba(100, 126, 255, 0.3);
}

.content-area {
  position: relative;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
