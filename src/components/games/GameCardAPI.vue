<script setup>
defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="game-card">
    <div class="card-image">
      <img :src="game.background_image" :alt="game.name" loading="lazy" />
      <div v-if="game.metacritic" class="score">{{ game.metacritic }}</div>
    </div>
    
    <div class="card-content">
      <div class="header">
        <h3>{{ game.name }}</h3>
        <span class="year">{{ new Date(game.released).getFullYear() }}</span>
      </div>
      
      <div class="tags">
         <span v-for="genre in game.genres.slice(0, 3)" :key="genre.id" class="tag">
            {{ genre.name }}
         </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  cursor: pointer;
  group: hover;
}

.card-image {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: 1rem;
  background: var(--bg-secondary);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: grayscale(20%);
}

.game-card:hover img {
  transform: scale(1.03);
  filter: grayscale(0%);
}

.score {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.year {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: monospace;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 0.7rem;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
