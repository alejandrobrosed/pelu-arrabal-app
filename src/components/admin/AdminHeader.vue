<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const items = [
  { title: "Dashboard", to: "/admin" },
  { title: "Clientes", to: "/admin/clients" },
  { title: "Citas", to: "/admin/appointments" },
];
</script>

<template>
  <v-app-bar color="primary">
    <v-container class="d-flex align-center">
      <v-app-bar-title class="text-white font-weight-bold">
        Admin · La Pelu
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        v-for="it in items"
        :key="it.to"
        :to="it.to"
        variant="text"
        class="text-white"
        :style="{ textDecoration: route.path === it.to ? 'underline' : 'none' }"
      >
        {{ it.title }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
