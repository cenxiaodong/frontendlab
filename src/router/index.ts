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
		redirect: '/dashboard' as RouteRecordRedirectOption,
		meta: {
			title: '根目录',
			sort: 0,
			hidden: true, // 隐藏根目录菜单
		},
		children: [
			// 1. 仪表盘（总览）
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/Dashboard.vue'),
				meta: {
					title: '实验室总览',
					icon: 'HomeFilled',
					sort: 1,
				},
			},

			// 2. 视觉效果类（包含 Loading 效果）
			{
				path: 'visual',
				name: 'VisualEffect',
				component: () => import('@/views/visual/VisualIndex.vue'),
				meta: {
					title: '视觉效果',
					icon: 'Palette',
					sort: 2,
				},
				children: [
					{
						path: 'animation',
						name: 'Animation',
						component: () => import('@/views/visual/animation/AnimationList.vue'),
						meta: {
							title: '动画效果',
							sort: 1,
						},
						children: [
							// Loading 效果（三级子路由）
							{
								path: 'loading',
								name: 'LoadingAnimation',
								component: () => import('@/views/visual/animation/loading/LoadingList.vue'),
								meta: {
									title: '加载动画（Loading）',
									sort: 1,
									tags: ['加载状态', 'UI 美化', '通用组件', 'CSS 动画'],
								},
							},
							// 其他动画子分类
							{
								path: 'basic',
								name: 'BasicAnimation',
								component: () => import('@/views/visual/animation/basic/BasicList.vue'),
								meta: {
									title: '基础动画',
									sort: 2,
									tags: ['淡入淡出', '平移', '缩放'],
								},
							},
							{
								path: 'text',
								name: 'TextAnimation',
								component: () => import('@/views/visual/animation/text/TextList.vue'),
								meta: {
									title: '文本动画',
									sort: 3,
									tags: ['文字特效', '渐变文字'],
								},
							},
						],
					},
					// 其他视觉效果子分类
					{
						path: 'transition',
						name: 'Transition',
						component: () => import('@/views/visual/transition/TransitionList.vue'),
						meta: {
							title: '过渡效果',
							sort: 2,
							tags: ['页面过渡', '组件过渡'],
						},
					},
					{
						path: 'gradient',
						name: 'Gradient',
						component: () => import('@/views/visual/gradient/GradientList.vue'),
						meta: {
							title: '渐变/光影',
							sort: 3,
							tags: ['颜色渐变', '阴影效果', '玻璃拟态'],
						},
					},
					{
						path: '3d',
						name: '3DEffect',
						component: () => import('@/views/visual/3d/3DEffectList.vue'),
						meta: {
							title: '3D 效果',
							sort: 4,
							tags: ['3D 旋转', '透视效果'],
						},
					},
					{
						path: 'particle',
						name: 'Particle',
						component: () => import('@/views/visual/particle/ParticleList.vue'),
						meta: {
							title: '粒子效果',
							sort: 5,
							tags: ['粒子雨', '爆炸效果'],
						},
					},
				],
			},

			// 3. 功能组件类
			{
				path: 'feature',
				name: 'FeatureComponent',
				component: () => import('@/views/feature/FeatureIndex.vue'),
				meta: {
					title: '功能组件',
					icon: 'Cubes',
					sort: 3,
				},
				children: [
					{
						path: 'form',
						name: 'FormComponent',
						component: () => import('@/views/feature/form/FormList.vue'),
						meta: {
							title: '表单相关',
							sort: 1,
							tags: ['输入框', '选择器', '校验'],
						},
					},
					{
						path: 'table',
						name: 'TableComponent',
						component: () => import('@/views/feature/table/TableList.vue'),
						meta: { title: '表格相关', sort: 2, tags: ['分页', '排序', '筛选'] },
					},
					{
						path: 'navigation',
						name: 'Navigation',
						component: () => import('@/views/feature/navigation/NavigationList.vue'),
						meta: {
							title: '导航组件',
							sort: 3,
							tags: ['菜单', '面包屑', '分页导航'],
						},
					},
					{
						path: 'modal',
						name: 'Modal',
						component: () => import('@/views/feature/modal/ModalList.vue'),
						meta: { title: '弹窗/抽屉', sort: 4, tags: ['对话框', '抽屉', '通知'] },
					},
					{
						path: 'media',
						name: 'Media',
						component: () => import('@/views/feature/media/MediaList.vue'),
						meta: { title: '媒体处理', sort: 5, tags: ['图片预览', '视频播放'] },
					},
					{
						path: 'utils',
						name: 'Utils',
						component: () => import('@/views/feature/utils/UtilsList.vue'),
						meta: { title: '工具函数', sort: 6, tags: ['格式化', '存储', '请求'] },
					},
				],
			},

			// 4. 交互体验类
			{
				path: 'interaction',
				name: 'Interaction',
				component: () => import('@/views/interaction/InteractionIndex.vue'),
				meta: {
					title: '交互体验',
					icon: 'HandPointer',
					sort: 4,
				},
				children: [
					{
						path: 'drag-drop',
						name: 'DragDrop',
						component: () => import('@/views/interaction/drag-drop/DragDropList.vue'),
						meta: { title: '拖拽功能', sort: 1, tags: ['元素拖拽', '文件拖拽'] },
					},
					{
						path: 'scroll',
						name: 'ScrollEffect',
						component: () => import('@/views/interaction/scroll/ScrollList.vue'),
						meta: { title: '滚动效果', sort: 2, tags: ['滚动动画', '无限滚动'] },
					},
					{
						path: 'gesture',
						name: 'Gesture',
						component: () => import('@/views/interaction/gesture/GestureList.vue'),
						meta: { title: '手势操作', sort: 3, tags: ['滑动', '缩放', '旋转'] },
					},
					{
						path: 'keyboard',
						name: 'Keyboard',
						component: () => import('@/views/interaction/keyboard/KeyboardList.vue'),
						meta: { title: '键盘操作', sort: 4, tags: ['快捷键', '键盘导航'] },
					},
				],
			},

			// 5. 完整案例
			{
				path: 'case',
				name: 'CompleteCase',
				component: () => import('@/views/case/CaseIndex.vue'),
				meta: {
					title: '完整案例',
					icon: 'Briefcase',
					sort: 5,
				},
				children: [
					{
						path: 'ui-demo',
						name: 'UIDemo',
						component: () => import('@/views/case/ui-demo/UIDemoList.vue'),
						meta: { title: 'UI 展示案例', sort: 1 },
					},
					{
						path: 'business-demo',
						name: 'BusinessDemo',
						component: () => import('@/views/case/business-demo/BusinessDemoList.vue'),
						meta: { title: '业务场景案例', sort: 2 },
					},
					{
						path: 'creative',
						name: 'CreativeDemo',
						component: () => import('@/views/case/creative/CreativeList.vue'),
						meta: { title: '创意玩法案例', sort: 3 },
					},
				],
			},

			// 6. 自定义分类
			{
				path: 'custom',
				name: 'CustomCategory',
				component: () => import('@/views/custom/CustomIndex.vue'),
				meta: {
					title: '自定义分类',
					icon: 'PlusSquare',
					sort: 99,
				},
				children: [
					// 示例：新增「面试常用效果」子分类
					{
						path: 'interview',
						name: 'InterviewEffect',
						component: () => import('@/views/custom/interview/InterviewList.vue'),
						meta: {
							title: '面试常用效果',
							sort: 1,
							tags: ['面试', '高频', '基础'],
						},
					},
				],
			},
		],
	},
	// 404 页面
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	name: 'NotFound',
	// 	component: () => import('@/views/NotFound.vue'),
	// 	meta: {
	// 		title: '页面未找到',
	// 		sort: 999,
	// 		hidden: true,
	// 	},
	// },
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
