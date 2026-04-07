<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import Header from '../components/HeaderComponent.vue'
import { animate,stagger } from 'animejs'
import { Award,Calendar,ExternalLink,FileText,Medal,Star,Download,Eye,Maximize2,X } from 'lucide-vue-next'

// Tus importaciones exactas
import front_end from '../assets/sertificados/143304d7-33a9-4732-a210-d633438e874d_certificado.pdf'
import logica_programacion from '../assets/sertificados/75a19bc3-8bc2-4869-b363-2d550ed33edc_certificado.pdf'
import introduccion from '../assets/sertificados/8e1c9c2c-3a58-4818-8903-dc43c6a809a8_certificado.pdf'
import salud_digital from '../assets/sertificados/a2b4b846-42ab-4295-b0bd-167b73561201_certificado.pdf'
import finder from '../assets/sertificados/aaef72be-04d6-49fe-ac9e-9264baaff46f_certificado.pdf'
import administrador_servidores from '../assets/sertificados/c47713e7-6b23-43de-a203-d5e092efa29d_certificado.pdf'
import trabajo_en_equipo from '../assets/sertificados/f4cae005-0e6b-49be-827e-3dc70eb57d44_certificado.pdf';
import curador_datos from '../assets/sertificados/ffca408f-4362-41c1-a91b-4589b0d17643_certificado.pdf';

const title=ref<HTMLElement|null>(null)
const subtitle=ref<HTMLElement|null>(null)
const certificates=ref<HTMLElement[]>([])
const stats=ref<HTMLElement[]>([])
const selectedPdf=ref<string|null>(null)
const showModal=ref(false)

onMounted(() => {
  animate(title.value!,{
    y: [30,0],
    opacity: [0,1],
    duration: 800,
    ease: 'outExpo'
  })

  animate(subtitle.value!,{
    y: [20,0],
    opacity: [0,1],
    delay: 200,
    duration: 700,
    ease: 'outExpo'
  })

  animate(certificates.value,{
    y: [50,0],
    opacity: [0,1],
    scale: [0.95,1],
    delay: stagger(100,{ start: 400 }),
    duration: 600,
    ease: 'outExpo'
  })

  animate(stats.value,{
    y: [30,0],
    opacity: [0,1],
    delay: stagger(80,{ start: 800 }),
    duration: 500,
    ease: 'outExpo'
  })
})

const openPDF=(pdfPath: string) => {
  window.open(pdfPath,'_blank')
}

const downloadPDF=async (pdfPath: string,fileName: string) => {
  try {
    const response=await fetch(pdfPath)
    const blob=await response.blob()
    const url=window.URL.createObjectURL(blob)
    const link=document.createElement('a')
    link.href=url
    link.download=fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch(error) {
    console.error('Error downloading PDF:',error)
  }
}

const openModal=(pdfPath: string) => {
  selectedPdf.value=pdfPath
  showModal.value=true
}

const closeModal=() => {
  showModal.value=false
  selectedPdf.value=null
}

const certificatesData=[
  {
    id: 1,
    title: 'Desarrollador Front-end',
    issuer: 'Capacítate para el empleo',
    date: '2022',
    credentialId: '143304D7-33A9-4732-A210-D633438E874D',
    pdfPath: front_end,
    skills: ['HTML','CSS','Javascript'],
    featured: true,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 2,
    title: 'Lógica de programación',
    issuer: 'Capacítate para el empleo',
    date: '2019',
    credentialId: '75A19BC3-8BC2-4869-B363-2D550ED33EDC',
    pdfPath: logica_programacion,
    skills: ['C++','C'],
    featured: true,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 3,
    title: 'Introducción a la programación',
    issuer: 'Capacítate para el empleo',
    date: '2019',
    credentialId: '8E1C9C2C-3A58-4818-8903-DC43C6A809A8',
    pdfPath: introduccion,
    skills: [],
    featured: false,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 4,
    title: 'Salud Digital',
    issuer: 'Capacítate para el empleo',
    date: '2019',
    credentialId: 'A2B4B846-42AB-4295-B0BD-167B73561201',
    pdfPath: salud_digital,
    skills: [],
    featured: false,
    fileSize: '2.2 MB',
    pages: 1
  },
  {
    id: 5,
    title: 'Finder',
    issuer: 'Capacítate para el empleo',
    date: '2019',
    credentialId: 'AAEF72BE-04D6-49FE-AC9E-9264BAAFF46F',
    pdfPath: finder,
    skills: [],
    featured: false,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 6,
    title: 'Administrador de servidores',
    issuer: 'Capacítate para el empleo',
    date: '2023',
    credentialId: 'C47713E7-6B23-43DE-A203-D5E092EFA29D',
    pdfPath: administrador_servidores,
    skills: ['linux','Apache'],
    featured: true,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 7,
    title: 'Trabajo en equipo',
    issuer: 'Capacítate para el empleo',
    date: '2021',
    credentialId: 'F4CAE005-0E6B-49BE-827E-3DC70EB57D44',
    pdfPath: trabajo_en_equipo,
    fileSize: '2.0 MB',
    pages: 1
  },
  {
    id: 7,
    title: 'Curador de datos',
    issuer: 'Capacítate para el empleo',
    date: '2020',
    credentialId: 'FFCA408F-4362-41C1-A91B-4589B0D17643',
    pdfPath: curador_datos,
    fileSize: '2.0 MB',
    pages: 1
  }
]

const statsData=[
  { icon: Award,label: 'Certificaciones',value: '6' },
  { icon: Medal,label: 'Insignias',value: '3' },
  { icon: FileText,label: 'Cursos Completados',value: '6' },
  { icon: Star,label: 'Años de estudio',value: '8' }
]

const getPdfUrl=(pdfPath: string) => {
  return `${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1`
}
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <div class="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0"></div>
    <div class="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/5 blur-[150px] rounded-full z-0"></div>

    <Header />

    <main class="relative z-10 pt-20">
      <section
        id="certificates"
        class="py-20 px-4"
      >
        <div class="max-w-7xl mx-auto">
          <!-- Encabezado -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 text-purple-500 font-bold tracking-widest uppercase text-sm mb-4">
              <Award class="w-4 h-4" />
              Mi Trayectoria de Aprendizaje
            </div>

            <h2
              ref="title"
              class="text-5xl font-bold text-white mb-6"
            >
              Certificaciones
            </h2>

            <p
              ref="subtitle"
              class="text-slate-400 text-xl max-w-3xl mx-auto"
            >
              Formación continua y certificaciones que avalan mis conocimientos en desarrollo de software y tecnologías modernas.
            </p>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div
              v-for="(stat, index) in statsData"
              :key="index"
              ref="el => stats.push(el!)"
              class="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <component
                :is="stat.icon"
                class="w-8 h-8 mx-auto mb-3 text-purple-400"
              />
              <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-slate-500">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Grid de Certificados -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="cert in certificatesData"
              :key="cert.id"
              ref="el => certificates.push(el!)"
              class="group relative"
            >
              <div class="glass rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 h-full flex flex-col">

                <div
                  v-if="cert.featured"
                  class="absolute top-4 right-4 z-10"
                >
                  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star class="w-3 h-3" />
                    Destacado
                  </div>
                </div>

                <div class="absolute top-4 left-4 z-10">
                  <div class="bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                    <FileText class="w-3 h-3" />
                    PDF · {{ cert.pages }} {{ cert.pages === 1 ? 'página' : 'páginas' }}
                  </div>
                </div>

                <!-- Vista previa del PDF con object (más estable que iframe) -->
                <div class="relative h-64 overflow-hidden bg-gray-900">
                  <object
                    :data="getPdfUrl(cert.pdfPath)"
                    type="application/pdf"
                    class="w-full h-full pointer-events-none"
                  >
                    <!-- Fallback si no se puede cargar el PDF -->
                    <div class="flex flex-col items-center justify-center h-full bg-gray-800">
                      <FileText class="w-12 h-12 text-purple-400 mb-2" />
                      <p class="text-sm text-slate-400">Vista previa del PDF</p>
                    </div>
                  </object>

                  <!-- Overlay con acciones -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-3">
                    <button
                      @click="openPDF(cert.pdfPath)"
                      class="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                      title="Abrir en nueva pestaña"
                    >
                      <Eye class="w-5 h-5 text-white" />
                    </button>
                    <button
                      @click="openModal(cert.pdfPath)"
                      class="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                      title="Vista previa completa"
                    >
                      <Maximize2 class="w-5 h-5 text-white" />
                    </button>
                    <button
                      @click="downloadPDF(cert.pdfPath, `${cert.title}.pdf`)"
                      class="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                      title="Descargar PDF"
                    >
                      <Download class="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <!-- Contenido -->
                <div class="p-6 flex-1 flex flex-col">
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-sm text-purple-400 font-medium">{{ cert.issuer }}</span>
                    <div class="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar class="w-3 h-3" />
                      {{ cert.date }}
                    </div>
                  </div>

                  <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
                    {{ cert.title }}
                  </h3>

                  <!-- Skills (solo mostrar si hay skills) -->
                  <div
                    v-if="cert.skills && cert.skills.length > 0"
                    class="flex flex-wrap gap-2 mb-4"
                  >
                    <span
                      v-for="skill in cert.skills"
                      :key="skill"
                      class="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {{ skill }}
                    </span>
                  </div>

                  <!-- Credential ID y tamaño del archivo -->
                  <div class="mt-auto pt-4 border-t border-white/10">
                    <div class="flex justify-between items-center">
                      <p
                        class="text-xs text-slate-500 font-mono truncate max-w-[150px]"
                        :title="cert.credentialId"
                      >
                        {{ cert.credentialId }}
                      </p>
                      <span class="text-xs text-slate-500">{{ cert.fileSize }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal para vista previa completa -->
          <Teleport to="body">
            <div
              v-if="showModal"
              class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              @click="closeModal"
            >
              <div
                class="relative w-full max-w-6xl h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
                @click.stop
              >
                <button
                  @click="closeModal"
                  class="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <X class="w-6 h-6 text-white" />
                </button>

                <object
                  v-if="selectedPdf"
                  :data="selectedPdf"
                  type="application/pdf"
                  class="w-full h-full"
                >
                  <div class="flex flex-col items-center justify-center h-full">
                    <p class="text-slate-400">No se pudo cargar el PDF</p>
                    <button
                      @click="openPDF(selectedPdf)"
                      class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
                    >
                      Abrir en nueva pestaña
                    </button>
                  </div>
                </object>
              </div>
            </div>
          </Teleport>
        </div>
      </section>
    </main>
  </div>
</template>
