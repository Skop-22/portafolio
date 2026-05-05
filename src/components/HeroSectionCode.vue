<script lang="ts" setup>
import { Code2, Box, Layout, Database, Server, User } from 'lucide-vue-next';
</script>

<template>
  <div class="hidden lg:block relative">
    <div class="relative z-10 p-8 glass rounded-3xl border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
      <div class="mono text-[13px] space-y-2 group cursor-default">
        <div class="flex items-center gap-2">
          <span class="text-red-400 italic">class</span> <span class="text-yellow-300 font-bold">HabilidadesYTecnologias</span> {
        </div>

        <div class="pl-4 space-y-2">
          <div>
            <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
              <Code2 class="w-3 h-3" /> // Lenguajes de programación
            </div>
            <span class="text-purple-400">public</span> <span class="text-blue-300">$lenguajes</span> = [
            <span class="text-green-300">'PHP 8.4'</span>, <span class="text-green-300">'JavaScript'</span>, 
            <span class="text-green-300">'TypeScript'</span>, <span class="text-green-300">'Python'</span>, 
            <span class="text-green-300">'Bash'</span>
            ];
          </div>

          <div>
            <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
              <Box class="w-3 h-3" /> // Marcos de trabajo
            </div>
            <span class="text-purple-400">public</span> <span class="text-blue-300">$frameworks</span> = [
            <span class="text-green-300">'Laravel 12'</span>, <span class="text-green-300">'Vue 3'</span>, 
            <span class="text-green-300">'Bootstrap'</span>, <span class="text-green-300">'TailwindCSS'</span>
            ];
          </div>

          <div>
            <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
              <Layout class="w-3 h-3" /> // Interfaz de usuario
            </div>
            <span class="text-purple-400">public</span> <span class="text-blue-300">$frontend</span> = [
            <span class="text-green-300">'HTML5'</span>, <span class="text-green-300">'CSS3'</span>
            ];
          </div>

          <div>
            <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
              <Database class="w-3 h-3" /> // Almacenamiento de datos
            </div>
            <span class="text-purple-400">public</span> <span class="text-blue-300">$basesDeDatos</span> = [
            <span class="text-green-300">'SQL'</span>, <span class="text-green-300">'MySQL'</span>
            ];
          </div>

          <div>
            <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
              <Server class="w-3 h-3" /> // Sistemas y redes
            </div>
            <span class="text-purple-400">public</span> <span class="text-blue-300">$infraestructura</span> = [
            <span class="text-green-300">'Linux'</span>, <span class="text-green-300">'MikroTik'</span>
            ];
          </div>
        </div>

        <div class="pl-4 pt-2">
          <div class="flex items-center gap-2 text-slate-500 text-[11px] italic mb-1">
            <User class="w-3 h-3" /> // Perfil profesional
          </div>
          <span class="text-purple-400">public function</span> <span class="text-green-400 font-bold">obtenerPerfil()</span> {
          <div class="pl-4 text-slate-400 italic">
            return "Listo para construir el futuro.";
          </div>
          }
        </div>

        <div class="text-white/80">}</div>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/20 blur-[100px] -z-10"></div>
  </div>
</template>
