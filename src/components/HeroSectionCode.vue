<script lang="ts" setup>
// Componente de código decorativo para la sección principal
</script>

<template>
  <div class="hidden lg:block relative">
    <div class="relative z-10 p-8 glass rounded-3xl border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
      <div class="mono text-sm space-y-2 group cursor-default">
        <p class="text-red-400 group-hover:text-red-300 transition-colors">class FullStackEngineer {</p>
        <p class="pl-4 text-blue-400">public $experience = "2+ years";</p>
        <p class="pl-4 text-blue-400">public $stack = ["Laravel 12", "PHP 8.4", "Vue 3", "MySQL"];</p>
        <p class="pl-4 text-blue-400">public $infra = ["Arch Linux", "Ubuntu Server", "MikroTik"];</p>
        <p class="pl-4 text-green-400 mt-4">public function create(Solution $idea) {</p>
        <p class="pl-8 text-slate-300 hover:text-white transition-colors">return $idea->scale()->secure()->deploy();</p>
        <p class="pl-4 text-green-400">}</p>
        <p class="text-red-400 group-hover:text-red-300 transition-colors">}</p>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/20 blur-[100px] -z-10"></div>
  </div>
</template>
