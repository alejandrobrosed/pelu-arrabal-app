<script setup lang="ts">
import { useUiStore } from "../../stores/ui";
const ui = useUiStore();

function onMockLogin() {
  ui.notify("Login mock OK (luego lo conectamos al backend).", "success");
}
</script>

<template>
  <v-card width="420" class="pa-6">
    <h1 class="text-h5 font-weight-bold mb-4">Iniciar sesión</h1>
    <v-text-field label="Email" type="email" />
    <v-text-field label="Contraseña" type="password" />
    <v-btn color="primary" block class="mt-2" @click="onMockLogin">Entrar</v-btn>
  </v-card>
</template>
sssssssssss