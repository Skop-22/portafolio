<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ExternalLink,ArrowRight,Github,Globe,Lock } from 'lucide-vue-next';
import basicjs from '../assets/imagenes/basicjs.png'
import ecommerce from '../assets/imagenes/home_orden_master.png'
import ya_pedi from '../assets/imagenes/home_ya_pedi.png'

const projects=[
  {
    id: 'ecommerce',
    title: 'Orden Master',
    description: 'Sistema integral para la gestión de pedidos, clientes e inventario con WebSockets (Reverb) y Laravel 11.',
    image: ecommerce,
    link: '/proyectos/ecommerce',
    isPrivate: true,
    demo: 'https://order-msh.vercel.app'
  },
  {
    id: 'restaurante',
    title: 'Restaurant Ya Pedi System',
    description: 'Control de pedidos y mesas en tiempo real con Laravel 11, Vue 3 y WebSockets.',
    image: ya_pedi,
    link: '/proyectos/restaurante',
    isPrivate: true,
    demo: 'https://ya-pedi.vercel.app'
  },
  {
    id: 'saas',
    title: 'SaaS Multi-tenant',
    description: 'Arquitectura escalable para servicios multi-inquilino con aislamiento de datos y gestión de suscripciones.',
    image: '/src/assets/imagenes/proyecto_saas.png',
    link: '/proyectos/saas',
    isPrivate: false,
    github: '#',
    demo: '#'
  },
  {
    id: 'lenguaje',
    title: 'Lenguaje de Programación',
    description: 'Diseño e implementación de un lenguaje de programación propio con motor de ejecución en JS.',
    image: basicjs,
    link: '/proyectos/lenguaje',
    isPrivate: false,
    github: '#',
    demo: '#'
  }
];
</script>

<template>
  <div class="min-h-screen relative">
    <Header />

    <main class="relative z-10 pt-28 pb-20 px-4">
      <div class="max-w-7xl mx-auto space-y-12">
        <!-- Título -->
        <div class="text-center space-y-4">
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            Mis proyectos <span class="gradient-text">personales</span>
          </h1>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            Una colección de soluciones desarrolladas para resolver problemas reales y explorar nuevas tecnologías.
          </p>
        </div>

        <!-- Grid de Proyectos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative glass rounded-3xl overflow-hidden p-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col"
          >
            <!-- Imagen con Overlay de Detalles -->
            <router-link
              :to="project.link"
              class="aspect-video rounded-2xl overflow-hidden mb-6 relative block"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span class="text-white font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Ver detalles completos
                  <ArrowRight class="w-4 h-4" />
                </span>
              </div>
            </router-link>

            <!-- Contenido -->
            <div class="space-y-4 px-2 flex-grow">
              <div class="flex justify-between items-start">
                <h2 class="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {{ project.title }}
                </h2>
                <Lock
                  v-if="project.isPrivate"
                  class="w-4 h-4 text-slate-600"
                />
                <ExternalLink
                  v-else
                  class="w-4 h-4 text-slate-600"
                />
              </div>
              <p class="text-slate-400 leading-relaxed line-clamp-2 text-sm">
                {{ project.description }}
              </p>
            </div>

            <!-- Botones de Acción -->
            <div class="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
              <!-- Caso: Privado -->
              <template v-if="project.isPrivate">
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-500 text-[11px] font-medium italic">
                  <Lock class="w-3 h-3" />
                  Repositorio Privado
                </div>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-red-500 hover:text-white transition-all shadow-lg"
                >
                  <Globe class="w-4 h-4" />
                  Ver Demo
                </a>
              </template>

              <!-- Caso: Público -->
              <template v-else>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass text-white text-sm font-bold hover:bg-white/10 transition-all border border-white/10"
                >
                  <Github class="w-4 h-4" />
                  GitHub
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-red-500 hover:text-white transition-all"
                >
                  <Globe class="w-4 h-4" />
                  Demo
                </a>
              </template>
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
