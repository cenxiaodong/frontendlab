import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
		rules: {
			'no-inline-comments': 'off', // 允许行内注释
			'multiline-comment-style': 'off', // 允许任意多行注释格式
			'spaced-comment': 'off', // 注释前后可以不加空格（如 //注释 不报错）
			'no-comment': 'off', // 允许所有注释（防止误启用该规则）
			'@typescript-eslint/no-unused-vars': 'off', // 忽略未使用的变量
			'vue/multi-word-component-names': 'off', // 忽略组件名必须是多个单词
		},
	},
]);
