<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCounterStore } from '@/stores/counterStore';

const store = useCounterStore();

const { count, name } = storeToRefs(store);

function add() {
	store.$patch({
		count: store.count + 1,
		name: 'DIO',
	});
}

function reset() {
	// store.$reset();
}

// import HelloWorld from './components/HelloWorld.vue';
</script>
<template>
	<router-view #="{ Component }">
		<component :is="Component" />
	</router-view>
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
