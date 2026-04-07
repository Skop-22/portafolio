<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import { animate,stagger } from 'animejs'
import { Calendar,Briefcase,Sparkles } from 'lucide-vue-next'
import Header from '../components/HeaderComponent.vue'

const title=ref<HTMLElement|null>(null)
const blocks=ref<HTMLElement[]>([])

onMounted(() => {
  animate(title.value!,{
    y: [20,0],
    opacity: [0,1],
    duration: 700,
    ease: 'outExpo'
  })

  animate(blocks.value,{
    y: [40,0],
    opacity: [0,1],
    delay: stagger(150,{ start: 300 }),
    duration: 700,
    ease: 'outExpo'
  })
})
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0"></div>

    <Header />
    <main class="relative z-10 pt-20">
      <section class="py-20 px-4">

        <!-- FONDO DECORATIVO -->
        <div class="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div class="max-w-6xl mx-auto relative z-10">

          <!-- TÍTULO -->
          <div
            ref="title"
            class="mb-12"
          >
            <h2 class="text-4xl md:text-5xl font-bold text-white">
              Experiencia Profesional
            </h2>
            <p class="text-slate-400 mt-3 max-w-2xl">
              Desarrollo de sistemas completos, desde backend hasta infraestructura,
              asegurando rendimiento, escalabilidad y estabilidad en producción.
            </p>
          </div>

          <!-- CARD -->
          <div
            ref="el => blocks.push(el!)"
            class="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition duration-500"
          >
            <div class="flex flex-col md:flex-row">

              <!-- IMAGEN -->
              <div class="md:w-1/3 relative overflow-hidden">
                <img
                  src="../assets/imagenes/desarrollador_full_stack.png"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <!-- CONTENIDO -->
              <div class="p-8 md:w-2/3">

                <!-- HEADER -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                  <div class="flex items-center gap-2 text-red-500 font-semibold uppercase text-sm tracking-wider">
                    <Briefcase class="w-4 h-4" />
                    Full Stack Developer
                  </div>

                  <div class="flex items-center gap-2 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <Calendar class="w-4 h-4" />
                    Jun 2023 — Mar 2025 · 1 año 9 meses
                  </div>

                </div>

                <!-- DESCRIPCIÓN -->
                <div class="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Experiencia sólida trabajando con
                    <span class="text-white font-medium">Laravel</span> en la creación,
                    mantenimiento y mejora de aplicaciones en producción.
                  </p>

                  <p class="text-slate-400">
                    Desarrollo de interfaces dinámicas con Vue.js y construcción de
                    <span class="text-white">APIs REST</span> escalables.
                  </p>

                  <p class="text-slate-400">
                    Administración de servidores Linux (<span class="text-white">Ubuntu Server</span>),
                    incluyendo despliegues, migraciones y optimización de servicios.
                  </p>
                </div>

                <!-- LOGROS -->
                <div class="mt-6">
                  <div class="flex items-center gap-2 text-white mb-3">
                    <Sparkles class="w-4 h-4 text-yellow-400" />
                    Logros clave
                  </div>

                  <ul class="text-sm text-slate-400 space-y-2">
                    <li>• Desarrollo de múltiples APIs REST en producción</li>
                    <li>• Implementación de sistemas de autenticación segura</li>
                    <li>• Optimización de rendimiento utilizando Redis</li>
                    <li>• Configuración y administración de servidores Linux</li>
                    <li>• Implementación de redes VPN y túneles con MikroTik</li>
                  </ul>
                </div>

                <!-- TECNOLOGÍAS -->
                <div class="mt-6">
                  <h4 class="text-white font-semibold mb-3">
                    Tecnologías
                  </h4>

                  <div class="flex flex-wrap gap-2">
                    <span class="tag">Laravel</span>
                    <span class="tag">PHP</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">MySQL</span>
                    <span class="tag">Redis</span>
                    <span class="tag">Ubuntu</span>
                    <span class="tag">Apache</span>
                    <span class="tag">OpenVPN</span>
                    <span class="tag">MikroTik</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>

