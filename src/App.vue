<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <nav class="sidebar">
      <div class="logo">
        <span class="logo-box">V</span>
        <span class="logo-text">VUE MASTERY</span>
      </div>

      <div class="nav-links">
        <RouterLink to="/" class="nav-item">
          <span class="icon">01</span>
          <span class="label">Compteur</span>
        </RouterLink>
        <RouterLink to="/list" class="nav-item">
          <span class="icon">02</span>
          <span class="label">Utilisateurs</span>
        </RouterLink>
        <RouterLink to="/games" class="nav-item">
          <span class="icon">03</span>
          <span class="label">Bibliothèque</span>
        </RouterLink>
      </div>

      <div class="footer-info">
        <p>Ynov • Vue 3</p>
      </div>
    </nav>

    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: var(--bg-primary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: sticky;
  top: 0;
  height: 100vh;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
}

.logo-box {
  width: 32px;
  height: 32px;
  background: var(--text-primary);
  color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  border-radius: 4px;
}

.logo-text {
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  font-size: 0.9rem;
}

.nav-item:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.nav-item.router-link-active {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.icon {
  font-family: monospace;
  opacity: 0.5;
  font-size: 0.8rem;
}

.footer-info {
  margin-top: auto;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.main-content {
  flex: 1;
  padding: 4rem;
  background: var(--bg-primary); /* Keeping it flat */
  overflow-y: auto;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
