<template>
	<div class="repayment-calculate">
		<div class="container-fluid">
			<PageTitle title="Repayment Calculator" />
			<div class="row">
				<div class="col-xxl-8">
					<div class="mb-4">
						<RepaymentCalculator />
					</div>
				</div>
				<div class="col-xxl-4">
					<div class="mb-4">
						<RepaymentBreakdown />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import RepaymentCalculator from "@/components/RepaymentCalculator/RepaymentCalculator.vue";
	import RepaymentBreakdown from "@/components/RepaymentBreakdown/RepaymentBreakdown.vue";

	export default {
		name: "RepaymentCalculate",
		components: {
			PageTitle,
			RepaymentCalculator,
			RepaymentBreakdown,
		},
	};
</script>

<style lang="scss" scoped></style>
