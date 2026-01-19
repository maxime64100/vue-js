<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete-user'])

const initials = computed(() => {
  return props.user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const userColor = computed(() => {
    // Generate a consistent color based on the name length or char codes
    const colors = ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399', '#22d3ee', '#818cf8', '#c084fc', '#f472b6'];
    const index = props.user.name.length % colors.length;
    return colors[index];
})
</script>

<template>
  <div class="user-card">
    <div class="user-avatar" :style="{ backgroundColor: userColor }">
      {{ initials }}
    </div>
    
    <div class="user-info">
      <h3>{{ user.name }}</h3>
      <p class="role">{{ user.role }}</p>
      <div class="contact-info">
          <span class="email">{{ user.email }}</span>
      </div>
    </div>

    <button class="btn-delete" @click="emit('delete-user', user.id)" title="Supprimer">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.user-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(4px);
  border-color: rgba(255, 255, 255, 0.1);
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #1a1a1a;
  margin-right: 1rem;
  font-size: 1.1rem;
}

.user-info {
  flex: 1;
}

h3 {
  margin: 0;
  font-size: 1rem;
  color: #f1f5f9;
}

.role {
  margin: 2px 0 4px 0;
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.email {
  font-size: 0.8rem;
  color: #647eff;
}

.btn-delete {
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-delete:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

</style>
