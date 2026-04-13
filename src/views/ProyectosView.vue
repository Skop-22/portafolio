<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ExternalLink,ArrowRight } from 'lucide-vue-next';
import basicjs from '../assets/imagenes/basicjs.png'

const projects=[
  {
    id: 'ecommerce',
    title: 'eCommerce Order Control',
    description: 'Sistema integral para la gestión de pedidos, clientes e inventario en plataformas de comercio electrónico. Construido con Laravel y Vue.js.',
    image: '/src/assets/imagenes/proyecto_ecommerce.png',
    link: '/proyectos/ecommerce'
  },
  {
    id: 'restaurante',
    title: 'Restaurant POS',
    description: 'Control de pedidos y mesas para pequeños restaurantes. Interfaz táctil optimizada para rapidez en el servicio y gestión de cocina.',
    image: '/src/assets/imagenes/proyecto_restaurante.png',
    link: '/proyectos/restaurante'
  },
  {
    id: 'saas',
    title: 'SaaS Multi-tenant',
    description: 'Arquitectura escalable para servicios multi-inquilino con aislamiento de datos, gestión de suscripciones y panel de administración global.',
    image: '/src/assets/imagenes/proyecto_saas.png',
    link: '/proyectos/saas'
  },
  {
    id: 'lenguaje',
    title: 'Lenguaje de Programación',
    description: 'Diseño e implementación de un lenguaje de programación propio. Incluye análisis léxico, sintáctico y un motor de ejecución.',
    image: basicjs,
    link: '/proyectos/lenguaje'
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
          <router-link
            v-for="project in projects"
            :key="project.id"
            :to="project.link"
            class="group relative glass rounded-3xl overflow-hidden p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
          >
            <div class="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white font-semibold flex items-center gap-2">
                  Ver detalles
                  <ArrowRight class="w-4 h-4" />
                </span>
              </div>
            </div>

            <div class="space-y-4 px-2 pb-2">
              <div class="flex justify-between items-start">
                <h2 class="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {{ project.title }}
                </h2>
                <ExternalLink class="w-5 h-5 text-slate-500 group-hover:text-white" />
              </div>
              <p class="text-slate-400 leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>
            </div>
          </router-link>
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
