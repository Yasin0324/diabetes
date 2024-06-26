import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/Home",
        name: "Home",
        component: () => import("../views/index.vue"),
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("../views/Home/index.vue"),
            },
            {
                path:"feed_back",
                name:"feed_back",
                component:() => import("../views/Home/feed_back.vue")
            },
            {
                path: "health",
                name: "health",
                redirect: "/health/blood",
                component: () => import("../views/HealthRecord/index.vue"),
                children: [
                    {
                        path: "blood",
                        name: "blood",
                        component: () =>
                            import(
                                "../views/HealthRecord/bloodRecord/index.vue"
                            ),
                    },
                    {
                        path: "diet",
                        name: "diet",
                        component: () =>
                            import(
                                "../views/HealthRecord/dietRecord/index.vue"
                            ),
                    },
                    {
                        path: "medicine",
                        name: "medicine",
                        component: () =>
                            import(
                                "../views/HealthRecord/medicineRecord/index.vue"
                            ),
                    },
                    {
                        path: "sports",
                        name: "sports",
                        component: () =>
                            import(
                                "../views/HealthRecord/sportsRecord/index.vue"
                            ),
                    },
                ],
            },
            {
                path: "tool",
                name: "tool",
                component: () => import("../views/Tool/index.vue"),
            },
            {
                path: "articles",
                name: "articles",
                component: () => import("../views/Articles/index.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () => import("../views/about/index.vue"),
            },
            // 动态路由，根据用户id显示不同的用户主页
            {
                path: "user/:id",
                name: "user",
                component: () => import("../views/User/index.vue"),
            },
            {
                path: "editpaddMobile",
                name: "editpaddMobile",
                component: () => import("../views/User/editpassMobile.vue"),
            },
            {
                path: "Addassociated",
                name: "Addassociated",
                component: () => import("../views/User/Addassociated.vue")
            }
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
