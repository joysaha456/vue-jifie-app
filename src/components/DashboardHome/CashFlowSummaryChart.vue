<template>
	<section class="cashFlowSummaryChart">
		<div class="jifie-card cashflow-chart px-2 py-2 bg-white is-drop-shadow is-theme-lg-radius overflow-hidden">
			<div class="jifie-card-header px-3 pt-4 mb-2">
				<div class="row mb-4 align-items-center">
					<div class="col-xl-6">
						<h5 class="jifie-card-title mb-1">Cash flow summary</h5>
						<p class="text-muted"><small>Your present, past and mathematical future, in one spot.</small></p>
					</div>
				</div>
			</div>
			<apexchart type="area" height="400" :options="chartOptions" :series="series" />
		</div>
	</section>
</template>

<script>
	export default {
		name: "CashFlowSummaryChart",
		data() {
			return {
				date: new Date(),
				series: [
					{
						name: "Income",
						type: "column",
						data: [180, 180, 380, 700, 360, 500, 1100, 900, 200, 180, 500, 850],
					},
					{
						name: "Cashflow",
						type: "column",
						data: [250, 220, 200, 420, 320, 380, 550, 650, 250, 150, 400, 650],
					},
					{
						name: "Revenue",
						type: "area",
						data: [400, 470, 630, 950, 610, 750, 1350, 1150, 500, 430, 750, 1100],
					},
				],
				chartOptions: {
					chart: {
						height: 350,
						type: "area",
						stacked: false,
						zoom: {enabled: false},
						toolbar: {show: false},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						width: [0, 0, 2],
						colors: ["", "", "#12C99E"],
					},
					markers: {
						colors: ["#f00"],
					},
					plotOptions: {
						bar: {
							columnWidth: "20px",
							borderRadius: window.outerWidth > 1600 ? 8 : 4,
						},
					},
					yaxis: {
						labels: {
							formatter: function(value) {
								return "$" + value;
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
						categories: ["Jun", "Feb", "March", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
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

					tooltip: {
						marker: {
							fillColors: ["#6576FF", "#FFA6A6", "#12C99E"],
						},
					},
					fill: {
						colors: ["#6576FF", "#FFA6A6", "transparent"],
						type: ["solid", "solid", ""],
					},
					legend: {
						horizontalAlign: "center",
						fontFamily: "Biennale",
						itemMargin: {
							horizontal: 10,
							vertical: 15,
						},
						markers: {
							fillColors: ["#6576FF", "#FFA6A6", "#12C99E"],
						},
					},
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.cashflow-chart {
		.cashflow-summery-list {
			.title {
				font-size: 14px;
				line-height: calc(100% + 5px);
				font-weight: 400;
				color: var(--text-clr-gray-dark);
			}

			.balance {
				font-size: 18px;
				line-height: calc(100% + 5px);
				font-weight: 500;
			}
		}
	}
</style>
