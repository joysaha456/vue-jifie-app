import { createRouter, createWebHistory } from 'vue-router'
import Error404 from '../views/Error404.vue'
import Home from '../views/Home.vue'
import cashBalanceDetails from '../views/cashBalanceDetails.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Reset from '../views/Reset.vue'
import MyOffer from '../views/MyOffer.vue'
import ResetSuccess from '../views/ResetSuccess.vue'
import MyScore from '../views/MyScore.vue'
import RepaymentCalculate from '../views/RepaymentCalculate'
import Forecasts from '../views/Forecasts'
import Application from '../views/Application'
import CreateNewApplication from '../views/CreateNewApplication'
import Payments from '../views/Payments'
import Budget from '../views/Budget'
import Settings from '../views/Settings'
import getPaid from '../views/getPaid.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/cash-balance-details', name: 'cash-balance-details', component: cashBalanceDetails },
  { path: '/sign-in', name: 'sign-in', component: SignIn },
  { path: '/sign-up', name: 'sign-up', component: SignUp },
  { path: '/reset', name: 'reset', component: Reset },
  { path: '/reset-success', name: 'reset-success', component: ResetSuccess },
  { path: '/my-offer', name: 'my-offer', component: MyOffer },
  { path: '/my-score', name: 'my-score', component: MyScore },
  { path: '/repayment-calculator', name: 'repayment-calculator', component: RepaymentCalculate },
  { path: '/forecasts', name: 'forecasts', component: Forecasts },
  { path: '/application', name: 'application', component: Application },
  { path: '/create-new-application', name: 'create-new-application', component: CreateNewApplication },
  { path: '/payments', name: 'payments', component: Payments },
  { path: '/budget', name: 'budget', component: Budget },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/get-paid', name: 'get-paid', component: getPaid },
  { path: '/:catchAll(.*)',  name: 'Error404', component: Error404},
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/jifie/'),
  linkExactActiveClass: 'is-active',
  routes
});

export default router
