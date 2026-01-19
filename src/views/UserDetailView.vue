<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const userId = route.params.id
const user = ref(null)

onMounted(() => {
    // Get user from store instead of mock array
    user.value = userStore.getUserById(userId)
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
        ← Retour à la liste
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
              <div class="detail-row">
                <span class="label">Email</span>
                <span class="value">{{ user.email }}</span>
              </div>
               <div class="detail-row">
                <span class="label">ID</span>
                <span class="value">#{{ user.id }}</span>
              </div>
              
              <div class="bio-section">
                <h3>Biographie</h3>
                <p class="bio">{{ user.bio }}</p>
              </div>
          </div>
      </div>
    </div>
    <div v-else class="not-found">
        <p>Utilisateur non trouvé ou supprimé.</p>
        <button @click="goBack" class="btn-primary">Retour</button>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 600px;
  margin: 0 auto;
}

.btn-back {
    background: transparent;
    border: none;
    color: #94a3b8;
    margin-bottom: 1.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s;
}
.btn-back:hover { color: white; }

.profile-card {
    background: #1e293b;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.banner {
    height: 150px;
    width: 100%;
    opacity: 0.9;
}

.content {
    padding: 0 2rem 3rem;
    position: relative;
    text-align: center;
    margin-top: -60px;
}

.avatar {
    width: 120px;
    height: 120px;
    background: #0f172a;
    border-radius: 50%;
    border: 6px solid;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 800;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

h1 {
    margin: 0 0 0.5rem;
    font-size: 2.2rem;
    color: #f1f5f9;
}

.badge {
    background: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-block;
}

.details {
    margin-top: 2.5rem;
    text-align: left;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    padding: 1.5rem;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.label { color: #94a3b8; }
.value { color: #fff; font-weight: 500; }

.bio-section {
    margin-top: 1.5rem;
}

.bio-section h3 {
    font-size: 1rem;
    color: #647eff;
    margin-bottom: 0.5rem;
}

.bio {
    line-height: 1.7;
    margin: 0;
    color: #cbd5e1;
    font-size: 0.95rem;
}

/* Not Found State */
.not-found {
    text-align: center;
    padding: 4rem 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    color: #94a3b8;
}

.btn-primary {
    margin-top: 1rem;
    background: #647eff;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
}
</style>
