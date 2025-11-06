<script setup lang="ts">
import { hello } from '@/utils/test';

console.log(hello, 'hello');

// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<!-- // 改成 "build:pro": "vite build --mode production ", -->

	<!-- <div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" /> -->
	<div class="box">
		<div class="wrap">你好</div>
	</div>
	<div style="height: 2000px"></div>
	<router-view></router-view>
</template>

<style lang="scss" scoped>
// @use '@/assets/variables' as v;
$primary-color: #3498db;
$font-size: 16px;
.box {
	.wrap {
		width: 200px;
		height: 300px;
		background: $error-color;
	}
}
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
