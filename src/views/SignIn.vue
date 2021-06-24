<template>
	<Auth objective="signin" />
</template>

<script>
	import Auth from "@/components/Auth/Auth.vue";
	export default {
		name: "SignIn",
		components: {
			Auth,
		},
	};
</script>

<style lang="scss" scoped></style>
