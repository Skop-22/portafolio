<template>
  <!-- Contenedor principal del fondo de estrellas -->
  <div class="fixed inset-0 w-full h-full overflow-hidden bg-gray-950 -z-10">

    <!-- Shooting Stars - Responsive -->
    <div
      v-for="star in shootingStars"
      :key="star.id"
      class="absolute pointer-events-none flex items-center opacity-50"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        transform: `rotate(${star.angle}deg) scale(${star.scale})`,
        transformOrigin: 'left center',
        zIndex: 0,
      }"
      :ref="(el) => setShootingStarRef(el as HTMLElement, star)"
    >
      <!-- Estrella fugaz más pequeña en móvil -->
      <div
        class="bg-gradient-to-r from-transparent via-white/20 to-white/80"
        :class="{
          'h-px w-[150px]': !isMobile,
          'h-[0.5px] w-[80px]': isMobile
        }"
      />
      <div
        :class="{
          'w-1 h-1 shadow-[0_0_8px_#fff]': !isMobile,
          'w-[2px] h-[2px] shadow-[0_0_4px_#fff]': isMobile
        }"
        class="bg-white rounded-full"
      />
    </div>

    <!-- Starfield estático - Menos estrellas en móvil -->
    <div
      v-for="star in visibleStars"
      :key="star.id"
      class="star-static absolute rounded-full bg-white"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.displaySize}px`,
        height: `${star.displaySize}px`,
        opacity: star.opacity,
        boxShadow: star.size > 2 ? `0 0 ${isMobile ? 5 : 10}px rgba(255, 255, 255, 0.5)` : 'none',
        zIndex: 0,
      }"
    />
  </div>

  <!-- Contenedor del contenido con scroll -->
  <div class="relative min-h-screen overflow-y-auto overflow-x-hidden z-0">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted,onUnmounted,computed } from 'vue';
import { animate } from 'animejs';
import { RouterView } from 'vue-router';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  displaySize: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  duration: number;
  scale: number;
}

const stars=ref<Star[]>([]);
const shootingStars=ref<ShootingStar[]>([]);

const animatedStars=new Set<number>();
let shootingStarInterval: ReturnType<typeof setInterval>|null=null;

// Detectar si es móvil
const isMobile=ref(window.innerWidth<768);

// Estrellas visibles según dispositivo
const visibleStars=computed(() => {
  return stars.value.filter(star => {
    if(isMobile.value) {
      // En móvil mostrar menos estrellas
      return star.id%3===0;
    }
    return true;
  });
});

const setShootingStarRef=(el: HTMLElement,star: ShootingStar) => {
  if(el&&!animatedStars.has(star.id)) {
    animatedStars.add(star.id);

    const translateDistance=isMobile.value? 600:1200;

    animate(el,{
      translateX: [0,translateDistance],
      opacity: [0,1,0],
      duration: star.duration,
      easing: 'linear',
    });
  }
};

// Generar estrellas estáticas
const generateStars=() => {
  const starCount=isMobile.value? 60:100;

  const newStars=Array.from({ length: starCount }).map((_,i) => {
    const baseSize=Math.random()*2+1;

    return {
      id: i,
      x: Math.random()*100,
      y: Math.random()*100,
      size: baseSize,
      opacity: 0.3+Math.random()*0.5,
      displaySize: isMobile.value? baseSize*0.7:baseSize,
    };
  });

  stars.value=newStars;
};

// Generar estrella fugaz
const generateShootingStar=() => {
  const id=Date.now()+Math.random();

  const newShootingStar={
    id,
    x: Math.random()*100,
    y: Math.random()*(isMobile.value? 30:20),
    angle: isMobile.value? 15+Math.random()*15:25+Math.random()*20,
    duration: isMobile.value? 1500+Math.random()*1000:2000+Math.random()*1000,
    scale: isMobile.value? 0.6:1,
  };

  const maxStars=isMobile.value? 2:4;
  shootingStars.value=[...shootingStars.value.slice(-maxStars),newShootingStar];

  setTimeout(() => {
    shootingStars.value=shootingStars.value.filter(s => s.id!==id);
    animatedStars.delete(id);
  },isMobile.value? 2500:4000);
};

// Actualizar cuando cambie el tamaño de la pantalla
const handleResize=() => {
  isMobile.value=window.innerWidth<768;
  generateStars();
};

onMounted(() => {
  generateStars();

  shootingStarInterval=setInterval(generateShootingStar,isMobile.value? 1200:900);

  window.addEventListener('resize',handleResize);
});

onUnmounted(() => {
  if(shootingStarInterval) {
    clearInterval(shootingStarInterval);
  }
  window.removeEventListener('resize',handleResize);
  animatedStars.clear();
});
</script>
