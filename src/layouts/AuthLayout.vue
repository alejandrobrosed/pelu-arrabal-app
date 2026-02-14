<script setup lang="ts">
import AppSnackbar from "@/components/common/AppSnackbar.vue";
</script>

<template>
  <v-app>
    <v-main class="d-flex align-center justify-center pa-6">
      <router-view />
    </v-main>
    <AppSnackbar />
  </v-app>
</template>
