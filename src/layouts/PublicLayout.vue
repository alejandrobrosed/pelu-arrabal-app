<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
import AppSnackbar from "@/components/common/AppSnackbar.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main class="py-6">
      <router-view />
    </v-main>
    <AppFooter />
    <AppSnackbar />
  </v-app>
</template>
