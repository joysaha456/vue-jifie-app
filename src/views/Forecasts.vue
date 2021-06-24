<template>
	<div class="forecasts">
		<div class="container-fluid">
			<PageTitle title="Forecasts" />
			<div class="mb-4">
				<CashFlowSummaryChart />
			</div>
			<div class="row">
				<div class="col-xxl-8">
					<div class="simulate-scenario bg-white is-theme-lg-radius px-4 py-4 mb-4">
						<div class="row align-items-center">
							<div class="col-xl-9">
								<div class="scenario-content">
									<h5 class="jifie-card-title mb-2">Simulation</h5>
									<p class="text-muted mb-0">
										Start your simulation for any of the selected scenarios below.
									</p>
								</div>
							</div>
							<div class="col-xl-3">
								<div class="scenario-button text-xl-end">
									<router-link to="/forecasts" class="btn btn-jifie px-4 py-2 is-theme-radius">Start</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="mb-4">
						<Scenarios />
					</div>
				</div>
				<div class="col-xxl-4">
					<div class="mb-4">
						<GoalStatus title="Insight" :changeButton="false" :GoalStatus="GoalStatus" />
					</div>
					<div class="mb-4">
						<Suggestions />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import CashFlowSummaryChart from "@/components/DashboardHome/CashFlowSummaryChart.vue";
	import GoalStatus from "@/components/DashboardHome/GoalStatus.vue";
	import Suggestions from "@/components/DashboardHome/Suggestions.vue";
	import Scenarios from "@/components/Scenarios/Scenarios.vue";

	export default {
		name: "Forecasts",
		data() {
			return {
				GoalStatus: [
					{ id: Date.now() + Math.random(), title: "Goal has been reached.", status: "success" },
					{ id: Date.now() + Math.random(), title: "Excess cash at the end of safety net period: 12345698.2554744", status: "success" },
					{ id: Date.now() + Math.random(), title: "Goal has been reached.", status: "reached" },
				],
			};
		},
		components: {
			PageTitle,
			CashFlowSummaryChart,
			GoalStatus,
			Suggestions,
			Scenarios,
		},
	};
</script>

<style lang="scss" scoped></style>
