import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";
import AuthView from "@/views/AuthView.vue";
import SettingsView from "@/views/SettingsView.vue";
import Access from "@/components/settings/Access.vue";
import Billing from "@/components/settings/Billing.vue";
import Domains from "@/components/settings/Domains.vue";
import Statistics from "@/components/settings/Statistics.vue";
import NewProjectView from "@/views/ NewProjectView.vue";
import NewProject1 from "@/components/new-project/NewProject1.vue";
import NewProject2 from "@/components/new-project/NewProject2.vue";
import NewProject3 from "@/components/new-project/NewProject3.vue";
import TariffsView from "@/views/TariffsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import Profile1 from "@/components/profile/Profile1.vue";
import Profile2 from "@/components/profile/Profile2.vue";
import Profile3 from "@/components/profile/Profile3.vue";
import OrderView from "@/views/OrderView.vue";
import ChatView from "@/views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active here",
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/',
      name: 'home',
      component: DashboardView
    },
    {
      path: '/new-project',
      name: 'newProject',
      component: NewProjectView,

      children: [
        {
          path: '/new-project/1',
          name: 'newProject-1',
          component: NewProject1,
        },
        {
          path: '/new-project/2',
          name: 'newProject-2',
          component: NewProject2,
        },
        {
          path: '/new-project/3',
          name: 'newProject-3',
          component: NewProject3,
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,

      children: [
        {
          path: '/settings/access',
          name: 'access',
          component: Access,
        },
        {
          path: '/settings/billing',
          name: 'billing',
          component: Billing,
        },
        {
          path: '/settings/domains',
          name: 'domains',
          component: Domains,
        },
        {
          path: '/settings/statistics',
          name: 'statistics',
          component: Statistics,
        }
      ]
    },
    {
      path: '/tariffs',
      name: 'tariffs',
      component: TariffsView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      children: [
        {
          path: '/profile/1',
          name: 'profile-1',
          component: Profile1,
        },
        {
          path: '/profile/2',
          name: 'profile-2',
          component: Profile2,
        },
        {
          path: '/profile/3',
          name: 'profile-3',
          component: Profile3,
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
  ]
})

export default router
