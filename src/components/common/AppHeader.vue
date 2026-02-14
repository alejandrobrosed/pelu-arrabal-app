<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const items = [
  { title: "Inicio", to: "/" },
  { title: "Login", to: "/auth/login" },
  { title: "Admin", to: "/admin" },
];
</script>

<template>
  <v-app-bar flat>
    <v-container class="d-flex align-center">
      <v-app-bar-title class="font-weight-bold">La Pelu del Arrabal</v-app-bar-title>
      <v-spacer />
      <v-btn
        v-for="it in items"
        :key="it.to"
        :to="it.to"
        variant="text"
        :color="route.path === it.to ? 'primary' : undefined"
      >
        {{ it.title }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
