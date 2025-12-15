import { createRouter, createWebHistory } from 'vue-router';
import { start, done } from '@/utils/nprogress';
import type { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';

// 定义路由类型
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: MainLayout,
		redirect: '/animations' as RouteRecordRedirectOption,
		meta: {
			title: '根目录',
			sort: 0,
			hidden: true, // 隐藏根目录菜单
		},
		children: [
			{
				path: 'animations',
				name: 'Animations',
				component: () => import('@/views/animations/index.vue'),
				meta: {
					title: '动画效果',
					sort: 2,
					icon: 'icon-animation',
					keepAlive: true,
				},
				children: [
					{
						path: 'loading',
						name: 'AnimationsLoading',
						component: () => import('@/views/animations/loading/index.vue'),
						meta: {
							title: 'Loading 动画',
							sort: 1,
							icon: 'icon-loading',
							keepAlive: true,
							parentTitle: '动画效果',
						},
					},
				],
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/404/index.vue'),
		meta: {
			hidden: true, // 隐藏404菜单
		},
	},
];

// 创建路由实例
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

// 路由守卫类型定义
router.beforeEach((to, _, next) => {
	start();
	if (to.meta.title) {
		document.title = to.meta.title as string;
	}
	// 身份验证检查
	if (to.meta.requiresAuth) {
		const isAuthenticated = localStorage.getItem('token');
		if (!isAuthenticated) {
			next({ name: 'Home' });
			return;
		}
	}

	next();
});

router.afterEach(() => {
	done();
});

export default router;
