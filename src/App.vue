<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header class="main-header">
      <nav class="nav-bar">
        <RouterLink to="/" class="nav-link" active-class="active">
          🏠 Home
        </RouterLink>
        <RouterLink to="/list" class="nav-link" active-class="active">
          👥 Utilisateurs
        </RouterLink>
      </nav>
    </header>

    <main class="content-area">
      <!-- Router View with Transition -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.main-header {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.nav-bar {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  text-decoration: none;
  color: #94a3b8;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link.active {
  background: #647eff;
  color: white;
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
