<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ArrowLeft, CheckCircle2, Layout, Database, ShieldCheck } from 'lucide-vue-next';

const features = [
  'Aislamiento estricto de datos por inquilino',
  'Gestión de subdominios personalizados',
  'Sistema de planes y facturación recurrente',
  'Panel de administración global para supervisión',
  'Roles y permisos granulares por organización',
  'Infraestructura preparada para escalabilidad horizontal'
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
            SaaS <span class="gradient-text">Multi-tenant Architecture</span>
          </h1>
        </div>

        <div class="glass rounded-3xl overflow-hidden p-2">
          <img src="/src/assets/imagenes/proyecto_saas.png" alt="SaaS Project" class="w-full rounded-2xl shadow-2xl" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Sobre el proyecto</h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                Este proyecto representa una arquitectura robusta para aplicaciones de Software as a Service (SaaS). Utiliza un enfoque de base de datos única con discriminación por ID de inquilino (Tenancy-by-app), permitiendo una gestión centralizada con el máximo rendimiento.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed">
                El sistema incluye todo lo necesario para lanzar un producto SaaS: desde el manejo de suscripciones hasta la automatización de la provisión de nuevos inquilinos en segundos.
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
                  <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Laravel 11+</span>
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">PostgreSQL</span>
                  <span class="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold border border-violet-500/20">Redis</span>
                  <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">Docker</span>
                </div>
              </div>
              <div class="pt-6 border-t border-white/5 space-y-4">
                <div class="flex items-start gap-3 text-sm text-slate-400">
                  <ShieldCheck class="w-5 h-5 text-emerald-500 shrink-0" />
                  Arquitectura auditada para máxima seguridad de datos.
                </div>
                <div class="flex items-start gap-3 text-sm text-slate-400">
                  <Layout class="w-5 h-5 text-red-500 shrink-0" />
                  Panel UI/UX premium basado en Shadcn Vue.
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
</style>
