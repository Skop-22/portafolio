<template>
  <div class="min-h-screen relative">
    <!-- Fondos desenfocados estándar del proyecto -->
    <div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0"></div>

    <main class="relative z-10 pt-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white font-sans">
      <!-- Black Hole Container -->
      <div class="relative z-10 flex flex-col items-center">
        <div class="relative mb-12">
          <!-- Accretion Disk / Glow -->
          <div class="event-horizon absolute inset-[-40px] rounded-full bg-gradient-to-r from-red-600 via-blue-500 to-transparent blur-2xl opacity-40" />

          <!-- The Black Hole -->
          <div
            ref="blackHoleRef"
            class="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-black border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden"
          >
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]" />
            <span class="text-8xl md:text-9xl font-black tracking-tighter text-slate-700 opacity-80 select-none">404</span>
          </div>

          <!-- Floating Astronaut -->
          <div class="astronaut absolute -top-12 -right-12 text-red-300/60">
            <Ghost
              :size="64"
              stroke-width="1.5"
            />
          </div>
        </div>

        <!-- Text Content -->
        <div class="floating-text text-center px-6">
          <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Perdido en el <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">Espacio</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
            Parece que has cruzado el horizonte de sucesos. Esta página ha sido succionada al vacío.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/"
              class="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <Home :size="20" />
              Volver a la Tierra
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { animate,stagger } from 'animejs';
import { Home,Ghost } from 'lucide-vue-next';
import Header from '../components/HeaderComponent.vue';

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
