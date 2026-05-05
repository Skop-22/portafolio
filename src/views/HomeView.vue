<script lang="ts" setup>
import Github from '../components/icons/IconGitHub.vue'
import Mail from '../components/icons/IconMail.vue'
import ChevronRight from '../components/icons/IconChevronRigth.vue';
import Header from '../components/HeaderComponent.vue';
import { Server } from 'lucide-vue-next';
import HeroSectionCode from '../components/HeroSectionCode.vue';

</script>

<template>
  <div class="min-h-screen relative text-white selection:bg-red-500/30">
    <!-- Background Orbs -->
    <div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

    <Header />

    <main class="relative z-10 pt-20">
      <!-- HERO SECTION -->
      <section class="relative py-12 lg:py-32 px-4 overflow-hidden">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm font-medium animate-pulse mx-auto lg:mx-0">
              <Server class="w-4 h-4" />
              Experiencia en Laravel 12 & PHP 8.4
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Transformando ideas en <span class="gradient-text">soluciones.</span>
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Desarrollador Fullstack con +2 años de experiencia. Especialista en el ecosistema
              Laravel, infraestructura Linux y redes MikroTik. Construyo el futuro, bit a bit.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <router-link
                to="/proyectos"
                class="w-full sm:w-auto group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/20"
              >
                Ver Proyectos
                <ChevronRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </router-link>
              <div class="flex items-center gap-3">
                <a
                  href="https://github.com/Skop-22"
                  target="_blank"
                  class="p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github class="w-6 h-6" />
                </a>
                <a
                  href="mailto:david.flores.beltran99@gmail.com"
                  class="p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <!-- Hero Image/Code - Hidden on very small screens, visible on LG -->
          <div class="hidden lg:block">
            <HeroSectionCode />
          </div>
        </div>
      </section>

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
