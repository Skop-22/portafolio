<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import Header from '../components/HeaderComponent.vue'
import { animate,stagger,splitText } from 'animejs'

const title=ref<HTMLElement|null>(null)
const paragraphs=ref<HTMLElement[]>([])
const cards=ref<HTMLElement[]>([])
const image=ref<HTMLElement|null>(null)

onMounted(() => {
  const { chars }=splitText(title.value!,{ chars: true })

  animate(chars,{
    y: [30,0],
    opacity: [0,1],
    duration: 800,
    delay: stagger(35),
    ease: 'outExpo'
  })

  animate(image.value!,{
    scale: [0.95,1],
    opacity: [0,1],
    duration: 900,
    delay: 300,
    ease: 'outExpo'
  })

  animate(paragraphs.value,{
    y: [20,0],
    opacity: [0,1],
    delay: stagger(150,{ start: 600 }),
    duration: 700,
    ease: 'outExpo'
  })

  animate(cards.value,{
    y: [30,0],
    opacity: [0,1],
    delay: stagger(120,{ start: 1000 }),
    duration: 600,
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
      <section
        id="about"
        class="py-20 px-4"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row gap-12 items-center">

            <!-- IMAGEN -->
            <div class="w-full md:w-1/3">
              <div
                ref="image"
                class="relative group "
              >
                <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img
                  src="../assets/imagenes/code.jpeg"
                  alt="Coding workspace"
                  class="relative rounded-3xl w-full h-auto object-cover border border-white/10"
                />
              </div>
            </div>

            <!-- CONTENIDO -->
            <div class="w-full md:w-2/3 space-y-6">
              <div class="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-sm">
                <User class="w-4 h-4" />
                Full Stack Developer
              </div>

              <h2
                ref="title"
                class="text-4xl font-bold text-white"
              >
                Desarrollo aplicaciones completas, de la idea a producción.
              </h2>

              <p
                ref="el => paragraphs.push(el!)"
                class="text-slate-400 text-lg leading-relaxed "
              >
                Soy desarrollador <span class="text-white font-medium">Full Stack</span> con un fuerte enfoque en arquitectura,
                eficiencia y mantenibilidad. Me gusta escribir código limpio, bien estructurado y fácil de escalar.
              </p>

              <p
                ref="el => paragraphs.push(el!)"
                class="text-slate-400 text-lg leading-relaxed "
              >
                Trabajo tanto en el backend como en el frontend: desarrollo APIs, sistemas de autenticación,
                lógica de negocio y bases de datos, así como interfaces modernas centradas en la experiencia del usuario.
              </p>

              <p
                ref="el => paragraphs.push(el!)"
                class="text-slate-400 text-lg leading-relaxed "
              >
                Disfruto optimizar rendimiento, mejorar flujos de trabajo y aplicar buenas prácticas
                usando Git, GitHub y entornos Linux.
              </p>

              <!-- CARDS -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                <div
                  ref="el => cards.push(el!)"
                  class="p-4 glass rounded-2xl flex gap-4 "
                >
                  <div class="bg-red-500/20 p-2 rounded-lg">
                    <Terminal class="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Backend</h4>
                    <p class="text-sm text-slate-500">
                      APIs, autenticación, bases de datos y lógica de negocio.
                    </p>
                  </div>
                </div>

                <div
                  ref="el => cards.push(el!)"
                  class="p-4 glass rounded-2xl flex gap-4 "
                >
                  <div class="bg-blue-500/20 p-2 rounded-lg">
                    <Cpu class="text-blue-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Frontend</h4>
                    <p class="text-sm text-slate-500">
                      Componentes reutilizables, UI moderna y UX fluida.
                    </p>
                  </div>
                </div>

                <div
                  ref="el => cards.push(el!)"
                  class="p-4 glass rounded-2xl flex gap-4 "
                >
                  <div class="bg-purple-500/20 p-2 rounded-lg">
                    <Layers class="text-purple-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Arquitectura</h4>
                    <p class="text-sm text-slate-500">
                      Código escalable, mantenible y bien organizado.
                    </p>
                  </div>
                </div>
              </div>

              <p
                ref="el => paragraphs.push(el!)"
                class="text-slate-500 italic pt-6 "
              >
                Mi objetivo es crear software que funcione hoy, escale mañana y sea fácil de mantener siempre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
