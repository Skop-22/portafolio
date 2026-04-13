<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ArrowLeft, CheckCircle2, Globe, Github, Utensils } from 'lucide-vue-next';

const features = [
  'Gestión de mesas y estados en tiempo real',
  'Sistema de comandas para cocina',
  'Facturación rápida y división de cuentas',
  'Control de stock de ingredientes',
  'Reportes de ventas diarios y mensuales',
  'Interfaz táctil optimizada para tablets'
];
</script>

<template>
  <div class="min-h-screen relative">
    <Header />

    <main class="relative z-10 pt-28 pb-20 px-4">
      <div class="max-w-5xl mx-auto space-y-12">
        <div class="space-y-6">
          <router-link to="/proyectos" class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </router-link>
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            Restaurant <span class="gradient-text">POS System</span>
          </h1>
        </div>

        <div class="glass rounded-3xl overflow-hidden p-2">
          <img src="/src/assets/imagenes/proyecto_restaurante.png" alt="Restaurant Project" class="w-full rounded-2xl shadow-2xl" />
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
                <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
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
                  <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Laravel</span>
                  <span class="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold border border-orange-500/20">Inertia.js</span>
                  <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold border border-sky-500/20">TailwindCSS</span>
                  <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">SQLite</span>
                </div>
              </div>
              <div class="pt-6 border-t border-white/5 space-y-3">
                <button class="w-full bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Utensils class="w-4 h-4" />
                  Ver Demo
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
