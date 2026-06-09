<template>
  <aside
    :class="[
      'fixed left-0 top-0 h-full bg-gradient-to-b from-[#006633] to-[#004d26] text-white shadow-xl flex flex-col transition-all duration-300 z-[1000]',
      isCollapsed ? 'w-20' : 'w-72'
    ]"
  >
    <!-- Bouton toggle -->
    <button
      @click="toggleSidebar"
      class="absolute -right-3 top-20 bg-[#fcd116] text-[#006633] rounded-full p-1 cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 z-10"
    >
      <i :class="isCollapsed ? 'bx bx-menu' : 'bx bx-menu-alt-left'" class="text-xl"></i>
    </button>

    <!-- Logo -->
    <div class="py-6 px-5 border-b border-white/10 mb-5">
      <router-link to="/" class="flex flex-col items-center gap-2 no-underline">
        <img
          :src="logo1"
          alt="Logo"
          :class="[
            'object-contain  transition-all duration-300',
            isCollapsed ? 'w-12' : 'w-20'
          ]"
        >
        <span
          v-show="!isCollapsed"
          class="text-[#fcd116] font-bold text-lg tracking-wide"
        >
          Admin
        </span>
      </router-link>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 flex flex-col gap-1 px-3 overflow-y-auto">
      <router-link
        to="/dashboard"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-white no-underline transition-all duration-300 text-sm font-medium hover:bg-yellow-500/20 hover:text-[#fcd116] hover:translate-x-1"
        active-class="!bg-[#fcd116] !text-[#006633]"
      >
        <i class='bx bxs-dashboard text-xl flex-shrink-0'></i>
        <span v-if="!isCollapsed">Tableau de bord</span>
      </router-link>

      <router-link
        to="/dashboard/articles"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-white no-underline transition-all duration-300 text-sm font-medium hover:bg-yellow-500/20 hover:text-[#fcd116] hover:translate-x-1"
        active-class="!bg-[#fcd116] !text-[#006633]"
      >
        <i class='bx bxs-news text-xl flex-shrink-0'></i>
        <span v-if="!isCollapsed">Articles</span>
      </router-link>

      <router-link
        to="/dashboard/actualites"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-white no-underline transition-all duration-300 text-sm font-medium hover:bg-yellow-500/20 hover:text-[#fcd116] hover:translate-x-1"
        active-class="!bg-[#fcd116] !text-[#006633]"
      >
        <i class='bx bxs-megaphone text-xl flex-shrink-0'></i>
        <span v-if="!isCollapsed">Actualités</span>
      </router-link>

      <router-link
        to="/dashboard/galerie"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-white no-underline transition-all duration-300 text-sm font-medium hover:bg-yellow-500/20 hover:text-[#fcd116] hover:translate-x-1"
        active-class="!bg-[#fcd116] !text-[#006633]"
      >
        <i class='bx bxs-image text-xl flex-shrink-0'></i>
        <span v-if="!isCollapsed">Galerie photos</span>
      </router-link>

      <router-link
        to="/dashboard/nouvelles"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-white no-underline transition-all duration-300 text-sm font-medium hover:bg-yellow-500/20 hover:text-[#fcd116] hover:translate-x-1"
        active-class="!bg-[#fcd116] !text-[#006633]"
      >
        <i class='bx bxs-bell text-xl flex-shrink-0'></i>
        <span v-if="!isCollapsed">Nouvelles</span>
      </router-link>




    </nav>

    <!-- Déconnexion -->
    <div class="p-5 border-t border-white/10 mt-auto">
      <button
        @click="deconnexion"
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600/20 text-red-300 border border-red-600/50 cursor-pointer transition-all duration-300 text-sm font-medium hover:bg-red-600 hover:text-white hover:border-red-600"
      >
        <i class='bx bx-log-out-circle text-xl'></i>
        <span v-if="!isCollapsed">Déconnexion</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo1 from '@/assets/images/logo.png'

const router = useRouter()
const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
  // Émettre l'état pour que le layout puisse l'écouter
  emit('toggle', isCollapsed.value)
}

const emit = defineEmits(['toggle'])

const deconnexion = () => {
  console.log('Déconnexion...')
  localStorage.removeItem('token')
  router.push('/connexion')
}
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #004d26;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #fcd116;
  border-radius: 4px;
}
</style>
