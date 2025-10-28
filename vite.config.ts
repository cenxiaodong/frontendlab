import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
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
});
