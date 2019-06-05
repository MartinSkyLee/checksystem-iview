import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menus: [
            {
                'menuId': '1',
                'name': '人员信息',
                'subMenus': []
            },
            {
                'menuId': '2',
                'name': '统计分析',
                'subMenus': [
                    {
                        'menuId': '2-1',
                        'name': '最新情况',
                        'menuUrl': ''
                    },
                    {
                        'menuId': '2-2',
                        'name': '进退统计',
                        'menuUrl': ''
                    }
                ]
            },
            {
                'menuId': '3',
                'name': '系统管理',
                'subMenus': [
                    {
                        'menuId': '3-1',
                        'name': '公司管理',
                        'menuUrl': ''
                    },
                    {
                        'menuId': '3-2',
                        'name': '工种管理',
                        'menuUrl': ''
                    },
                    {
                        'menuId': '3-3',
                        'name': '打卡点管理',
                        'menuUrl': ''
                    },
                    {
                        'menuId': '3-4',
                        'name': '工区管理',
                        'menuUrl': ''
                    }
                ]
            }
        ]
    }
});