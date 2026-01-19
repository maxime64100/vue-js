<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import UserCard from '../components/UserCard.vue'

const router = useRouter()
const userStore = useUserStore()

// State local pour le formulaire d'ajout
const showAddForm = ref(false)
const newUser = ref({
  name: '',
  email: '',
  role: 'Membre',
  bio: ''
})

const goToDetail = (id) => {
  router.push(`/user/${id}`)
}

const handleAddUser = () => {
  if (newUser.value.name && newUser.value.email) {
    userStore.addUser({ ...newUser.value })
    // Reset form
    newUser.value = { name: '', email: '', role: 'Membre', bio: '' }
    showAddForm.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <div class="header-section">
        <h2>Annuaire ({{ userStore.userCount }})</h2>
        <button @click="showAddForm = !showAddForm" class="btn-primary">
            {{ showAddForm ? 'Annuler' : 'Ajouter un membre' }}
        </button>
    </div>

    <!-- Formulaire d'ajout simple -->
    <div v-if="showAddForm" class="add-user-form">
        <input v-model="newUser.name" placeholder="Nom complet" class="input-field" />
        <input v-model="newUser.email" placeholder="Email" class="input-field" />
        <select v-model="newUser.role" class="input-field">
            <option>Membre</option>
            <option>Admin</option>
            <option>Visiteur</option>
        </select>
        <button @click="handleAddUser" class="btn-submit">Valider</button>
    </div>
    
    <div class="user-list">
      <TransitionGroup name="list">
        <div 
            v-for="user in userStore.users" 
            :key="user.id" 
            class="list-item"
            @click="goToDetail(user.id)"
        >
            <UserCard 
            :user="user" 
            @delete-user="(id) => { $event.stopPropagation(); userStore.removeUser(id) }" 
            />
        </div>
      </TransitionGroup>

      <div v-if="userStore.users.length === 0" class="empty-state">
        <p>Aucun membres.</p>
        <button @click="userStore.resetUsers" class="btn-text">Réinitialiser les données</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 600px;
  margin: 0 auto;
}

.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

h2 {
    margin: 0;
    color: #fff;
    font-size: 1.5rem;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
    cursor: pointer;
    transition: transform 0.2s;
}
.list-item:hover {
    transform: scale(1.02);
}

.btn-primary {
    background: #42d392;
    color: #0f172a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}
.btn-primary:hover { background: #34d399; }

.add-user-form {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.input-field {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.2);
    color: white;
    flex: 1;
    min-width: 200px;
}

.btn-submit {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    border: none;
    background: #647eff;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

.empty-state {
    text-align: center;
    padding: 2rem;
    color: #94a3b8;
}

.btn-text {
    background: none;
    border: none;
    color: #42d392;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: underline;
}

/* Animations */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
