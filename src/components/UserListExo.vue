<script setup>
import { ref } from 'vue'
import UserCard from './UserCard.vue'

// Données fictives (mock data)
const users = ref([
  { id: 1, name: 'Jean Dujardin', email: 'jean.dujardin@film.fr', role: 'Acteur' },
  { id: 2, name: 'Marion Cotillard', email: 'marion@hollywood.com', role: 'Actrice' },
  { id: 3, name: 'Omar Sy', email: 'omar.sy@netflix.com', role: 'Humoriste' },
  { id: 4, name: 'Audrey Tautou', email: 'audrey@amelie.fr', role: 'Actrice' },
  { id: 5, name: 'Vincent Cassel', email: 'vincent@haine.com', role: 'Réalisateur' },
])

// Fonction pour gérer la suppression (captée via emit)
const removeUser = (id) => {
  users.value = users.value.filter(user => user.id !== id)
}

// Fonction pour reset la liste (pour la démo)
const resetUsers = () => {
    users.value = [
      { id: 1, name: 'Jean Dujardin', email: 'jean.dujardin@film.fr', role: 'Acteur' },
      { id: 2, name: 'Marion Cotillard', email: 'marion@hollywood.com', role: 'Actrice' },
      { id: 3, name: 'Omar Sy', email: 'omar.sy@netflix.com', role: 'Humoriste' },
      { id: 4, name: 'Audrey Tautou', email: 'audrey@amelie.fr', role: 'Actrice' },
      { id: 5, name: 'Vincent Cassel', email: 'vincent@haine.com', role: 'Réalisateur' },
    ]
}
</script>

<template>
  <div class="exo-container">
    <div class="card panel">
      <div class="header">
        <h2>👥 Exercice 2 : Liste Utilisateurs</h2>
        <div class="header-actions">
            <span class="count-badge">{{ users.length }} membres</span>
            <button v-if="users.length < 5" @click="resetUsers" class="btn-text">Tout restaurer</button>
        </div>
      </div>

      <div class="user-list">
        <!-- TransitionGroup pour l'animation de liste -->
        <TransitionGroup name="list">
            <UserCard 
            v-for="user in users" 
            :key="user.id" 
            :user="user" 
            @delete-user="removeUser" 
            />
        </TransitionGroup>
        
        <div v-if="users.length === 0" class="empty-state">
            <p>Aucun utilisateur trouvé.</p>
            <button @click="resetUsers" class="btn-primary-sm">Restaurer la liste</button>
        </div>
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

.panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 450px; /* Slightly wider than exo 1 */
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
  font-weight: 600;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.count-badge {
    background: rgba(99, 102, 241, 0.2);
    color: #a5b4fc;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
}

.btn-text {
    background: none;
    border: none;
    color: #42d392;
    font-size: 0.75rem;
    cursor: pointer;
    padding: 0;
}
.btn-text:hover { text-decoration: underline; }

.user-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 200px;
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: #64748b;
    gap: 1rem;
}

.btn-primary-sm {
    background: #42d392;
    color: #0f172a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
}

/* Animations de liste Vue */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   items can be calculated correctly. */
.list-leave-active {
  position: absolute;
  width: 100%; /* Important to match container width */
  margin-right: 2rem; /* Hack to preventing width collapse in flex-col */
}
</style>
