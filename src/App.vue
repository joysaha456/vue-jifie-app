<template>
	<div id="app">
		<Header />
		<Sidebar />
		<main id="dashboard">
			<router-view />
		</main>
	</div>
</template>

<script>
	// import bootstrap js
	import "bootstrap/dist/js/bootstrap.bundle.min.js";
	import "bootstrap/dist/css/bootstrap.min.css";
	// import components
	import Header from "@/components/Header/Header.vue";
	import Sidebar from "@/components/Sidebar/Sidebar.vue";

	export default {
		name: "App",
		components: {
			Header,
			Sidebar,
		},
	};
</script>

<style lang="scss">
	@import "./App.scss";
</style>
