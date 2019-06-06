import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menus: [
            {
                'menuId': '1',
                'name': '基础信息管理',
                'subMenus': [
                    {
                        'menuId': '1-1',
                        'name': '人员管理',
                        'menuUrl': '/'
                    },
                    {
                        'menuId': '1-2',
                        'name': '公司管理',
                        'menuUrl': '/companyManage'
                    },
                    // {
                    //     'menuId': '1-3',
                    //     'name': '工种管理',
                    //     'menuUrl': ''
                    // },
                    // {
                    //     'menuId': '1-4',
                    //     'name': '打卡点管理',
                    //     'menuUrl': ''
                    // },
                    // {
                    //     'menuId': '1-5',
                    //     'name': '工区管理',
                    //     'menuUrl': ''
                    // }
                ]
            },
            {
                'menuId': '2',
                'name': '统计分析',
                'subMenus': [
                    {
                        'menuId': '2-1',
                        'name': '最新情况',
                        'menuUrl': '/statistic'
                    },
                    {
                        'menuId': '2-2',
                        'name': '进退统计',
                        'menuUrl': '/checkHistory'
                    }
                ]
            }
        ]
    }
});