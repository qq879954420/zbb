import Vue from 'vue'
import Router from 'vue-router'
import AccountOpening from '@/components/accountOpening/accountOpening'
import Electronicaccount from '@/components/electronicaccount/electronicaccount'
import Mine from '@/components/mine/mine'
import bankProduct from '@/components/product/bankProduct'
import bankProductDet from '@/components/product/bankProductDet'
import Withdraw from '@/components/electronicaccount/withdraw'
import AccountList from '@/components/electronicaccount/accountList'
import BindCard from '@/components/electronicaccount/bindCard'
import TradingDetails from '@/components/electronicaccount/tradingDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accountOpening',
      name: 'AccountOpening',
      component: AccountOpening
    },
    {
      path: '/electronicaccount',
      name: 'Electronicaccount',
      component: Electronicaccount,
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/accountList',
      name: 'AccountList',
      component: AccountList
    },
    {
      path: '/bindCard',
      name: 'BindCard',
      component: BindCard
    },
    {
      path: '/tradingDetails',
      name: 'TradingDetails',
      component: TradingDetails
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/bankProduct',
      name: 'bankProduct',
      component: bankProduct
    },
    {
      path: '/bankProductDet',
      name: 'bankProductDet',
      component: bankProductDet
    },
  ]
})
