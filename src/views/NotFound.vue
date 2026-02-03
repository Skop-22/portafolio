<script setup lang="ts">
import { onMounted,onUnmounted,ref } from 'vue'
import {
  animate,
  stagger,
  splitText,
  createAnimatable,
  utils
} from 'animejs'

const scene=ref<HTMLElement|null>(null)
const title=ref<HTMLElement|null>(null)
const subtitle=ref<HTMLElement|null>(null)
const button=ref<any>(null)
const orb=ref<HTMLElement|null>(null)

let bounds: DOMRect

onMounted(() => {
  /* ========= TEXTO ========= */
  const { chars }=splitText(title.value!,{ chars: true })

  animate(chars,{
    y: [40,0],
    opacity: [0,1],
    duration: 900,
    delay: stagger(40),
    ease: 'outExpo'
  })

  animate(subtitle.value!,{
    opacity: [0,1],
    y: [20,0],
    delay: 600,
    duration: 600,
    ease: 'outExpo'
  })

  animate(button.value.$el,{
    opacity: [0,1],
    scale: [0.9,1],
    delay: 900,
    duration: 500,
    ease: 'outBack'
  })

  /* ========= ORBE INTERACTIVO ========= */
  bounds=scene.value!.getBoundingClientRect()

  const orbAnim=createAnimatable(orb.value!,{
    x: 0,
    y: 0,
    backgroundColor: 'rgb(164, 255, 79)',
    ease: 'outExpo',
    duration: 600
  })

  const onMouseMove=(e: MouseEvent) => {
    if(!orbAnim) return;

    const hw=bounds.width/2
    const hh=bounds.height/2

    const x=utils.clamp(e.clientX-bounds.left-hw,-hw,hw)
    const y=utils.clamp(e.clientY-bounds.top-hh,-hh,hh)

    const r=utils.mapRange(x,-hw,hw,80,164)
    const b=utils.mapRange(x,-hw,hw,200,79)

    orbAnim
      .x(x)
      .y(y)
      .backgroundColor([r,255,b])
  }

  window.addEventListener('mousemove',onMouseMove)
  window.addEventListener('resize',() => {
    bounds=scene.value!.getBoundingClientRect()
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove',onMouseMove)
  })
})
</script>

<template>
  <div
    ref="scene"
    class="relative min-h-screen overflow-hidden flex items-center justify-center
           bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white"
  >
    <!-- Orbe interactivo -->
    <div
      ref="orb"
      class="absolute w-64 h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
      style="background: rgb(164,255,79)"
    />

    <div class="text-center relative z-10">
      <h1
        ref="title"
        class="text-[9rem] md:text-[11rem] font-black tracking-widest"
      >
        404
      </h1>

      <p
        ref="subtitle"
        class="text-xl text-gray-400 mb-10"
      >
        Esta página se perdió en el espacio
      </p>

      <RouterLink
        ref="button"
        to="/"
        class="inline-block px-8 py-3 rounded-xl bg-white text-black
               font-semibold shadow-xl hover:scale-110 transition"
      >
        Volver al inicio
      </RouterLink>
    </div>
  </div>
</template>
