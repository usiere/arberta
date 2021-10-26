import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Verify from "../views/Verify.vue";
import Supervise from "../views/Supervise.vue";
import Invest from "../views/Invest.vue";
import Advisory from "../views/Advisory.vue";
import Case1 from "../views/cases/case1.vue";
import Case2 from "../views/cases/case2.vue";
import Case3 from "../views/cases/case3.vue";
import Case4 from "../views/cases/case4.vue";
import Case5 from "../views/cases/case5.vue";
import Case6 from "../views/cases/case6.vue";
import Form1 from "../views/forms/verify-form.vue"
import Form2 from "../views/forms/manage-form.vue"
import Form3 from "../views/forms/advisory-form.vue"
import Form4 from "../views/forms/supervise-form.vue"
import Form5 from "../views/forms/contact-form.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/verify",
    name: "Verify",
    component: Verify,
  },

  {
    path: "/supervise",
    name: "Supervise",
    component: Supervise,
  },

  {
    path: "/invest",
    name: "Invest",
    component: Invest,
  },

  {
    path: "/advisory",
    name: "Advisory",
    component: Advisory,
  },

  {
    path: "/case1",
    name: " Case1",
    component: Case1,
  },

  {
    path: "/case2",
    name: " Case2",
    component: Case2,
  },

  {
    path: "/case3",
    name: " Case3",
    component: Case3,
  },

  {
    path: "/case4",
    name: " Case4",
    component: Case4,
  },

  {
    path: "/case5",
    name: " Case5",
    component: Case5,
  },

  {
    path: "/case6",
    name: " Case6",
    component: Case6,
  },


  {
    path: "/verify-form",
    name: " Form1",
    component: Form1,
  },

  {
    path: "/manage-form",
    name: " Form2",
    component: Form2,
  },

  {
    path: "/advisory-form",
    name: " Form3",
    component: Form3,
  },

  {
    path: "/supervise-form",
    name: " Form4",
    component: Form4,
  },

  {
    path: "/contact-form",
    name: " Form5",
    component: Form5,
  },

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
