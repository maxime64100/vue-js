import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import GameLibraryView from '../views/GameLibraryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: UserListView
    },
    {
      path: '/user/:id',
      name: 'user-detail',
      component: UserDetailView
    },
    {
      path: '/games',
      name: 'games',
      component: GameLibraryView
    }
  ]
})

export default router
