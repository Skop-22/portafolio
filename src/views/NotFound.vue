<script setup lang="ts">
import { ref,onMounted } from 'vue'
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

let bounds: DOMRect

onMounted(() => {
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

  bounds=scene.value!.getBoundingClientRect()
})
</script>

<template>
  <div
    ref="scene"
    class="relative min-h-screen overflow-hidden flex items-center justify-center
           bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white"
  >

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
