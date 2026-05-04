<script lang="ts" setup>
import Header from '../components/HeaderComponent.vue';
import { ArrowLeft,Code2,Cpu,Terminal,Zap } from 'lucide-vue-next';

const components=[
  'Lexer: Análisis léxico y tokenización',
  'Parser: Construcción del Árbol de Sintaxis Abstracta (AST)',
  'Evaluador: Entorno de ejecución y manejo de alcance',
  'REPL: Interfaz interactiva de línea de comandos',
];
</script>

<template>
  <div class="min-h-screen relative">
    <Header />

    <main class="relative z-10 pt-28 pb-20 px-4">
      <div class="max-w-5xl mx-auto space-y-12">
        <div class="space-y-6">
          <router-link
            to="/proyectos"
            class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a proyectos
          </router-link>
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
            Lenguaje de <span class="gradient-text">Programación Propio</span>
          </h1>
        </div>

        <div class="glass rounded-3xl overflow-hidden p-2">
          <div class="bg-gray-900 rounded-2xl p-8 mono text-green-400 overflow-x-auto shadow-2xl">
            <pre><code>// Ejemplo de sintaxis del lenguaje
A = 5
B = 3
PRINT "Resultado: ", A + B
IF A > B THEN PRINT "A es mayor"
END</code></pre>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Sobre el proyecto</h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                Este proyecto nace de la curiosidad por entender cómo funcionan realmente las herramientas que usamos a diario. Es la implementación de un lenguaje interpretado con una sintaxis familiar pero con reglas personalizadas.
              </p>
              <p class="text-slate-400 text-lg leading-relaxed">
                El motor está escrito íntegramente en typescript para maximizar el rendimiento de la evaluación de expresiones y el manejo de memoria durante el recorrido del AST.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Componentes del compilador</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="comp in components"
                  :key="comp"
                  class="flex gap-4 p-4 glass rounded-xl"
                >
                  <div class="bg-red-500/20 p-2 rounded-lg h-fit text-red-500">
                    <Zap
                      class="w-5 h-5"
                      v-if="comp.includes('Optimización')"
                    />
                    <Terminal
                      class="w-5 h-5"
                      v-else-if="comp.includes('REPL')"
                    />
                    <Cpu
                      class="w-5 h-5"
                      v-else
                    />
                  </div>
                  <span class="text-slate-300">{{ comp }}</span>
                </div>
              </div>
            </section>
          </div>

          <div class="space-y-6">
            <div class="glass rounded-2xl p-6 space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Tecnologías</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">C++ 20</span>
                  <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">CMake</span>
                  <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">Google Test</span>
                </div>
              </div>
              <div class="pt-6 border-t border-white/5 space-y-3">
                <button class="w-full glass text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Code2 class="w-4 h-4" />
                  Explorar Gramática
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #ff2d20 0%, #f05340 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.mono {
  font-family: "Fira Code", "Courier New", monospace;
}
</style>
