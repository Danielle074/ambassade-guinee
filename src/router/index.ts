import { createRouter, createWebHistory } from 'vue-router'
// Layouts
import Layout from '@/layouts/Layout.vue'

// Pages
import Home from '@/views/Home.vue'

// Actualités

import Actualite from '@/views/Actualite.vue'
import ActualitesAmbassade from '@/components/actualites/ActualitesAmbassade.vue'
import ActualitesDiplomatique from '@/components/actualites/ActualitesDiplomatique.vue'
import ActualitesGouvernementale from '@/components/actualites/ActualitesGouvernementale.vue'

//Ambassade

import Presentation from '@/components/ambassade/Presentation.vue'
import Ambassadeur from '@/components/ambassade/Ambassadeur.vue'
import Chancellerie from '@/components/ambassade/Chancellerie.vue'
import ServicesAmbassadeur from '@/components/ambassade/ServicesAmbassade.vue'
import ConsulsHonoraires from '@/components/ambassade/ConsulsHonoraires.vue'
import Calendrier from '@/components/ambassade/Calendrier.vue'

//relations bilatérales

import RelationsBilaterales from '@/views/RelationsBilaterales.vue'
import Usa from '@/components/relations/Usa.vue'
import CostaRica from '@/components/relations/CostaRica.vue'
import Haiti from '@/components/relations/Haiti.vue'
import Bahamas from '@/components/relations/Bahamas.vue'
import FondMonetaire from '@/components/relations/FondMonetaire.vue'

//Services
import Consulat from '@/components/services/Consulat.vue'
import RendezVous from '@/components/services/RendezVous.vue'

import Construction from '@/views/Construction.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'actualite',
          name: 'actualite',
          component: Actualite
        },
        {
          path: 'actualites-ambassade',
          name: 'actualites-ambassade',
          component: ActualitesAmbassade
        },
        {
          path: 'actualites-diplomatique',
          name: 'actualites-diplomatique',
          component: ActualitesDiplomatique
        },
        {
          path: 'actualites-gouvernementale',
          name: 'actualites-gouvernementale',
          component: ActualitesGouvernementale
        },
        {
          path: 'presentation',
          name: 'presentation',
          component: Presentation
        },
        {
          path: 'ambassadeur',
          name: 'ambassadeur',
          component: Ambassadeur
        },
        {
          path: 'chancellerie',
          name: 'chancellerie',
          component: Chancellerie
        },
        {
          path: 'services-ambassadeur',
          name: 'services-ambassadeur',
          component: ServicesAmbassadeur
        },
        {
          path: 'consuls-honoraires',
          name: 'consuls-honoraires',
          component: ConsulsHonoraires
        },
        {
          path: 'calendrier',
          name: 'calendrier',
          component: Calendrier
        },
        {
          path: 'usa',
          name: 'usa',
          component: Usa
        },
        {
          path: 'costa-rica',
          name: 'costa-rica',
          component: CostaRica
        },
        {
          path: 'haiti',
          name: 'haiti',
          component: Haiti
        },
        {
          path: 'bahamas',
          name: 'bahamas',
          component: Bahamas
        },
        {
          path: 'fond-monetaire',
          name: 'fond-monetaire',
          component: FondMonetaire
        },
        {
          path: 'relations-bilaterales',
          name: 'relations-bilaterales',
          component: RelationsBilaterales
        },
        {
          path: 'consulat',
          name: 'consulat',
          component: Consulat
        },
        {
          path: 'rendez-vous',
          name: 'rendez-vous',
          component: RendezVous
        },
        {
          path: 'construction',
          name: 'construction',
          component: Construction
        }


      ]
    }
  ]
})

export default router


