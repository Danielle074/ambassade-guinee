<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <!-- 🟦 Formulaire à gauche (fond blanc) -->
    <div class="flex w-full md:w-1/2 items-center justify-center bg-white order-2 md:order-1">
      <div class="p-8 w-full max-w-md">
        <!-- Bouton Retour à l'accueil -->
        <div class="mb-6">
          <button
            @click="goToHome"
            class="inline-flex items-center gap-2 text-[#fcd116] hover:text-[#006633] transition-colors"
          >
            <i class='bx bx-arrow-back text-lg'></i>
            <span class="text-sm font-medium">Retour à l'accueil</span>
          </button>
        </div>

        <!-- Logo -->
        <div class="flex flex-col items-center mb-6">
          <img :src="formLogo" alt="Logo Secure Check" class="w-52 h-auto mb-2" />
          <h2 class="text-2xl font-bold text-[#fcd116]">Bienvenue</h2>
        </div>

        <!-- Formulaire -->
        <form class="space-y-5" @submit.prevent="handleSubmit">
          <div>
            <input
              type="email"
              placeholder="securecheck@scb.org"
              v-model="email"
              class="w-full px-4 py-2 border border-[#fcd116] rounded-lg focus:ring-2 focus:ring-[#fcd116] focus:outline-none"
              required
            />
          </div>

          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="* * * * * * * *"
              v-model="password"
              class="w-full px-4 py-2 border border-[#fcd116]/50 rounded-lg focus:ring-2 focus:ring-[#fcd116] focus:outline-none pr-10"
              required
            />
            <!-- Bouton œil pour voir/masquer le mot de passe -->
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-[#fcd116]"
            >
              <i :class="showPassword ? 'bx bx-hide' : 'bx bx-show'" class="text-lg"></i>
            </button>
          </div>

          <div class="flex items-center justify-between text-sm text-gray-600">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="rememberMe" class="rounded text-[#fcd116] focus:ring-[#fcd116]" />
              <span>Rester connecté</span>
            </label>
            <a href="#" class="text-[#fcd116] hover:underline">Mot de passe oublié ?</a>
          </div>

          <button
            type="submit"
            class="w-full bg-[#fcd116] hover:bg-[#fcd116]/60 text-white py-2 rounded-full font-semibold transition duration-200"
          >
            Se connecter
          </button>
        </form>

        <!-- Créer un compte -->
        <p class="text-center text-gray-600 text-sm mt-4">
          Pas encore de compte ?
          <router-link to="/creer-compte" class="text-[#fcd116] font-semibold hover:underline">
            Créer un compte
          </router-link>
        </p>

        <p class="text-center text-gray-500 text-sm mt-8 leading-tight">
          L'application de gestion et suivie de vos colis avec Maposte<br />
          de <span class="font-semibold text-[#fcd116]">Maposte</span>
        </p>
      </div>
    </div>

    <!-- 🖼️ Image à droite -->
    <div class="hidden md:flex md:w-1/2 relative overflow-hidden order-1 md:order-2 bg-[#fcd116]/20">
      <img
        :src="loginImage"
        alt="Maposte"
        class="w-full h-full object-cover opacity-90"
      />

      <!-- Overlay bleu foncé léger -->
      <div class="absolute inset-0 bg-black/20 z-10"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import formLogo from "@/assets/images/logo.png"
import loginImage from "@/assets/images/hero3.jpg"

const router = useRouter()

// Données du formulaire
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

// Fonction pour basculer la visibilité du mot de passe
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// Fonction pour naviguer vers l'accueil
const goToHome = () => {
  router.push('/')
}

// Fonction de soumission du formulaire
const handleSubmit = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('Remember me:', rememberMe.value)
  router.push('/dashboard')
}
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
}

/* Style pour le champ mot de passe avec l'œil */
.relative input[type="password"],
.relative input[type="text"] {
  padding-right: 2.5rem;
}
</style>
