<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import AppNavigation from './components/AppNavigation.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initialize()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <AppNavigation />
    <main class="transition-all duration-300 ease-in-out">
      <RouterView />
    </main>
  </div>
</template>
