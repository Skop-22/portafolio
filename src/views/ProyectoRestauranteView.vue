<script lang="ts" setup>
import { ref } from 'vue';
import Header from '../components/HeaderComponent.vue';
import { ArrowLeft,CheckCircle2,Globe,Github,Utensils,ChevronLeft,ChevronRight } from 'lucide-vue-next';

const features=[
  'Gestión de mesas y estados en tiempo real',
  'Sistema de comandas para cocina',
  'Facturación rápida y división de cuentas',
  'Control de stock de ingredientes',
  'Reportes de ventas diarios y mensuales',
  'Interfaz táctil optimizada para tablets'
];

const currentSlide=ref(0);
const slides=[
  { title: 'Página de Inicio',alt: 'Inicio - Restaurant Ya Pedi',image: '' },
  { title: 'Panel del Cliente',alt: 'Cliente - Restaurant Ya Pedi',image: '' },
  { title: 'Panel del Administrador',alt: 'Admin - Restaurant Ya Pedi',image: '' }
];

const nextSlide=() => {
  currentSlide.value=(currentSlide.value+1)%slides.length;
};

const prevSlide=() => {
  currentSlide.value=(currentSlide.value-1+slides.length)%slides.length;
};
</script>

<template>
  <div class="min-h-screen relative">
    <Header />

    <main class="relative z-10 pt-28 pb-20 px-4">
      <div class="max-w-5xl mx-auto space-y-12">
        <div class="space-y-6">
          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </router-link>
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            Restaurant <span class="gradient-text">Ya Pedi System</span>
          </h1>
        </div>

        <!-- Carrusel del Proyecto -->
        <div class="relative group">
          <div class="glass rounded-3xl overflow-hidden p-2 aspect-video relative">
            <div
              class="w-full h-full relative overflow-hidden rounded-2xl bg-slate-900"
            >
              <transition-group name="fade">
                <div
                  v-for="(slide, index) in slides"
                  v-show="currentSlide === index"
                  :key="index"
                  class="absolute inset-0"
                >
                  <img
                    :src="slide.image"
                    :alt="slide.alt"
                    class="w-full h-full object-cover"
                  />
                  <!-- Overlay de título -->
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p class="text-white font-bold text-xl uppercase tracking-widest">{{ slide.title }}</p>
                  </div>
                </div>
              </transition-group>
            </div>

            <!-- Controles -->
            <button
              @click="prevSlide"
              class="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
            >
              <ChevronLeft class="w-6 h-6" />
            </button>
            <button
              @click="nextSlide"
              class="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
            >
              <ChevronRight class="w-6 h-6" />
            </button>

            <!-- Indicadores -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, index) in slides"
                :key="index"
                @click="currentSlide = index"
                class="w-2 h-2 rounded-full transition-all"
                :class="currentSlide === index ? 'bg-red-500 w-6' : 'bg-white/30 hover:bg-white/50'"
              ></button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Sobre el proyecto</h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                Este sistema fue desarrollado específicamente para pequeños y medianos restaurantes que necesitan digitalizar su operación sin la complejidad de sistemas corporativos pesados. Se enfoca en la velocidad de toma de pedidos y la comunicación fluida con la cocina.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed">
                La interfaz intuitiva permite que el personal de servicio aprenda a usar el sistema en cuestión de minutos, reduciendo errores en los pedidos y acelerando el tiempo de servicio.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Características clave</h2>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li
                  v-for="feature in features"
                  :key="feature"
                  class="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5"
                >
                  <CheckCircle2 class="w-5 h-5 text-red-500" />
                  {{ feature }}
                </li>
              </ul>
            </section>
          </div>

          <div class="space-y-6">
            <div class="glass rounded-2xl p-6 space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Tecnologías</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Laravel 11</span>
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">Vue.js 3</span>
                  <span class="px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 text-xs font-bold border border-blue-400/20">TypeScript</span>
                  <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold border border-purple-500/20">Reverb</span>
                  <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold border border-sky-500/20">TailwindCSS</span>
                  <span class="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold border border-yellow-500/20">MySQL</span>
                </div>
              </div>
              <div class="pt-6 border-t border-white/5 space-y-3">
                <button class="w-full bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Utensils class="w-4 h-4" />
                  Ver Demo
                </button>
                <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-xs text-slate-500 italic text-center">
                    El repositorio de este proyecto es privado y el código no está disponible públicamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #ff2d20 0%, #f05340 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
