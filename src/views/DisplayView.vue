<template>
  <div class="pantalla">
    <div class="card">
      <h3 class="titulo">LLAMANDO</h3>

      <h1 class="numero">
        {{ turno.numero || '--' }}
      </h1>

      <p class="descripcion">
        {{ turno.descripcion || '' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase'

import { doc, onSnapshot } from 'firebase/firestore'

const turno = ref({})
let ultimaFecha = null

const sonido = () => {
  const audio = new Audio('/ding.mp3')

  audio.play().catch(() => {})
}

onMounted(() => {
  const referencia = doc(db, 'sistema', 'turno_actual')

  onSnapshot(referencia, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data()

      if (data.fecha !== ultimaFecha) {
        ultimaFecha = data.fecha
        sonido()
      }

      turno.value = data
    }
  })
})
</script>

<style scoped>
.pantalla {
  height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
}

.card {
  background: white;
  width: 700px;
  padding: 50px;
  border-radius: 25px;
  text-align: center;
}

.titulo {
  font-size: 35px;
  color: #64748b;
}

.numero {
  font-size: 180px;
  color: #2563eb;
  margin: 0;
}

.descripcion {
  font-size: 62px;
}
</style>
