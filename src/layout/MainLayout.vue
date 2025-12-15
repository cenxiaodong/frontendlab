<template>
	<a-layout class="lab-main-layout">
		<div class="layout-sider-placeholder"></div>
		<a-layout-sider
			v-model:collapsed="collapsed"
			:trigger="null"
			collapsible
			width="210"
			class="layout-sideBar-fixed"
		>
			<div class="logo" />
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<a-menu-item key="1">
					<user-outlined />
					<span>nav 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<video-camera-outlined />
					<span>nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<upload-outlined />
					<span>nav 3</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout class="lab-default-layout-main">
			<div style="height: 80px; border: 1px solid red"></div>
			<div class="layout-header-fixed">
				<a-layout-header class="lab-layout-header">
					<menu-unfold-outlined
						v-if="collapsed"
						class="trigger"
						@click="() => (collapsed = !collapsed)"
					/>
					<menu-fold-outlined
						v-else
						class="trigger"
						@click="() => (collapsed = !collapsed)"
					/>
				</a-layout-header>
				<div class="lab-multiple-tabs vben-multiple-tabs--hide-close"></div>
			</div>

			<a-layout-content class="lab-content-layout">
				<div>
					<div style="height: 1000px">3333</div>
					<div style="height: 2000px">3333</div>
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
	<!--<div class="main-layout">
		<a-date-picker v-model:value="value1" />
		<a-button type="primary">Primary Button</a-button>
		<a-button>Default Button</a-button>
		<a-button type="dashed">Dashed Button</a-button>
		<a-button type="text">Text Button</a-button>
		<a-button type="link">Link Button</a-button>
		<!~~ <aside></aside> ~~>
		<!~~<!~~ 侧边栏 ~~>
		<aside class="sidebar" :class="{ collapsed: isCollapsed }">
			<!~~ 侧边栏头部（实验室名称 + 折叠按钮） ~~>
			<div class="sidebar-header">
				<h1 v-if="!isCollapsed" class="lab-title">前端实验室</h1>
				<el-icon @click="isCollapsed = !isCollapsed" class="collapse-btn">
					<ArrowLeft v-if="!isCollapsed" />
					<ArrowRight v-else />
				</el-icon>
			</div>

			<!~~ 侧边栏菜单（基于路由自动渲染） ~~>
			<el-menu
				default-active="$route.path"
				class="sidebar-menu"
				:collapse="isCollapsed"
				:collapse-transition="false"
			>
				<!~~ 遍历路由生成菜单（只渲染非隐藏的一级路由） ~~>
				<template v-for="route in routes" :key="route.name">
					<el-sub-menu v-if="!route.meta.hidden && route.children" :index="route.path">
						<!~~ 父菜单标题（图标 + 文字） ~~>
						<template #title>
							<el-icon><component :is="route.meta.icon" /></el-icon>
							<span>{{ route.meta.title }}</span>
						</template>

						<!~~ 子菜单（比如 Animations 下的 Loading） ~~>
						<el-menu-item
							v-for="child in route.children"
							:key="child.name"
							:index="`/${route.path}/${child.path}`"
							v-if="!child.meta.hidden"
							@click="$router.push(`/${route.path}/${child.path}`)"
						>
							<el-icon v-if="child.meta.icon"><component :is="child.meta.icon" /></el-icon>
							<span>{{ child.meta.title }}</span>
						</el-menu-item>
					</el-sub-menu>

					<!~~ 无下级的菜单（比如 Dashboard） ~~>
					<el-menu-item
						v-else-if="!route.meta.hidden"
						:index="route.path"
						@click="$router.push(`/${route.path}`)"
					>
						<el-icon><component :is="route.meta.icon" /></el-icon>
						<span>{{ route.meta.title }}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</aside>
		<!~~ 右侧内容区 ~~>
		<main class="content-wrapper">
			<!~~ 内容区头部（可选：面包屑 + 刷新/返回按钮） ~~>
			<div class="content-header">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
						{{ item.title }}
					</el-breadcrumb-item>
				</el-breadcrumb>
			</div>

			<!~~ 路由视图（渲染 animations/loading 等页面） ~~>
			<div class="content-main">
				<router-view />
			</div>
		</main>~~>
	</div>-->
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
// import {
// 	UserOutlined,
// 	VideoCameraOutlined,
// 	UploadOutlined,
// 	MenuUnfoldOutlined,
// 	MenuFoldOutlined,
// } from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
import { useRoute, useRouter } from 'vue-router';
// 引入图标（根据你用的图标库调整，比如 Element Plus 图标）
// import { ArrowLeft, ArrowRight, Menu, Home, Animation, Loading } from '@element-plus/icons-vue';
// import routes from '@/router/index.js';

// const route = useRoute();
// const router = useRouter();

// // 侧边栏折叠状态
// const isCollapsed = ref(false);

// // 过滤路由：只取根路由的 children（非隐藏的）
// const menuRoutes = computed(() => {
// 	return routes.find((route) => route.path === '/')?.children || [];
// });

// // 面包屑列表（根据当前路由自动生成）
// const breadcrumbList = computed(() => {
// 	const matched = route.matched.filter((item) => !item.meta.hidden);
// 	// 排除根路由，只取一级/二级路由
// 	return matched.slice(1).map((item) => ({
// 		path: item.path,
// 		title: item.meta.title,
// 	}));
// });

// // 监听窗口大小：移动端自动折叠侧边栏
// const handleResize = () => {
// 	if (window.innerWidth < 768) {
// 		isCollapsed.value = true;
// 	} else {
// 		isCollapsed.value = false;
// 	}
// };
// watch(() => window.innerWidth, handleResize, { immediate: true });
// window.addEventListener('resize', handleResize);

// // 组件卸载时移除监听
// onUnmounted(() => {
// 	window.removeEventListener('resize', handleResize);
// });
</script>

<style lang="scss" scoped>
// 全局布局容器
.lab-main-layout {
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #f4f7f9;
	.layout-sider-placeholder {
		width: 210px;
		overflow: hidden;
		flex: 0 0 210px;
		max-width: 210px;
		min-width: 210px;
		transition: 0.2s;
	}
	.layout-sideBar-fixed {
		position: fixed !important;
		top: 0;
		left: 0;
		height: 100%;
	}
	.lab-default-layout-main {
		.layout-header-fixed {
			position: fixed;
			z-index: 505;
			top: 0;
			width: 100%;
		}
		.lab-layout-header {
			background: #fff;
			width: calc(100% - 210px);
			height: 48px;
			line-height: 48px;
		}
		.lab-multiple-tabs {
			transition:
				margin 0.2s ease-in-out 0.6s,
				opacity 0.2s ease-in-out 0.6s;
			z-index: 10;
			height: 32px;
			border-bottom: 1px solid #eee;
			background-color: #fff;
			line-height: 32px;
		}

		.lab-content-layout {
			display: flex;
			position: relative;
			flex-direction: column;
			flex-grow: 1;
			width: 100%;
			height: 0;
			min-height: 0;
			overflow: auto;
		}
	}
}

// 侧边栏样式
.sidebar {
	width: 240px; // 展开宽度
	min-width: 64px; // 折叠后宽度
	height: 100vh;
	background: #2e3b4e; // 深色侧边栏（可自定义）
	color: #fff;
	transition: width 0.3s ease; // 折叠动画
	position: relative;

	&.collapsed {
		width: 64px; // 折叠后宽度
		.lab-title {
			display: none; // 折叠后隐藏标题
		}
	}

	// 侧边栏头部
	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		height: 60px;
		border-bottom: 1px solid #404e67;

		.lab-title {
			font-size: 18px;
			font-weight: 600;
			margin: 0;
		}

		.collapse-btn {
			font-size: 20px;
			cursor: pointer;
			color: #fff;
		}
	}

	// 侧边栏菜单
	.sidebar-menu {
		border-right: none; // 去掉 Element UI 默认边框
		background: transparent;
		height: calc(100vh - 60px);
		padding-top: 16px;

		:deep(.el-menu-item),
		:deep(.el-sub-menu__title) {
			color: #e5e5e5;
			height: 48px;
			line-height: 48px;

			&:hover {
				background: #404e67;
			}
		}

		:deep(.el-menu-item.is-active) {
			background: #1989fa;
			color: #fff;
		}
	}
}

// 右侧内容区
.content-wrapper {
	flex: 1; // 占满剩余宽度
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: #f5f7fa; // 内容区背景色

	// 内容区头部（面包屑）
	.content-header {
		height: 60px;
		padding: 0 24px;
		display: flex;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
	}

	// 内容主体（路由视图）
	.content-main {
		flex: 1;
		padding: 24px;
		overflow-y: auto; // 内容过多时滚动
		// 自定义滚动条（可选）
		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background: #ddd;
			border-radius: 3px;
		}
	}
}

// 移动端适配（768px以下）
@media (max-width: 768px) {
	.sidebar {
		position: fixed;
		z-index: 999; // 确保侧边栏在最上层
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
	}

	.content-wrapper {
		margin-left: 64px; // 适配折叠后的侧边栏宽度
	}

	// 移动端展开侧边栏时，加遮罩
	.sidebar:not(.collapsed) + .content-wrapper::after {
		content: '';
		position: fixed;
		top: 0;
		left: 64px;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 998;
	}
}
</style>
