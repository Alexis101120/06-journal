export default {

    name : 'dayBook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children :[
        
    ]
}