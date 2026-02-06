<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
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
            <div class="w-full md:w-1/3">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img
                  src="https://picsum.photos/seed/dev/600/600"
                  alt="Profile"
                  class="relative rounded-3xl w-full h-auto object-cover border border-white/10"
                />
              </div>
            </div>

            <div class="w-full md:w-2/3 space-y-6">
              <div class="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-sm">
                <User class="w-4 h-4" />
                Sobre Mí
              </div>
              <h2 class="text-4xl font-bold text-white">Apasionado por la arquitectura y eficiencia.</h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                Me apasiona el desarrollo de software y la programación en general; disfruto crear soluciones eficientes, escalables y bien estructuradas, cuidando tanto la lógica del backend como la experiencia del usuario en el frontend.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed">
                Tengo experiencia desarrollando aplicaciones web completas, integrando APIs, sistemas de autenticación, pasarelas de pago y manejo de bases de datos, además de trabajar cómodamente en entornos Linux y flujos de trabajo con Git y GitHub.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div class="p-4 glass rounded-2xl flex items-start gap-4">
                  <div class="bg-red-500/20 p-2 rounded-lg">
                    <Terminal class="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Autodidacta</h4>
                    <p class="text-sm text-slate-500">Siempre en busca de nuevas tecnologías y mejores prácticas.</p>
                  </div>
                </div>
                <div class="p-4 glass rounded-2xl flex items-start gap-4">
                  <div class="bg-blue-500/20 p-2 rounded-lg">
                    <Cpu class="text-blue-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-white">Mejora Continua</h4>
                    <p class="text-sm text-slate-500">Orientado a resultados y código de alta calidad.</p>
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
