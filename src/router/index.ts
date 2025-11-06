import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { start, done } from '@/utils/nprogress';
// 定义路由类型
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/components/HelloWorld.vue'),
		meta: {
			title: '首页',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/AboutPage.vue'), // 懒加载
		meta: {
			title: '关于我们',
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
