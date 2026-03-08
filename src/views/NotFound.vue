<template>
  <div
    ref="containerRef"
    class="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-white font-sans"
  >
    <!-- Nebulas -->
    <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
    <div class="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

    <!-- Black Hole Container -->
    <div class="relative z-10 flex flex-col items-center">
      <div class="relative mb-12">
        <!-- Accretion Disk / Glow -->
        <div class="event-horizon absolute inset-[-40px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-transparent blur-2xl opacity-40" />

        <!-- The Black Hole -->
        <div
          ref="blackHoleRef"
          class="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-black border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]" />
          <span class="text-8xl md:text-9xl font-black tracking-tighter opacity-20 select-none">404</span>
        </div>

        <!-- Floating Astronaut -->
        <div class="astronaut absolute -top-12 -right-12 text-blue-300/60">
          <Ghost
            :size="64"
            stroke-width="1"
          />
        </div>
      </div>

      <!-- Text Content -->
      <div class="floating-text text-center px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Perdido en el <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Espacio</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          Parece que has cruzado el horizonte de sucesos. Esta página ha sido succionada por un agujero negro.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/"
            class="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Home :size="18" />
            Volver a la Tierra
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </router-link>

          <button
            @click="reloadPage"
            class="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2"
          >
            <RefreshCcw :size="18" />
            Reintentar Salto
          </button>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-8 left-8 flex items-center gap-3 text-slate-500 text-sm font-mono">
      <Rocket :size="16" />
      <span>COORD: 0,0,0_ERR</span>
    </div>

    <div class="absolute bottom-8 right-8 text-slate-500 text-sm font-mono">
      ESTADO: DERIVA CRÍTICA
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue';
import { animate,stagger } from 'animejs';
import { Rocket,Home,RefreshCcw,Ghost } from 'lucide-vue-next';

const blackHoleRef=ref<HTMLDivElement|null>(null);

const goToHome=() => {
  window.location.href='/';
};

const reloadPage=() => {
  window.location.reload();
};

onMounted(() => {
  if(blackHoleRef.value) {
    animate(blackHoleRef.value,{
      scale: [1,1.05],
      rotate: '1turn',
      duration: 10000,
      easing: 'linear',
      loop: true
    });

    animate('.event-horizon',{
      scale: [1,1.2],
      opacity: [0.3,0.6],
      duration: 3000,
      alternate: true,
      easing: 'inOutSine',
      loop: true
    });
  }

  animate('.astronaut',{
    translateX: [-20,20],
    translateY: [-30,30],
    rotate: ['-15deg','15deg'],
    duration: 5000,
    alternate: true,
    easing: 'inOutSine',
    loop: true
  });

  animate('.star-static',{
    opacity: [0.2,0.8],
    scale: [0.8,1.1],
    delay: stagger(50),
    duration: 3000,
    alternate: true,
    loop: true,
    easing: 'inOutSine'
  });
});

</script>
