<script lang="ts" setup>
import { ref } from 'vue';
import Code2 from '../components/icons/IconCodeSlash.vue';
import { Menu,X } from 'lucide-vue-next'

const isMenuOpen=ref(false);

const toggleMenu=() => {
  isMenuOpen.value=!isMenuOpen.value;
};

const closeMenu=() => {
  isMenuOpen.value=false;
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-red-600 to-red-400 rounded-lg flex items-center justify-center">
            <Code2 class="text-white w-5 h-5" />
          </div>
          <router-link
            to="/"
            @click="closeMenu"
          >
            <span class="text-xl font-bold tracking-tight text-white">Dev<span class="text-red-500">Laravel</span></span>
          </router-link>
        </div>

        <!-- Navegación Desktop -->
        <nav class="hidden md:flex items-center gap-8">
          <router-link
            to="/sobre-mi"
            class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Sobre mí
          </router-link>
          <router-link
            to="/certificados"
            class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Certificados
          </router-link>
          <router-link
            to="/experiencia/profesional"
            class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Experiencia profesional
          </router-link>
          <a
            href="mailto:david.flores.beltran99@gmail.com"
            class="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Contactar
          </a>
        </nav>

        <!-- Botón menú móvil -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-slate-300 hover:text-white p-2 focus:outline-none"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          >
            <X
              v-if="isMenuOpen"
              class="w-6 h-6"
            />
            <Menu
              v-else
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Menú móvil desplegable -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden glass border-b border-white/10 p-4 absolute top-16 left-0 right-0 flex flex-col gap-2"
      >
        <router-link
          to="/sobre-mi"
          @click="closeMenu"
          class="text-lg font-medium text-slate-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          Sobre mí
        </router-link>

        <router-link
          to="/certificados"
          @click="closeMenu"
          class="text-lg font-medium text-slate-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          Certificados
        </router-link>

        <router-link
          to="/experiencia/profesional"
          @click="closeMenu"
          class="text-lg font-medium text-slate-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          Experiencia profesional
        </router-link>

        <a
          href="mailto:david.flores.beltran99@gmail.com"
          @click="closeMenu"
          class="bg-white text-slate-950 px-4 py-3 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 text-center"
        >
          Contactar
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Asegurar que el menú móvil esté sobre el contenido */
header {
  backdrop-filter: blur(10px);
}

/* Transiciones suaves */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

