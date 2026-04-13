<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ArrowLeft, CheckCircle2, ChevronRight, Globe, Github } from 'lucide-vue-next';

const features = [
  'Gestión de pedidos en tiempo real',
  'Integración con múltiples pasarelas de pago',
  'Panel de administración avanzado con estadísticas',
  'Control de inventario automatizado',
  'Notificaciones por correo electrónico y SMS',
  'Diseño responsivo para móviles y tablets'
];
</script>

<template>
  <div class="min-h-screen relative">
    <Header />

    <main class="relative z-10 pt-28 pb-20 px-4">
      <div class="max-w-5xl mx-auto space-y-12">
        <!-- Navegación y Título -->
        <div class="space-y-6">
          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </router-link>

          <h1 class="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            eCommerce <span class="gradient-text">Order Control</span>
          </h1>
        </div>

        <!-- Imagen Principal -->
        <div class="glass rounded-3xl overflow-hidden p-2">
          <img
            src="/src/assets/imagenes/proyecto_ecommerce.png"
            alt="Ecommerce Project"
            class="w-full rounded-2xl shadow-2xl"
          />
        </div>

        <!-- Información del Proyecto -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Sobre el proyecto</h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                Este sistema fue diseñado para centralizar la operación de tiendas en línea de alto volumen. 
                Permite a los administradores rastrear cada pedido desde la compra hasta la entrega final, 
                optimizando los procesos logísticos y mejorando la satisfacción del cliente.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed">
                Desarrollado con un enfoque en la escalabilidad y la seguridad, utilizando las mejores 
                prácticas de Laravel para asegurar un rendimiento óptimo bajo carga.
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

          <!-- Sidebar de Detalles -->
          <div class="space-y-6">
            <div class="glass rounded-2xl p-6 space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Tecnologías</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Laravel</span>
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">Vue.js</span>
                  <span class="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold border border-yellow-500/20">MySQL</span>
                  <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold border border-sky-500/20">TailwindCSS</span>
                </div>
              </div>

              <div>
                <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Rol</h3>
                <p class="text-white">Fullstack Developer</p>
              </div>

              <div class="pt-6 border-t border-white/5 space-y-3">
                <button class="w-full bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Globe class="w-4 h-4" />
                  Ver Demo Live
                </button>
                <button class="w-full glass text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Github class="w-4 h-4" />
                  Ver Repositorio
                </button>
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
</style>
