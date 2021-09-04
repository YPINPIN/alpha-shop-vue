import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Purchase from '../views/Purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/purchase',
  },
  {
    path: '/purchase',
    name: 'purchase',
    redirect: '/purchase/address',
    component: Purchase,
    children: [
      {
        path: 'address',
        name: 'purchase-address',
        components: { address: () => import('../views/PurchaseAddress.vue') }
      },
      {
        path: 'delivery',
        name: 'purchase-delivery',
        components: { delivery: () => import('../views/PurchaseDelivery.vue') }
      },
      {
        path: 'payment',
        name: 'purchase-payment',
        components: { payment: () => import('../views/PurchasePayment.vue') }
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
