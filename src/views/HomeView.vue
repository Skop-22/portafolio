<script lang="ts" setup>
import Github from '../components/icons/IconGitHub.vue'
import Mail from '../components/icons/IconMail.vue'
</script>

<template>
  <div className="min-h-screen relative overflow-x-hidden">
    <div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0"></div>

    <main class="relative z-10 pt-20">
      <section class="relative py-20 lg:py-32 px-4">
        <div class="max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium animate-pulse">
              <Server class="w-4 h-4" />
              Experiencia en Laravel 12 & PHP 8.4
            </div>

            <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Transformando ideas en <span class="gradient-text">soluciones.</span>
            </h1>

            <p class="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Desarrollador Fullstack con +2 años de experiencia. Experto en el ecosistema
              Laravel, infraestructura Linux y redes MikroTik. Construyo el futuro, bit a bit.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                Ver Proyectos
                <ChevronRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div class="flex items-center gap-3">
                <a
                  href="https://github.com/Skop-22"
                  class="p-4 rounded-xl glass hover:bg-white/10 transition-colors"
                >
                  <Github class="w-6 h-6" />
                </a>
                <a
                  href="mailto:david.flores.beltran99@gmail.com"
                  class="p-4 rounded-xl glass hover:bg-white/10 transition-colors"
                >
                  <Mail class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div class="hidden lg:block relative">
            <div class="relative z-10 p-8 glass rounded-3xl border-white/10 shadow-2xl">
              <div class="mono text-sm space-y-2">
                <p class="text-red-400">class FullStackEngineer {</p>
                <p class="pl-4 text-blue-400">public $experience = "2+ years";</p>
                <p class="pl-4 text-blue-400">public $stack = ["Laravel 12", "PHP 8.4", "Vue 3", "MySQL"];</p>
                <p class="pl-4 text-blue-400">public $infra = ["Arch Linux", "Ubuntu Server", "MikroTik"];</p>
                <p class="pl-4 text-green-400 mt-4">public function create(Solution $idea) {</p>
                <p class="pl-8 text-slate-300">return $idea->scale()->secure()->deploy();</p>
                <p class="pl-4 text-green-400">}</p>
                <p class="text-red-400">}</p>
              </div>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/20 blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
