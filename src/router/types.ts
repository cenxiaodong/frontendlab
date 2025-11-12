import type { RouteMeta, RouteRecordRaw } from 'vue-router';

/** 自定义路由元信息类型 */
export interface AppRouteMeta extends RouteMeta {
	title: string; // 必填
	icon?: string;
	sort: number; // 必填
	tags?: string[];
	hidden?: boolean;
}

/** 直接组合出扩展路由类型（无任何重复声明） */
export type AppRouteRecordRaw = Omit<RouteRecordRaw, 'meta' | 'children'> & {
	meta: AppRouteMeta; // 覆盖 meta 类型
	children?: AppRouteRecordRaw[]; // 嵌套自己（支持子路由）
};
