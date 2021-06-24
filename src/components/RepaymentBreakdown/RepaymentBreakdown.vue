<template>
	<div class="RepaymentBreakdown px-4 py-4 bg-white is-theme-lg-radius">
		<h5 class="jifie-card-title mb-4">Repayment Breakdown</h5>
		<div class="RepaymentBreakdown-donut-area mb-4">
			<apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
		</div>
		<div class="scoreSummary-result is-theme-lg-radius px-4 py-4 mb-4" style="--bg-color: #12CA9E;">
			<p class="text-white mb-2">Payment of</p>
			<h2 class="mb-0 text-white fs-1">
				<span class="fw-bold">$185.26</span>
				<sub class="fs-6 fw-normal">/Month</sub>
			</h2>
		</div>
		<div class="scoreSummary-result-table text-center table-responsive">
			<table class="table table-borderless text-muted mb-4">
				<tbody>
					<tr>
						<td class="text-start">Total of X payments</td>
						<td class="text-end fw-bold">$13,338.60</td>
					</tr>
					<tr>
						<td class="text-start">Interest</td>
						<td class="text-end fw-bold">$3,338.60</td>
					</tr>
					<tr>
						<td class="text-start">Interest + Fee</td>
						<td class="text-end fw-bold">$3,338.60</td>
					</tr>
					<tr>
						<td class="text-start">Interest rate</td>
						<td class="text-end fw-bold">$3,338.60</td>
					</tr>
				</tbody>
			</table>
			<button
				data-bs-toggle="modal"
				data-bs-target="#amortization-schedule-modal"
				type="button"
				class="btn btn-outline-secondary px-4 py-2 border-2 is-theme-radius"
			>
				Amortization Schedule
			</button>
		</div>
	</div>

	<!-- Amortization Schedule Table - Modal -->
	<div class="modal fade" id="amortization-schedule-modal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content px-4 py-4 is-theme-radius">
				<div class="modal-header pb-3 border-0">
					<h5 class="modal-title fs-6">Amortization Schedule</h5>
					<button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="amortization-schedule-table table-responsive is-scrollable" style="--max-height : 450px">
						<table class="table">
							<thead>
								<tr>
									<th>Month remaining</th>
									<th>Payment Amount</th>
									<th class="text-end">Principal remaining</th>
								</tr>
							</thead>
							<tbody v-if="amortizationSchedules">
								<tr v-for="(item, index) in amortizationSchedules" :key="index">
									<td>{{item.monthRemaining}}</td>
									<td>{{item.paymentRemaining}}</td>
									<td class="text-end">{{item.principleRemaining}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RepaymentBreakdown",
		data() {
			return {
				amortizationSchedules: [
					{ monthRemaining: "69", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
					{ monthRemaining: "74", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
					{ monthRemaining: "74", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
					{ monthRemaining: "74", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
					{ monthRemaining: "74", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
					{ monthRemaining: "74", paymentRemaining: "$555", principleRemaining: "$98528" },
					{ monthRemaining: "776", paymentRemaining: "$842", principleRemaining: "$657" },
					{ monthRemaining: "69", paymentRemaining: "$5285", principleRemaining: "$756" },
				],
				series: [70, 30],
				chartOptions: {
					chart: {
						type: "donut",
					},
					labels: ["Principal", "Interest"],
					legend: {
						show: true,
						position: "bottom",
						fontFamily: "Biennale",
						fontSize: "16px",
						itemMargin: {
							horizontal: 10,
							vertical: 15,
						},
					},
					dataLabels: {
						enabled: false,
						formatter: function(val) {
							return val + "%";
						},
					},
					stroke: {
						width: 6,
					},
					colors: ["#12CA9E", "#F3B410"],
					plotOptions: {
						pie: {
							expandOnClick: true,
						},
						donut: {
							size: "65%",
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
	};
</script>

<style lang="scss" scoped>
	.RepaymentBreakdown {
		--minHeight: 400px;
		min-height: var(--minHeight);
		.scoreSummary-result {
			width: 100%;
			background-color: var(--bg-color);
		}
	}

	#amortization-schedule-modal {
		.table > :not(:last-child) > :last-child > * {
			border-bottom-color: inherit !important;
			box-shadow: none;
			color: #79828d;
			letter-spacing: 2px;
			text-transform: uppercase;
			font-size: 12px;
			font-weight: 500;
		}
		.table {
			table-layout: fixed;
		}
	}
</style>
