import { defineStore } from "pinia";

type SnackbarType = "success" | "info" | "warning" | "error";

export const useUiStore = defineStore("ui", {
  state: () => ({
    snackbar: { show: false, text: "", type: "info" as SnackbarType },
  }),
  actions: {
    notify(text: string, type: SnackbarType = "info") {
      this.snackbar = { show: true, text, type };
    },
    close() {
      this.snackbar.show = false;
    },
  },
});
