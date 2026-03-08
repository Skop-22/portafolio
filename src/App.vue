<template>
  <div
    v-for="star in shootingStars"
    :key="star.id"
    class="absolute pointer-events-none flex items-center opacity-50"
    :style="{
      left: `${star.x}%`,
      top: `${star.y}%`,
      transform: `rotate(${star.angle}deg)`,
      transformOrigin: 'left center',
      zIndex: 0,
    }"
    :ref="(el) => setShootingStarRef(el as HTMLElement, star)"
  >
    <div class="h-[1px] w-[150px] bg-gradient-to-r from-transparent via-white/20 to-white/80" />
    <div class="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#fff]" />
  </div>

  <!-- Starfield -->
  <div
    v-for="star in stars"
    :key="star.id"
    class="star-static absolute rounded-full bg-white"
    :style="{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: 0.4 + Math.random() * 0.4,
      boxShadow: star.size > 2 ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
      zIndex: 0,
    }"
  />
  <RouterView />
</template>

<script lang="ts" setup>
import { ref,onMounted,onUnmounted } from 'vue';
import { animate,stagger } from 'animejs';
import { Rocket,Home,RefreshCcw,Ghost } from 'lucide-vue-next';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  duration: number;
}

const containerRef=ref<HTMLDivElement|null>(null);
const blackHoleRef=ref<HTMLDivElement|null>(null);
const stars=ref<Star[]>([]);
const shootingStars=ref<ShootingStar[]>([]);

const animatedStars=new Set<number>();
let interval: ReturnType<typeof setInterval>|null=null;

const setShootingStarRef=(el: HTMLElement,star: ShootingStar) => {
  if(el&&!animatedStars.has(star.id)) {
    animatedStars.add(star.id);

    animate(el,{
      translateX: [0,1200],
      opacity: [0,1,0],
      duration: star.duration,
      easing: 'linear',
    });
  }
};

const goToHome=() => {
  window.location.href='/';
};

const reloadPage=() => {
  window.location.reload();
};

onMounted(() => {
  const newStars=Array.from({ length: 800 }).map((_,i) => ({
    id: i,
    x: Math.random()*100,
    y: Math.random()*100,
    size: Math.random()*2+1,
    duration: Math.random()*3000+2000,
  }));
  stars.value=newStars;

  interval=setInterval(() => {
    const id=Date.now()+Math.random();
    const newShootingStar={
      id,
      x: Math.random()*100,
      y: Math.random()*20,
      angle: 25+Math.random()*20,
      duration: 2000+Math.random()*1000,
    };

    shootingStars.value=[...shootingStars.value.slice(-4),newShootingStar];

    setTimeout(() => {
      shootingStars.value=shootingStars.value.filter(s => s.id!==id);
      animatedStars.delete(id);
    },4000);
  },900);

  if(blackHoleRef.value) {
    animate(blackHoleRef.value,{
      scale: [1,1.05],
      rotate: '1turn',
      duration: 10000,
      easing: 'linear',
      loop: true
    });
  }
});

onUnmounted(() => {
  if(interval) {
    clearInterval(interval);
  }
  animatedStars.clear();
});

</script>

<style scoped>
</style>
