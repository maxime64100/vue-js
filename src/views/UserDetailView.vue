<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const userId = route.params.id
const user = ref(null)

// Mock database
const allUsers = [
  { id: 1, name: 'Jean Dujardin', email: 'jean.dujardin@film.fr', role: 'Acteur', bio: 'Jean Dujardin est un acteur, humoriste, scénariste, réalisateur et producteur de cinéma français. Il est le premier acteur français à remporter l\'Oscar du meilleur acteur.' },
  { id: 2, name: 'Marion Cotillard', email: 'marion@hollywood.com', role: 'Actrice', bio: 'Marion Cotillard est une actrice française. Elle a reçu de nombreuses récompenses, dont un Oscar, un César, un BAFTA et un Golden Globe.' },
  { id: 3, name: 'Omar Sy', email: 'omar.sy@netflix.com', role: 'Humoriste', bio: 'Omar Sy est un acteur et humoriste français. Il accède à la notoriété en formant, avec Fred Testot, le duo comique Omar et Fred.' },
  { id: 4, name: 'Audrey Tautou', email: 'audrey@amelie.fr', role: 'Actrice', bio: 'Audrey Tautou est une actrice française. Elle a été révélée au grand public par le film Le Fabuleux Destin d\'Amélie Poulain.' },
  { id: 5, name: 'Vincent Cassel', email: 'vincent@haine.com', role: 'Réalisateur', bio: 'Vincent Cassel est un acteur, réalisateur et producteur de cinéma français. Il est connu pour ses rôles de types instables ou violents.' },
]

onMounted(() => {
    // Simulate API call
    user.value = allUsers.find(u => u.id == userId)
})

const goBack = () => {
    router.push('/list')
}

const userColor = computed(() => {
    if (!user.value) return '#ccc'
    const colors = ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399', '#22d3ee', '#818cf8', '#c084fc', '#f472b6'];
    const index = user.value.name.length % colors.length;
    return colors[index];
})
</script>

<template>
  <div class="page-container">
    <button @click="goBack" class="btn-back">
        ← Retour
    </button>
    
    <div v-if="user" class="profile-card">
      <div class="banner" :style="{ backgroundColor: userColor }"></div>
      <div class="content">
          <div class="avatar" :style="{ borderColor: userColor }">
              {{ user.name[0] }}
          </div>
          <h1>{{ user.name }}</h1>
          <span class="badge">{{ user.role }}</span>
          
          <div class="details">
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p class="bio">{{ user.bio }}</p>
          </div>
      </div>
    </div>
    <div v-else class="not-found">
        <p>Utilisateur non trouvé.</p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 700px;
  margin: 0 auto;
}

.btn-back {
    background: transparent;
    border: none;
    color: #94a3b8;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
}
.btn-back:hover { color: white; }

.profile-card {
    background: #1e293b;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.banner {
    height: 120px;
    width: 100%;
    opacity: 0.8;
}

.content {
    padding: 2rem;
    position: relative;
    padding-top: 3rem;
    text-align: center;
}

.avatar {
    width: 100px;
    height: 100px;
    background: #0f172a;
    border-radius: 50%;
    border: 4px solid;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
}

h1 {
    margin: 0.5rem 0;
    font-size: 2rem;
    color: #f1f5f9;
}

.badge {
    background: #334155;
    color: #94a3b8;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
}

.details {
    margin-top: 2rem;
    color: #cbd5e1;
    text-align: left;
}

.bio {
    line-height: 1.6;
    margin-top: 1rem;
    color: #94a3b8;
}
</style>
