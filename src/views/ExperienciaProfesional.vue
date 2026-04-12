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
  <div class="relative">
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
                    Full Stack Developer (Livaur.com)
                  </div>

                  <div class="flex items-center gap-2 text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <Calendar class="w-4 h-4" />
                    Jun 2023 — Mar 2025 · 1 año 9 meses
                  </div>

                </div>

                <!-- DESCRIPCIÓN -->
                <div class="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Como <span class="text-white font-medium">Desarrollador Full Stack</span>, mi principal enfoque fue la
                    <span class="text-white">creación e implementación de APIs</span> para el núcleo del sistema, así como la
                    <span class="text-white">integración de pasarelas de pago (IPN, Webhooks)</span>, garantizando transacciones seguras y eficientes.
                  </p>

                  <p class="text-slate-400">
                    Trabajé intensamente en la visualización, experiencia de usuario y maquetación de proyectos utilizando
                    <span class="text-white">Bootstrap, JavaScript, HTML y CSS</span>. Ayudé en la creación y mantenimiento de proyectos robustos empleando <span class="text-white">PHP 8.0 a 8.2</span> y frameworks reactivos como <span class="text-white">Livewire</span>.
                  </p>

                  <p class="text-slate-400">
                    Además de la programación principal, apoyé en la <span class="text-white">administración integral de MySQL</span> y en la infraestructura de redes. Esto incluye entornos <span class="text-white">Linux (Ubuntu)</span>, configuraciones de túneles <span class="text-white">OpenVPN</span>, y el uso de <span class="text-white">KVM</span> para virtualizar routers <span class="text-white">MikroTik</span> con simulaciones en <span class="text-white">GNS3</span>.
                  </p>
                </div>

                <!-- LOGROS -->
                <div class="mt-6">
                  <div class="flex items-center gap-2 text-white mb-3">
                    <Sparkles class="w-4 h-4 text-yellow-400" />
                    Responsabilidades y Logros
                  </div>

                  <ul class="text-sm text-slate-400 space-y-2">
                    <li>• Arquitectura e implementación de pasarelas de pago.</li>
                    <li>• Desarrollo principal de APIs RESTful como núcleo de los sistemas.</li>
                    <li>• Visualización de proyectos y UI con Bootstrap, JS, HTML y CSS.</li>
                    <li>• Desarrollo de proyectos interactivos en PHP 8.x junto a Laravel y Livewire.</li>
                    <li>• Automatización de mensajería usando WhatsApp Business.</li>
                    <li>• Gestión de infraestructuras Linux (Ubuntu), túneles OpenVPN, y redes MikroTik en GNS3.</li>
                    <li>• Optimización y mantenimiento integral de bases de datos MySQL.</li>
                  </ul>
                </div>

                <!-- TECNOLOGÍAS -->
                <div class="mt-6">
                  <h4 class="text-white font-semibold mb-3">
                    Tecnologías
                  </h4>

                  <div class="flex flex-wrap gap-2">
                    <span class="tag">PHP 8</span>
                    <span class="tag">Laravel</span>
                    <span class="tag">Livewire</span>
                    <span class="tag">JavaScript</span>
                    <span class="tag">Bootstrap</span>
                    <span class="tag">HTML/CSS</span>
                    <span class="tag">MySQL</span>
                    <span class="tag">APIs</span>
                    <span class="tag">Webhooks</span>
                    <span class="tag">Linux/Ubuntu</span>
                    <span class="tag">MikroTik</span>
                    <span class="tag">KVM</span>
                    <span class="tag">GNS3</span>
                    <span class="tag">OpenVPN</span>
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

