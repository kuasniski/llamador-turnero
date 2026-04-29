<template>
  <div class="pantalla">
    <div class="card">
      <h1 class="titulo">Panel de Llamado</h1>

      <input
        type="number"
        ref="inputNumero"
        v-model="numero"
        class="input"
        placeholder="Número de turno"
      />

      <input v-model="descripcion" class="input" placeholder="Descripción / Caja" />

      <button class="boton" @click="llamar">LLAMAR</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { db } from '../firebase'

import { doc, setDoc } from 'firebase/firestore'

const numero = ref('')
const descripcion = ref('')
const inputNumero = ref(null)

const llamar = async () => {
  await setDoc(doc(db, 'sistema', 'turno_actual'), {
    numero: numero.value,
    descripcion: descripcion.value,
    fecha: Date.now(),
  })

  //numero.value = ''

  await nextTick()
  inputNumero.value.focus()
}

onMounted(() => {
  inputNumero.value.focus()
})
</script>

<style scoped>
.pantalla {
  height: 100vh;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  background: white;
  width: 420px;
  padding: 35px;
  border-radius: 25px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
}

.titulo {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #111827;
  font-family: Arial, Helvetica, sans-serif;
}

.input {
  width: 90%;
  padding: 18px;
  margin-bottom: 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 22px;
  outline: none;
}

.input:focus {
  border-color: #2563eb;
}

.boton {
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.boton:hover {
  background: #1d4ed8;
}

.boton:active {
  transform: scale(0.98);
}
</style>
