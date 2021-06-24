<template>
	<div class="TaxCalculator bg-white is-theme-lg-radius px-2 py-2">
		<div class="TaxCalculator-header px-3 pt-3 mb-4">
			<div class="row">
				<div class="col-xxl-7">
					<h5 class="jifie-card-title mb-1">TaxCalculator</h5>
					<p class="mb-0 text-muted">Your Tax for the year of <span class="text-clr-green">2019-2020</span></p>
				</div>
				<div class="col-xxl-5">
					<div class="form-group d-flex align-items-center justify-content-xxl-end mt-3 mt-xxl-0">
						<label for="#" class="text-dark text-uppercase text-nowrap">PAYG</label>
						<input type="text" class="payg-form-control form-control form-control-lg fs-6 is-theme-radius mx-3" placeholder="4,00000.00" />
						<button type="buttton" class="btn btn-lg btn-jifie fs-6 is-theme-radius">Update</button>
					</div>
				</div>
			</div>
		</div>
		<apexchart type="area" height="325" :options="chartOptions" :series="series" />
	</div>
</template>

<script>
	export default {
		name: "TaxCalculator",
		data() {
			return {
				series: [
					{
						name: "Series A",
						type: "column",
						data: [600, 0, 0, 800, 0, 0, 0, 700, 0, 0, 0, 900],
					},
					{
						name: "Series B",
						type: "area",
						data: [440, 550, 410, 670, 220, 430, 210, 410, 560, 270, 430, 500],
					},
				],
				chartOptions: {
					chart: {
						height: 350,
						type: "line",
						stacked: false,
						zoom: {enabled: false},
						toolbar: {show: false},
					},
					dataLabels: {
						enabled: false,
					},
					grid: {
						borderColor: "#DBDFEA",
						strokeDashArray: 6,
					},
					stroke: {
						width: [0, 2],
						curve: "smooth",
					},
					legend: {
						show: false,
					},
					plotOptions: {
						bar: {
							columnWidth: "15%",
							borderRadius: window.outerWidth > 1600 ? 8 : 4,
						},
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
						colors: ["#FFA6A6", "#12C99E"],
						type: ["solid", "gradient"],
						gradient: {
							shadeIntensity: 1,
							opacityFrom: 0.4,
							opacityTo: 0.2,
							stops: [0, 100],
						},
					},
					yaxis: {
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
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.payg-form-control {
		background-image: url("data:image/svg+xml,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.344 9.088C7.344 5.328 2.416 6.432 2.416 4.112C2.416 3.376 2.96 2.848 3.968 2.848C4.848 2.848 5.472 3.296 5.728 4.256L7.2 3.696C6.896 2.544 6.016 1.792 4.768 1.584V0.112H3.392V1.568C1.792 1.776 0.88 2.816 0.88 4.24C0.88 7.744 5.76 6.672 5.76 9.136C5.76 10 5.104 10.544 4.048 10.544C2.944 10.544 2.16 9.936 1.904 8.864L0.432 9.44C0.832 10.848 1.92 11.696 3.36 11.856V13.296H4.736V11.824C6.352 11.568 7.344 10.528 7.344 9.088Z' fill='%232D405A'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: 10px;
		background-position: 14px center;
		padding-left: 30px;
	}
</style>
