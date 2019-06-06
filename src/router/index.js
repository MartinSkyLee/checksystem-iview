import Vue from 'vue'
import Router from 'vue-router'
import WorkerManage from '@/components/WorkerManage'
import Statistic from '@/components/Statistic'
import CheckHistory from '@/components/CheckHistory'
import CompanyManage from '@/components/CompanyManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WorkerManage
    },
    {
      path: '/statistic',
      component: Statistic
    },
    {
      path: '/checkHistory',
      component: CheckHistory
    },
    {
      path: '/companyManage',
      component: CompanyManage
    }
  ]
})
