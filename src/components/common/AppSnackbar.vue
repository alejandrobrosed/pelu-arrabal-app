<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUiStore } from "@/stores/ui";

const ui = useUiStore();
const { snackbar } = storeToRefs(ui);

const colorMap: Record<string, string> = {
  success: "green",
  info: "blue",
  warning: "orange",
  error: "red",
};
</script>

<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="colorMap[snackbar.type]"
    timeout="2500"
  >
    {{ snackbar.text }}
  </v-snackbar>
</template>
