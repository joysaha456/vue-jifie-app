<template>
	<div class="authentication mx-auto text-center reset-success">
		<img src="../../assets/images/successfull.svg" alt="img" class="img-fluid d-inline-block mb-4" />
		<p class="mb-2 text-muted">Email was sent</p>
		<h2 class="text-success fs-1 fw-bold mb-2">Successfuly!</h2>
		<p class="mb-0 text-muted">
			<small>Please cheeck your email and set the password</small>
		</p>
	</div>
</template>

<script>
	export default {
		name: "ResetSuccess",
	};
</script>

<style lang="scss" scoped>
	@import "./Authentication.scss";
</style>
