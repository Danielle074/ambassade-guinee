<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero section avec photo de l'ambassadeur -->
    <div class="relative bg-gradient-to-r from-[#ce1126] to-[#009460] text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Photo de l'ambassadeur -->
          <div class="relative">
            <div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-200">
              <img
                :src="ambassadeurPhoto"
                alt="Ambassadeur Sidibé Fatoumata KABA"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-2 -right-2 bg-[#fcd116] text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg">
              S.E. Ambassadeur
            </div>
          </div>

          <!-- Titre et fonction -->
          <div class="text-center md:text-left">
            <div class="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm mb-4">
              🇬🇳 Ambassade de Guinée aux États-Unis
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-3">
              Sidibé née Fatoumata KABA
            </h1>
            <p class="text-2xl md:text-3xl mb-4 text-[#fcd116] font-semibold">
              Ambassadeur Extraordinaire et Plénipotentiaire
            </p>
            <p class="text-xl opacity-90">
              près les États-Unis d'Amérique
            </p>
            <div class="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <span class="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Diplomate de carrière
              </span>
              <span class="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Depuis le 15 Décembre 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave decoration -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto">
          <path fill="#f3f4f6" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Badge historique -->
      <div class="bg-gradient-to-r from-[#fcd116] to-[#ce1126] text-white rounded-2xl p-6 mb-12 shadow-xl">
        <div class="flex items-center gap-4">
          <div class="bg-white/20 p-3 rounded-full">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <p class="text-lg md:text-xl font-semibold">
            🏛️ Première femme à occuper ce poste depuis l'établissement des relations diplomatiques entre les États-Unis et la Guinée en 1959
          </p>
        </div>
      </div>

      <!-- Grille principale -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Colonne principale (bio détaillée) -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Section biographie -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-[#ce1126] w-1 h-8 mr-3"></span>
              Biographie
            </h2>

            <div class="prose prose-lg max-w-none">
              <div class="flex items-center gap-3 bg-gray-50 p-4 rounded-xl mb-6">
                <span class="text-2xl">🎂</span>
                <span class="text-gray-700"><strong>Née le 16 mai 1956</strong> à Kankan, capitale régionale de la Haute Guinée</span>
              </div>

              <h3 class="text-xl font-bold text-[#ce1126] mb-3">Formation</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#fcd116]">
                  <p class="font-semibold">📚 Maîtrise</p>
                  <p class="text-gray-600">Économie et Philosophie - Université de Conakry</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-[#009460]">
                  <p class="font-semibold">🌍 Diplôme d'Études Supérieures</p>
                  <p class="text-gray-600">Relations Internationales - Institut des Relations Internationales du Cameroun</p>
                </div>
              </div>

              <h3 class="text-xl font-bold text-[#ce1126] mb-3">Carrière politique</h3>
              <p class="text-gray-700 mb-4">
                Madame Sidibé Fatoumata KABA est une ancienne <span class="font-bold text-[#ce1126]">Ministre des Affaires Étrangères et des Guinéens de l'Étranger (2005-2006)</span>,
                puis de la <span class="font-bold text-[#009460]">Coopération Internationale (2006-2007)</span> sous le régime du Président feu Lansana CONTÉ.
              </p>

              <h3 class="text-xl font-bold text-[#ce1126] mb-3">Parcours diplomatique</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="text-[#ce1126] font-bold">1982</span>
                  <span>Entrée dans la carrière diplomatique</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-[#fcd116] font-bold">1995</span>
                  <span>Cheffe de Division au Ministère des Affaires Étrangères</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-[#009460] font-bold">1997</span>
                  <span>Directrice Nationale Adjointe des Affaires Politiques et Culturelles</span>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-[#ce1126] font-bold">2000</span>
                  <span>Directrice Nationale des Affaires Politiques et Culturelles</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Expériences internationales -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="bg-[#fcd116] w-1 h-8 mr-3"></span>
              Postes d'Ambassadeur
            </h2>

            <div class="space-y-6">
              <div class="relative pl-8 border-l-4 border-[#ce1126]">
                <div class="absolute -left-3 top-0 w-6 h-6 bg-[#ce1126] rounded-full flex items-center justify-center text-white text-sm">1</div>
                <h3 class="font-bold text-xl">2000 - 2002</h3>
                <p class="text-lg font-semibold">Ambassadeur Extraordinaire et Plénipotentiaire</p>
                <p class="text-gray-600">République Fédérale du Nigéria, CÉDÉAO, Bénin et Togo</p>
              </div>

              <div class="relative pl-8 border-l-4 border-[#fcd116]">
                <div class="absolute -left-3 top-0 w-6 h-6 bg-[#fcd116] rounded-full flex items-center justify-center text-gray-800 text-sm">2</div>
                <h3 class="font-bold text-xl">2013 - 2018</h3>
                <p class="text-lg font-semibold">Ambassadeur de la République de Guinée</p>
                <p class="text-gray-600">République Fédérale d'Éthiopie</p>
              </div>

              <div class="relative pl-8 border-l-4 border-[#009460]">
                <div class="absolute -left-3 top-0 w-6 h-6 bg-[#009460] rounded-full flex items-center justify-center text-white text-sm">3</div>
                <h3 class="font-bold text-xl">2018 - 2020</h3>
                <p class="text-lg font-semibold">Représentante Permanente</p>
                <p class="text-gray-600">Nations Unies - New York</p>
              </div>

              <div class="relative pl-8 border-l-4 border-[#ce1126] bg-gray-50 p-4 rounded-lg">
                <div class="absolute -left-3 top-4 w-6 h-6 bg-[#ce1126] rounded-full flex items-center justify-center text-white text-sm">4</div>
                <h3 class="font-bold text-xl">15 Décembre 2023 - Présent</h3>
                <p class="text-lg font-semibold">Ambassadeur Extraordinaire et Plénipotentiaire</p>
                <p class="text-gray-600">près les États-Unis d'Amérique</p>
                <p class="text-sm text-[#ce1126] mt-2 font-semibold">🏆 Nommée par S.E. Colonel Mamadi DOUMBOUYA, Président de la Transition</p>
              </div>
            </div>
          </div>

          <!-- Distinctions -->
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg p-8">
            <h2 class="text-3xl font-bold mb-6 flex items-center">
              <span class="bg-[#fcd116] w-1 h-8 mr-3"></span>
              Distinctions et Décorations
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-center gap-4">
                <div class="bg-[#fcd116] p-3 rounded-full">
                  <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold">Commission de l'Union Africaine</p>
                  <p class="text-sm text-gray-300">"Apport de qualité à l'Institution"</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-[#009460] p-3 rounded-full">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold">CÉDÉAO</p>
                  <p class="text-sm text-gray-300">"Contribution aux efforts de Paix et de Sécurité"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar (infos personnelles et compétences) -->
        <div class="space-y-6">
          <!-- Carte d'identité -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#ce1126]">
              Informations personnelles
            </h3>

            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-500">Nom complet</p>
                <p class="font-semibold">Sidibé née Fatoumata KABA</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">Date de naissance</p>
                <p class="font-semibold">16 mai 1956</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">Lieu de naissance</p>
                <p class="font-semibold">Kankan, Haute Guinée</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">Situation familiale</p>
                <p class="font-semibold">Mariée, mère de 3 enfants</p>
              </div>

              <div>
                <p class="text-sm text-gray-500">Langues parlées</p>
                <div class="flex gap-2 mt-1">
                  <span class="bg-[#ce1126]/10 text-[#ce1126] px-3 py-1 rounded-full text-sm font-medium">Français</span>
                  <span class="bg-[#009460]/10 text-[#009460] px-3 py-1 rounded-full text-sm font-medium">Anglais</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Expertise -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#fcd116]">
              Domaines d'expertise
            </h3>

            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#ce1126] rounded-full"></span>
                <span>Diplomatie Multilatérale</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#fcd116] rounded-full"></span>
                <span>Négociation Internationale</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#009460] rounded-full"></span>
                <span>Prévention des conflits</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#ce1126] rounded-full"></span>
                <span>Gestion et Règlement des conflits</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-[#fcd116] rounded-full"></span>
                <span>Relations Internationales</span>
              </div>
            </div>
          </div>

          <!-- Organisations internationales -->
          <div class="bg-gradient-to-br from-[#ce1126] to-[#8b0b1a] text-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl font-bold mb-4">Représentations</h3>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-lg">🇺🇳</span>
                </div>
                <div>
                  <p class="font-semibold">Nations Unies</p>
                  <p class="text-sm opacity-90">Ancienne Représentante Permanente</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-lg">🌍</span>
                </div>
                <div>
                  <p class="font-semibold">Union Africaine</p>
                  <p class="text-sm opacity-90">Décorée par l'institution</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-lg">🤝</span>
                </div>
                <div>
                  <p class="font-semibold">CÉDÉAO</p>
                  <p class="text-sm opacity-90">Contribution à la paix</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Lien vers liste des ambassadeurs -->
          <router-link
            to="/ambassade/anciens-ambassadeurs"
            class="block bg-gray-100 hover:bg-gray-200 rounded-2xl p-6 text-center transition-colors group"
          >
            <svg class="w-12 h-12 mx-auto text-[#ce1126] mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <h4 class="font-bold text-gray-800 text-lg mb-1">Liste des Ambassadeurs</h4>
            <p class="text-sm text-gray-600">aux États-Unis d'Amérique</p>
            <span class="text-[#ce1126] font-semibold mt-2 inline-block group-hover:translate-x-2 transition-transform">
              Voir la liste →
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ambassadeurPhoto from '@/assets/images/ambassadeur.jpeg' // Import de la photo

// Vous pouvez aussi définir d'autres données si nécessaire
const ambassadeur = ref({
  nom: 'Sidibé née Fatoumata KABA',
  titre: 'Ambassadeur Extraordinaire et Plénipotentiaire',
  dateNaissance: '16 mai 1956',
  lieuNaissance: 'Kankan, Haute Guinée'
})
</script>

<style scoped>
/* Styles pour les animations */
.hover\:scale-110 {
  transition: transform 0.3s ease;
}

.group:hover .group-hover\:translate-x-2 {
  transform: translateX(0.5rem);
}

/* Style pour la timeline */
.border-l-4 {
  transition: all 0.3s ease;
}

/* Animation pour les badges */
.bg-white\/20 {
  backdrop-filter: blur(4px);
}
</style>
