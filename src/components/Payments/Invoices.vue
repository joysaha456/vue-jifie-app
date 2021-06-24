<template>
	<div v-if="cardData" class="invoices bg-white px-4 py-4 is-theme-lg-radius">
		<div class="invoice-header mb-5">
			<h5 class="jifie-card-title mb-1">{{ cardData.cardTitle }}</h5>
			<p class="sub-title text-muted">{{ cardData.cardSubTitle }}</p>
		</div>
		<div v-if="cardData.cardOverview" class="row">
			<div v-for="overview in cardData.cardOverview" :key="overview.id" class="col-6">
				<div class="invoice-overview-card">
					<p :class="overview.status === 'success' ? 'text-clr-green' : overview.status === 'danger' ? 'text-clr-red' : null " class="sub-title mb-2 text-muted">{{ overview.title }}</p>
					<h3 :class="overview.status === 'success' ? 'text-clr-green' : overview.status === 'danger' ? 'text-clr-red' : null " class="fw-bold fs-3">{{ overview.payment }}</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Invoices",
		props: {
			cardData: Object,
		},
	};
</script>

<style lang="scss" scoped></style>
