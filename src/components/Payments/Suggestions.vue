<template>
	<div v-if="suggestedData" class="pay-suggestions bg-white px-4 py-4 is-theme-lg-radius">
		<div class="pay-suggestions-header mb-4">
			<h5 class="jifie-card-title mb-1">{{ suggestedData.cardTitle }}</h5>
			<p class="sub-title text-muted">{{ suggestedData.cardSubTitle }}</p>
		</div>
		<ul v-if="suggestedData.cardOverview" class="list-unstyled">
			<li
				v-for="overview in suggestedData.cardOverview"
				:key="overview.id"
				class="py-4 px-4 is-theme-xl-radius d-flex align-items-center justify-content-between bg-light mb-3"
			>
				<p class="mb-0 fw-bold">{{ overview.title }}</p>
				<h5 :class="overview.status === 'success' ? 'text-clr-green' : overview.status === 'danger' ? 'text-clr-red' : null" class="fs-5 fw-bold mb-0">
					{{ overview.payment }}
				</h5>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Suggestions",
		props: {
			suggestedData: Object,
		},
	};
</script>

<style lang="scss" scoped></style>
