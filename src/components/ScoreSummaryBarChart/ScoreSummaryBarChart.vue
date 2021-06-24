<template>
	<div class="bar-chart-area px-4 py-4 bg-white is-theme-lg-radius">
		<div class="bar-chart-area-header d-flex align-items-center justify-content-between mb-4">
			<h5 class="jifie-card-title">Score Summary</h5>
			<select class="form-select">
				<option selected>This Year</option>
				<option value="1">This Month</option>
				<option value="2">This Week</option>
			</select>
		</div>
		<apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		name: "ScoreSummaryBarChart",
		data() {
			return {
				series: [
					{
						name: "Net Profit",
						data: [300, 600, 900, 450, 350, 800, 500, 670, 250, 568, 700, 400],
					},
				],
				chartOptions: {
					chart: {
						type: "bar",
						height: 350,
						toolbar: {
							show: false,
						},
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: "20px",
							endingShape: "rounded",
							borderRadius: window.outerWidth > 1600 ? 8 : 4,
						},
					},
					dataLabels: {
						enabled: false,
					},
					grid: {
						borderColor: "#DBDFEA",
						strokeDashArray: 6,
					},
					stroke: {
						show: true,
						width: 2,
						colors: ["transparent"],
					},
					xaxis: {
						categories: ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
					yaxis: {
						labels: {
							formatter: function(value) {
								return value;
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
					fill: {
						colors: ["#D3DBFF"],
						type: ["solid"],
						opacity: 1,
					},
					states: {
						hover: {
							filter: {
								type: "none",
								value: 0,
							},
						},
						active: {
							allowMultipleDataPointsSelection: false,
							filter: {
								type: "darken",
								value: 0,
							},
						},
					},
					tooltip: {
						y: {
							formatter: function(val) {
								return val;
							},
						},
					},
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.bar-chart-area {
		.bar-chart-area-header {
			.form-select {
				--width: 150px;
				max-width: var(--width);
			}
		}
	}
	.apexcharts-bar-series {
		display: none;
	}
</style>
