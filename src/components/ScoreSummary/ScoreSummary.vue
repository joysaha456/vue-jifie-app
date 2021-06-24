<template>
	<div class="scoreSummary position-relative bg-white px-4 pt-4 pb-0 is-theme-lg-radius">
		<h5 class="jifie-card-title position-relative mb-4">Score Summary</h5>
		<div class="chart-area">
			<Highcharts :options="chartOptions" />
		</div>
		<div class="scoreSummary-result is-theme-lg-radius px-4 py-4" style="--bg-color: #7f7dd3;">
			<p class="text-white mb-2">As at 03 February</p>
			<h2 class="mb-0 text-white fs-1">
				<span class="fw-bold">510</span>
				<sub class="fs-6 fw-normal">/Good</sub>
			</h2>
		</div>
	</div>
</template>

<script>
	import Highcharts from "highcharts";
	import { createHighcharts } from "vue-highcharts";
	import loadHighchartsMore from "highcharts/highcharts-more";
	import loadSolidGauge from "highcharts/modules/solid-gauge";
	loadHighchartsMore(Highcharts);
	loadSolidGauge(Highcharts);

	export default {
		name: "ScoreSummary",
		components: {
			Highcharts: createHighcharts("Highcharts", Highcharts),
		},
		data() {
			return {
				chartOptions: {
					chart: {
						events: {
							load: function() {
								this.setSize(null, this.seriesGroup.getBBox().height + this.marginBottom + this.plotTop + 350);
							},
						},
						marginTop: 0,
						marginBottom: 0,
						renderTo: "container",
						plotBackgroundColor: null,
						plotBackgroundImage: null,
						plotBorderWidth: 0,
						plotShadow: false,
					},
					title: {
						text: "",
					},
					credits: false,
					tooltip: {
						pointFormat: "{point.percentage:.1f}",
					},
					pane: {
						center: ["50%", "50%"],
						size: "50%",
						startAngle: -90,
						endAngle: 90,
						background: {
							borderWidth: 0,
							backgroundColor: "none",
							innerRadius: "60%",
							outerRadius: "100%",
							shape: "arc",
						},
					},
					yAxis: [
						{
							lineWidth: 0,
							min: 0,
							max: 90,
							minorTickLength: 0,
							tickLength: 0,
							tickWidth: 0,
							labels: {
								enabled: false,
							},
							title: {
								text: "",
								useHTML: true,
								y: 80,
							},
							pane: 0,
						},
					],
					plotOptions: {
						pie: {
							dataLabels: {
								enabled: true,
								distance: 25,
								format: "{point.name}",
								style: {
									fontWeight: "normal",
									color: "#89929B",
									fontSize: "16px",
									fontFamily: "Biennale",
								},
							},
							startAngle: -90,
							endAngle: 90,
							borderWidth: 0,
							colors: ["#FF8484", "#FF9D9D", "#7F7DD3", "#6CDFB8", "#12CA9E"],
							center: ["50%", "50%"],
						},
						gauge: {
							dataLabels: {
								enabled: false,
							},
							dial: {
								radius: "100%",
							},
						},
					},
					series: [
						{
							type: "pie",
							name: "",
							innerSize: "80%",
							data: [
								["170", 20],
								["340", 20],
								["510", 20],
								["680", 20],
								["850", 20],
							],
						},
						{
							type: "gauge",
							innerSize: "80%",
							color: "#6576FF",
							data: [30],
							dial: {
								rearLength: 0,
							},
						},
					],
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.scoreSummary {
		--minHeight: 400px;
		min-height: var(--minHeight);
		.scoreSummary-result {
			position: absolute;
			left: 50%;
			top: 65%;
			transform: translateX(-50%);
			width: calc(100% - 3rem);
			background-color: var(--bg-color);
		}
	}
</style>
