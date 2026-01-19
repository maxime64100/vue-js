<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserCard from '../components/UserCard.vue'

const router = useRouter()

const users = ref([
  { id: 1, name: 'Jean Dujardin', email: 'jean.dujardin@film.fr', role: 'Acteur' },
  { id: 2, name: 'Marion Cotillard', email: 'marion@hollywood.com', role: 'Actrice' },
  { id: 3, name: 'Omar Sy', email: 'omar.sy@netflix.com', role: 'Humoriste' },
  { id: 4, name: 'Audrey Tautou', email: 'audrey@amelie.fr', role: 'Actrice' },
  { id: 5, name: 'Vincent Cassel', email: 'vincent@haine.com', role: 'Réalisateur' },
])

const goToDetail = (id) => {
  router.push(`/user/${id}`)
}

const removeUser = (id) => {
  users.value = users.value.filter(user => user.id !== id)
}
</script>

<template>
  <div class="page-container">
    <h2>Liste des Utilisateurs</h2>
    
    <div class="user-list">
      <div 
        v-for="user in users" 
        :key="user.id" 
        class="list-item"
        @click="goToDetail(user.id)"
      >
        <UserCard 
          :user="user" 
          @delete-user="(id) => { $event.stopPropagation(); removeUser(id) }" 
        />
        <div class="overlay">
            <span>Voir le profil</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;
}

.list-item:hover {
    transform: scale(1.02);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 16px;
    pointer-events: none; /* Let clicks pass through if needed, but we want the whole card clickable */
}

.list-item:hover .overlay {
    opacity: 1;
}

.overlay span {
    background: #647eff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
}
</style>
