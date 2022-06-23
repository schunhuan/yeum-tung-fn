import Vue from "vue";
import Router from "vue-router";
import transactionList from "./components/transactionList.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "transactionList",
      component: transactionList
    }
  ]
});
