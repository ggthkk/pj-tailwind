import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Apidata from "../views/Api_data.vue";
import apicomponant from "../views/Api_componant";
import apicomputed from "../views/Api_computed";
import apimethods from "../views/Api_methods";
import apiwatch from "../views/Api_watch";
import apiprops from "../views/Api_props";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, 
  {
    path: "/data",
    name: "Apidata",
    component: Apidata,
  },
  {
    path: "/componant",
    name: "componant",
    component: apicomponant,
  },
  {
    path: "/computed",
    name: "computed",
    component: apicomputed,
  },
  {
    path: "/methods",
    name: "methods",
    component: apimethods,
  },
  {
    path: "/watch",
    name: "watch",
    component: apiwatch,
  },
  {
    path: "/props",
    name: "props",
    component: apiprops,
    
    meta: {
      msg: 'Hello Foo',
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
