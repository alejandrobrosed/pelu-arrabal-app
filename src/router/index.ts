import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import PublicLayout from "@/layouts/PublicLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

import HomeView from "@/views/public/HomeView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import AdminDashboardView from "@/views/admin/AdminDashboardView.vue";
import ClientsView from "@/views/admin/ClientsView.vue";
import AppointmentsView from "@/views/admin/AppointmentsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: PublicLayout,
    children: [{ path: "", name: "home", component: HomeView }],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [{ path: "login", name: "login", component: LoginView }],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", name: "admin", component: AdminDashboardView },
      { path: "clients", name: "clients", component: ClientsView },
      { path: "appointments", name: "appointments", component: AppointmentsView },
    ],
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
