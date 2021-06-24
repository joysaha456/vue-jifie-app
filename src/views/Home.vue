<template>
	<section class="home">
		<div class="container-fluid">
			<PageTitle title="Dashboard" />
			<div id="summary">
				<div class="row">
					<div class="col-xl-4">
						<router-link to="/cash-balance-details" class="d-block text-decoration-none area-chart px-2 py-2 bg-white is-theme-lg-radius mb-4">
							<div class="area-chart-hwead mb-4 px-3 pt-3">
								<h5 class="jifie-card-title text-dark mb-4">Cash Balance</h5>
								<ul class="list-unstyled d-flex align-items-center">
									<li class="border-start ps-3 lh-0 border-4 border-primary">
										<p style="margin-top : -7px" class="text-muted mb-0"><small>Closing cash balance</small></p>
										<h6 class="fs-6 mb-0 text-primary">$56,9875.00</h6>
									</li>
								</ul>
							</div>
							<apexchart type="area" height="350" :options="cashBalanceAreaChart.chartOptions" :series="cashBalanceAreaChart.series" />
						</router-link>
					</div>
					<div class="col-xl-4">
						<router-link to="/cash-balance-details" class="d-block text-decoration-none area-chart px-2 py-2 bg-white is-theme-lg-radius mb-4">
							<div class="area-chart-hwead mb-4 px-3 pt-3">
								<h5 class="jifie-card-title text-dark mb-4">Income</h5>
								<ul class="list-unstyled d-flex align-items-center">
									<li class="border-start ps-2 lh-0 border-4 me-5" style="border-color : var(--status-clr-green) !important;">
										<p style="margin-top : -7px" class="text-muted mb-0"><small>Avarage Income/m</small></p>
										<h6 class="fs-6 mb-0 text-clr-green">$9,875.00</h6>
									</li>
									<li class="border-start ps-2 lh-0 border-4" style="border-color : var(--status-clr-green) !important;">
										<p style="margin-top : -7px" class="text-muted mb-0"><small>Total Income</small></p>
										<h6 class="fs-6 mb-0 text-clr-green">$56,9875.00</h6>
									</li>
								</ul>
							</div>
							<apexchart type="area" height="350" :options="incomeAreaChart.chartOptions" :series="incomeAreaChart.series" />
						</router-link>
					</div>
					<div class="col-xl-4">
						<router-link to="/cash-balance-details" class="d-block text-decoration-none area-chart px-2 py-2 bg-white is-theme-lg-radius mb-4">
							<div class="area-chart-hwead mb-4 px-3 pt-3">
								<h5 class="jifie-card-title text-dark mb-4">Expenses</h5>
								<ul class="list-unstyled d-flex align-items-center">
									<li class="border-start ps-2 lh-0 border-4 border-danger me-5">
										<p style="margin-top : -7px" class="text-muted mb-0"><small>Avarage Expenses/m</small></p>
										<h6 class="fs-6 mb-0 text-danger">$16,9875.00</h6>
									</li>
									<li class="border-start ps-2 lh-0 border-4 border-danger">
										<p style="margin-top : -7px" class="text-muted mb-0"><small>Total Expenses</small></p>
										<h6 class="fs-6 mb-0 text-danger">$56,9875.00</h6>
									</li>
								</ul>
							</div>
							<apexchart type="area" height="350" :options="expenseAreaChart.chartOptions" :series="expenseAreaChart.series" />
						</router-link>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-4">
						<div class="mb-4">
							<IncomeExpenditure title="Profit" :consumptions="profit" />
						</div>
					</div>
					<div class="col-xl-4">
						<div class="mb-4">
							<IncomeExpenditure title="Income" :consumptions="income" />
						</div>
					</div>
					<div class="col-xl-4">
						<div class="mb-4">
							<IncomeExpenditure title="Expenses" :consumptions="expense" />
						</div>
					</div>
				</div>
			</div>
			<div id="cashflow" class="mb-4">
				<CashFlowSummaryChart />
			</div>
			<div class="simulate-scenario bg-white is-theme-lg-radius px-4 py-4 mb-4">
				<div class="row align-items-center">
					<div class="col-xl-9">
						<div class="scenario-content">
							<h5 class="jifie-card-title mb-2">Simulate Scenarios</h5>
							<p class="text-muted mb-0">
								Planning new features, hiring employees? Check impact of your business decisions by simulating scenarios.
							</p>
						</div>
					</div>
					<div class="col-xl-3">
						<div class="scenario-button text-xl-end">
							<router-link to="/forecasts" class="btn btn-jifie px-4 py-2">Simulate Scenarios</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-4">
				<div class="col-xl-6">
					<GoalStatus title="Goal Status" :changeButton="true" :GoalStatus="GoalStatus" />
				</div>
				<div class="col-xl-6">
					<Suggestions />
				</div>
			</div>
			<div class="mb-4">
				<div id="transaction">
					<Transactions />
				</div>
			</div>
			<div class="row">
				<div class="col-xl-8 col-xxl-9">
					<div id="taxCalculator">
						<TaxCalculator />
					</div>
				</div>
				<div class="col-xl-4 col-xxl-3">
					<YearlyTax />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import CashFlowSummaryChart from "@/components/DashboardHome/CashFlowSummaryChart.vue";
	import IncomeExpenditure from "@/components/DashboardHome/IncomeExpenditure.vue";
	import GoalStatus from "@/components/DashboardHome/GoalStatus.vue";
	import Suggestions from "@/components/DashboardHome/Suggestions.vue";
	import Transactions from "@/components/DashboardHome/Transactions.vue";
	import YearlyTax from "@/components/DashboardHome/YearlyTax.vue";
	import TaxCalculator from "@/components/DashboardHome/TaxCalculator.vue";

	export default {
		name: "Home",
		data() {
			return {
				GoalStatus: [
					{ id: Date.now(), title: "Goal has been reached.", status: "success" },
					{ id: Date.now(), title: "Excess cash at the end of safety net period: 12345698.2554744", status: "success" },
					{ id: Date.now(), title: "Goal has been reached.", status: "reached" },
				],
				cashBalanceAreaChart: {
					series: [
						{
							name: "Cash Balance",
							data: [10000, 30000, 15000, 40000, 25000, 10000, 35000, 42000, 28000, 11000, 42000, 50000],
						},
					],
					chartOptions: {
						chart: {
							height: 350,
							type: "area",
							zoom: { enabled: false },
							toolbar: { show: false },
						},
						dataLabels: {
							enabled: false,
						},
						grid: {
							borderColor: "#DBDFEA",
							strokeDashArray: 6,
						},
						stroke: {
							curve: "smooth",
							colors: ["#6576FF"],
							width: 2,
						},
						markers: {
							colors: ["#6576FF"],
						},
						tooltip: {
							theme: "light",
							marker: {
								show: false,
							},
							x: {
								show: false,
							},
						},
						fill: {
							colors: "#6576FF",
							type: "gradient",
							gradient: {
								shadeIntensity: 1,
								opacityFrom: 0.4,
								opacityTo: 0.2,
								stops: [0, 100],
							},
						},
						yaxis: {
							labels: {
								formatter: function(value) {
									if (value > 999 && value < 1000000) {
										// convert to K for valueber from > 1000 < 1 million
										return "$" + (value / 1000).toFixed(1) + "K";
									} else if (value > 1000000) {
										// convert to M for valueber from > 1 million
										return "$" + (value / 1000000).toFixed(1) + "M";
									} else if (value < 900) {
										// if value < 1000, nothing to do
										return "$" + value;
									}
								},
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
						xaxis: {
							type: "category",
							categories: ["Jun", "", "", "", "", "", "", "", "", "", "", "Dec"],
							labels: {
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
					},
				},
				incomeAreaChart: {
					series: [
						{
							name: "Income",
							data: [22000, 30000, 10000, 20000, 45000, 10000, 50000, 32000, 28000, 19000, 42000, 30000],
						},
					],
					chartOptions: {
						chart: {
							height: 350,
							type: "area",
							zoom: { enabled: false },
							toolbar: { show: false },
						},
						dataLabels: {
							enabled: false,
						},
						grid: {
							borderColor: "#DBDFEA",
							strokeDashArray: 6,
						},
						stroke: {
							curve: "smooth",
							colors: ["#12C99E"],
							width: 2,
						},
						markers: {
							colors: ["#12C99E"],
						},
						tooltip: {
							theme: "light",
							marker: {
								show: false,
							},
							x: {
								show: false,
							},
						},
						fill: {
							colors: "#12C99E",
							type: "gradient",
							gradient: {
								shadeIntensity: 1,
								opacityFrom: 0.4,
								opacityTo: 0.2,
								stops: [0, 100],
							},
						},
						yaxis: {
							labels: {
								formatter: function(value) {
									if (value > 999 && value < 1000000) {
										// convert to K for valueber from > 1000 < 1 million
										return "$" + (value / 1000).toFixed(1) + "K";
									} else if (value > 1000000) {
										// convert to M for valueber from > 1 million
										return "$" + (value / 1000000).toFixed(1) + "M";
									} else if (value < 900) {
										// if value < 1000, nothing to do
										return "$" + value;
									}
								},
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
						xaxis: {
							type: "category",
							categories: ["Jun", "", "", "", "", "", "", "", "", "", "", "Dec"],
							labels: {
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
					},
				},
				expenseAreaChart: {
					series: [
						{
							name: "Expense",
							data: [30000, 30000, 45000, 40000, 15000, 20000, 35000, 50000, 12000, 32000, 42000, 50000],
						},
					],
					chartOptions: {
						chart: {
							height: 350,
							type: "area",
							zoom: { enabled: false },
							toolbar: { show: false },
						},
						dataLabels: {
							enabled: false,
						},
						grid: {
							borderColor: "#DBDFEA",
							strokeDashArray: 6,
						},
						stroke: {
							curve: "smooth",
							colors: ["#F25454"],
							width: 2,
						},
						markers: {
							colors: ["#F25454"],
						},
						tooltip: {
							theme: "light",
							marker: {
								show: false,
							},
							x: {
								show: false,
							},
						},
						fill: {
							colors: "#F25454",
							type: "gradient",
							gradient: {
								shadeIntensity: 1,
								opacityFrom: 0.4,
								opacityTo: 0.2,
								stops: [0, 100],
							},
						},
						yaxis: {
							labels: {
								formatter: function(value) {
									if (value > 999 && value < 1000000) {
										// convert to K for valueber from > 1000 < 1 million
										return "$" + (value / 1000).toFixed(1) + "K";
									} else if (value > 1000000) {
										// convert to M for valueber from > 1 million
										return "$" + (value / 1000000).toFixed(1) + "M";
									} else if (value < 900) {
										// if value < 1000, nothing to do
										return "$" + value;
									}
								},
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
						xaxis: {
							type: "category",
							categories: ["Jun", "", "", "", "", "", "", "", "", "", "", "Dec"],
							labels: {
								style: {
									colors: ["#56606D"],
									fontSize: "13px",
									fontFamily: "Biennale",
									fontWeight: 400,
								},
							},
							axisBorder: {
								show: false,
							},
						},
					},
				},
				profit: {
					bestMonth: {
						id: Date.now(),
						status: "success",
						title: "Best Month",
						cost: "$56,9875.00",
						monthName: "April",
					},
					wrostMonth: {
						id: Date.now(),
						status: "danger",
						title: "Worst Month",
						cost: "$56,9875.00",
						monthName: "July",
					},
					lastMonth: {
						id: Date.now(),
						status: "success",
						title: "Last Month",
						cost: "$56,9875.00",
						monthName: "January",
					},
					currentMonth: {
						id: Date.now(),
						status: "primary",
						title: "Current Month",
						cost: "$56,9875.00",
						monthName: "March",
					},
				},
				income: {
					bestMonth: {
						id: Date.now(),
						status: "success",
						title: "Best Month",
						cost: "$56,9875.00",
						monthName: "Jun",
					},
					wrostMonth: {
						id: Date.now(),
						status: "danger",
						title: "Worst Month",
						cost: "$56,9875.00",
						monthName: "Aug",
					},
					lastMonth: {
						id: Date.now(),
						status: "success",
						title: "Last Month",
						cost: "$56,9875.00",
						monthName: "December",
					},
					currentMonth: {
						id: Date.now(),
						status: "primary",
						title: "Current Month",
						cost: "$56,9875.00",
						monthName: "Feb",
					},
				},
				expense: {
					bestMonth: {
						id: Date.now(),
						status: "success",
						title: "Best Month",
						cost: "$56,9875.00",
						monthName: "April",
					},
					wrostMonth: {
						id: Date.now(),
						status: "danger",
						title: "Worst Month",
						cost: "$56,9875.00",
						monthName: "Sept",
					},
					lastMonth: {
						id: Date.now(),
						status: "success",
						title: "Last Month",
						cost: "$56,9875.00",
						monthName: "May",
					},
					currentMonth: {
						id: Date.now(),
						status: "primary",
						title: "Current Month",
						cost: "$56,9875.00",
						monthName: "March",
					},
				},
			};
		},
		components: {
			PageTitle,
			CashFlowSummaryChart,
			IncomeExpenditure,
			GoalStatus,
			Suggestions,
			Transactions,
			YearlyTax,
			TaxCalculator,
		},
		mounted() {
			this.$store.dispatch("dashboardDropdownAction", { status: true });
		},
		unmounted() {
			this.$store.dispatch("dashboardDropdownAction", { status: false });
		},
	};
</script>
