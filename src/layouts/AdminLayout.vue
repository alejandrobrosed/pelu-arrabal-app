<script setup lang="ts">
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminFooter from "@/components/admin/AdminFooter.vue";
import AppSnackbar from "@/components/common/AppSnackbar.vue";
</script>

<template>
  <v-app>
    <AdminHeader />
    <v-main class="py-6">
      <router-view />
    </v-main>
    <AdminFooter />
    <AppSnackbar />
  </v-app>
</template>
