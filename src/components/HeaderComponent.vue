<script lang="ts" setup>
import Code2 from '../components/icons/IconCodeSlash.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-red-600 to-red-400 rounded-lg flex items-center justify-center">
            <Code2 class="text-white w-5 h-5" />
          </div>
          <router-link to="/">
            <span class="text-xl font-bold tracking-tight text-white">Dev<span className="text-red-500">Laravel</span></span>
          </router-link>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <router-link
            to="/sobre-mi"
            class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Sobre mí
          </router-link>
          <a
            href="mailto:tuemail@ejemplo.com"
            class="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Contactar
          </a>
        </nav>

        <div class="md:hidden">
          <button class="text-slate-300 hover:text-white">
            <X />
            <Menu />
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden glass border-b border-white/10 p-4 absolute top-16 left-0 right-0 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
      <a
        key=""
        href=""
        class="text-lg font-medium text-slate-300 p-2"
      >
      </a>
    </div>
  </header>
</template>

