import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const users = ref([
    { 
        id: 1, 
        name: 'Jean Dujardin', 
        email: 'jean.dujardin@film.fr', 
        role: 'Acteur', 
        bio: 'Jean Dujardin est un acteur, humoriste, scénariste, réalisateur et producteur de cinéma français.' 
    },
    { 
        id: 2, 
        name: 'Marion Cotillard', 
        email: 'marion@hollywood.com', 
        role: 'Actrice', 
        bio: 'Marion Cotillard est une actrice française. Elle a reçu de nombreuses récompenses, dont un Oscar.' 
    },
    { 
        id: 3, 
        name: 'Omar Sy', 
        email: 'omar.sy@netflix.com', 
        role: 'Humoriste', 
        bio: 'Omar Sy est un acteur et humoriste français. Il accède à la notoriété avec le duo Omar et Fred.' 
    },
    { 
        id: 4, 
        name: 'Audrey Tautou', 
        email: 'audrey@amelie.fr', 
        role: 'Actrice', 
        bio: 'Audrey Tautou est une actrice française, révélée par Le Fabuleux Destin d\'Amélie Poulain.' 
    },
    { 
        id: 5, 
        name: 'Vincent Cassel', 
        email: 'vincent@haine.com', 
        role: 'Réalisateur', 
        bio: 'Vincent Cassel est un acteur, réalisateur et producteur de cinéma français.' 
    },
  ])

  // Getters
  const userCount = computed(() => users.value.length)
  
  const getUserById = (id) => {
    return users.value.find(user => user.id === Number(id))
  }

  // Actions
  const addUser = (userData) => {
    const newId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1
    users.value.push({
      id: newId,
      ...userData,
      // Default bio if not provided
      bio: userData.bio || 'Aucune biographie disponible.'
    })
  }

  const removeUser = (id) => {
    users.value = users.value.filter(user => user.id !== id)
  }

  const resetUsers = () => {
    users.value = [
        { id: 1, name: 'Jean Dujardin', email: 'jean.dujardin@film.fr', role: 'Acteur', bio: 'Reset Bio...' },
        { id: 2, name: 'Marion Cotillard', email: 'marion@hollywood.com', role: 'Actrice', bio: 'Reset Bio...' },
        { id: 3, name: 'Omar Sy', email: 'omar.sy@netflix.com', role: 'Humoriste', bio: 'Reset Bio...' }
    ]
  }

  return {
    users,
    userCount,
    getUserById,
    addUser,
    removeUser,
    resetUsers
  }
})
