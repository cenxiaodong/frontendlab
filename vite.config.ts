import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],
	server: {
		host: '0.0.0.0', // 确保允许网络访问
		port: 5555, // 明确指定端口
		open: true, // 自动打开浏览器
	},
	resolve: {
		// 配置别名
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "@/assets/styles/index.scss" as *;
					`,
			},
		},
	},
});
