<template>
	<AddBudgetAccount :showModal="addCustomBudgetModal" @addBudgetModalEmit="addBudgetModalEmit" @nextTriggerdModalEmit="nextTriggerdModalEmit" />
	<BudgetWidgetDetailsModal :showModal="saveBudgetModal" @modalEmit="modalEmit" :chartSeries="chartSeries" :chartOptions="chartOptions" />
	<div class="budget">
		<div class="container-fluid">
			<PageTitle title="Budget" />
			<div class="simulate-scenario bg-white is-theme-lg-radius px-4 py-4 mb-4">
				<div class="row align-items-center">
					<div class="col-xl-9">
						<div class="scenario-content">
							<h5 class="jifie-card-title mb-2">Expense Accounts</h5>
							<p class="text-muted mb-0">
								Use intelligent Autosynced budgets directly from your accounting software and also create your own custom budgets to track expenses
							</p>
						</div>
					</div>
					<div class="col-xl-3">
						<div class="scenario-button text-xl-end">
							<button @click="addCustomBudgetModal = true" type="button" class="btn btn-jifie px-4 py-2 is-theme-radius">
								Add Account
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<BudgetNavPills @emitOpenBudgetDetails="emitOpenBudgetDetails" />
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import BudgetNavPills from "@/components/Budget/BudgetNavPills.vue";
	import AddBudgetAccount from "@/components/Budget/AddBudgetAccount.vue";
	import BudgetWidgetDetailsModal from "@/components/Budget/BudgetWidgetDetailsModal.vue";

	export default {
		name: "Budget",
		components: {
			PageTitle,
			BudgetNavPills,
			AddBudgetAccount,
			BudgetWidgetDetailsModal,
		},
		data() {
			return {
				addCustomBudgetModal: false,
				saveBudgetModal: false,
				chartSeries: [70, 30],
				chartOptions: {
					chart: {
						type: "donut",
					},
					legend: {
						show: false,
					},
					dataLabels: {
						enabled: false,
						formatter: function(val) {
							return val + "%";
						},
					},
					stroke: {
						colors: ["#F8F8F8"],
						width: 2,
						dashArray: 0,
					},
					grid: {
						padding: {
							left: -20,
							right: -15,
							bottom: -10,
						},
					},
					colors: ["#12CA9E", "#79828D"],
					plotOptions: {
						pie: {
							expandOnClick: true,
						},
						donut: {
							size: "100%",
							background: "#f00",
						},
					},
					responsive: [
						{
							breakpoint: 576,
							options: {
								chart: {
									width: 200,
								},
							},
						},
					],
				},
			};
		},
		methods: {
			addBudgetModalEmit(value) {
				this.addCustomBudgetModal = value;
			},
			nextTriggerdModalEmit(value) {
				this.saveBudgetModal = value;
				this.addCustomBudgetModal = !value;
			},
			emitOpenBudgetDetails(value) {
				this.saveBudgetModal = value;
			},
			modalEmit(value) {
				this.saveBudgetModal = value;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
