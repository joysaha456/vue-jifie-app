<template>
	<vue-final-modal
		v-model="showCashBalanceMonthWise"
		@click-outside="showCashBalanceMonthWise = false"
		classes="vue-modal-container vue-modal-lg"
		content-class="vue-modal-content is-theme-radius py-4 px-4"
	>
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Cash Balance / May 2020</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="showCashBalanceMonthWise = false">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
            <div class="row">
                <div class="col-xl-4">
                    <div class="bg-light px-4 py-4 mb-4 is-theme-lg-radius">
                        <div class="border-start border-4 border-primary ps-3">
                            <p class="text-muted lh-0 mb-1">Opening</p>
                            <h5 class="mb-0 text-primary lh-0">$56,9875.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="bg-light px-4 py-4 mb-4 is-theme-lg-radius">
                        <div class="border-start border-4 border-success ps-3">
                            <p class="text-muted mb-1 lh-0">Clsoing</p>
                            <h5 class="mb-0 text-success lh-0">$56,9875.00</h5>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="bg-light px-4 py-4 mb-4 is-theme-lg-radius">
                        <div class="border-start border-4 border-danger ps-3">
                            <p class="text-muted mb-1 lh-0">Change</p>
                            <h5 class="mb-0 text-danger lh-0">+ 0.00 (0%)</h5>
                        </div>
                    </div>
                </div>
            </div>
			<row class="row">
				<div class="col-sm-6">
					<div class="breakdown-chart d-flex flex-column align-items-center justify-content-center px-4 py-4 bg-light is-theme-lg-radius mb-4">
                        <h5 class="mb-4 fs-5 text-dark"> Income Breakdown</h5>
						<apexchart width="300" type="donut" :options="apexDonutChart.chartOptions" :series="apexDonutChart.series"></apexchart>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="breakdown-chart d-flex flex-column align-items-center justify-content-center bg-light px-4 py-4 is-theme-lg-radius mb-4">
                        <h5 class="mb-4 fs-5 text-dark"> Expense Breakdown</h5>
						<apexchart width="300" type="donut" :options="apexDonutChart.chartOptions" :series="apexDonutChart.series"></apexchart>
					</div>
				</div>
			</row>
		</div>
	</vue-final-modal>
	<div class="cashBalanceDetails">
		<div class="container-fluid">
			<router-link to="/" class="btn px-0 d-inline-flex align-items-center">
				<svg class="bi bi-arrow-left me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
					/>
				</svg>
				<span class="btn-text">Back</span>
			</router-link>
			<PageTitle title="Cash Balance" />
			<div class="row">
				<div class="col-xxl-8">
					<div class="d-block text-decoration-none area-chart px-2 py-2 bg-white is-theme-lg-radius mb-4">
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
					</div>
					<div v-if="cashBalanceWidgetTable" class="cashBalanceWidgetTable bg-white px-4 py-4 is-theme-lg-radius mb-4">
						<h5 class="jifie-card-title mb-3">Cash Balance</h5>
						<div class="table-responsive is-scrollable" style="--max-height : 450px">
							<table class="table table-hover">
								<thead>
									<tr>
										<th class="py-3">2021</th>
										<th class="py-3">Opening</th>
										<th class="py-3 text-center">Closing</th>
										<th class="py-3 text-end">AMOUNT</th>
									</tr>
								</thead>
								<tbody>
									<tr @click="showCashBalanceMonthWise = true" v-for="(item, index) in cashBalanceWidgetTable" :key="index">
										<td class="py-3">{{ item.month }}</td>
										<td class="py-3">{{ item.opening }}</td>
										<td class="py-3 text-center">{{ item.closing }}</td>
										<td class="py-3 text-clr-green text-end">{{ item.amount }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="col-xxl-4">
					<div class="cashBalance-performing bg-white px-4 py-4 is-theme-lg-radius mb-4">
						<h5 class="jifie-card-title mb-4">Performing</h5>
						<div class="performing-wedget mb-5">
							<p class="mb-3 text-dark">Strongest Month</p>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect opacity="0.1" width="48" height="48" rx="10" fill="#12CA9E" />
										<g>
											<path
												d="M15.2695 20.1328C15.2695 24.9792 19.2123 28.9219 24.0586 28.9219C28.905 28.9219 32.8477 24.9792 32.8477 20.1328C32.8477 15.2865 28.905 11.3438 24.0586 11.3438C19.2123 11.3438 15.2695 15.2865 15.2695 20.1328ZM24.0586 12.5156C28.2588 12.5156 31.6758 15.9326 31.6758 20.1328C31.6758 24.333 28.2588 27.75 24.0586 27.75C19.8584 27.75 16.4414 24.333 16.4414 20.1328C16.4414 15.9326 19.8584 12.5156 24.0586 12.5156Z"
												fill="#12CA9E"
											/>
											<path
												d="M18.6318 19.0881L20.903 21.3259L20.3804 24.471C20.344 24.69 20.4344 24.9107 20.6141 25.0411C20.7936 25.1716 21.0314 25.1892 21.2284 25.0872L24.0581 23.6177L26.8876 25.0872C27.083 25.1885 27.3208 25.1728 27.5019 25.0411C27.6816 24.9107 27.772 24.69 27.7356 24.471L27.213 21.3259L29.4842 19.0881C29.6424 18.9325 29.6989 18.7009 29.6303 18.4896C29.5616 18.2786 29.3796 18.1246 29.1601 18.0914L26.0082 17.6169L24.582 14.7648C24.4829 14.5663 24.2799 14.4409 24.0581 14.4409C23.8361 14.4409 23.6333 14.5663 23.534 14.7648L22.1078 17.6169L18.9559 18.0914C18.7364 18.1243 18.5544 18.2786 18.4857 18.4896C18.4171 18.7009 18.4738 18.9325 18.6318 19.0881ZM22.5832 18.7304C22.7718 18.702 22.9348 18.5837 23.0201 18.4132L24.0581 16.337L25.0961 18.4132C25.1815 18.5837 25.3444 18.702 25.533 18.7304L27.8271 19.0758L26.1739 20.7043C26.0382 20.8382 25.9759 21.0298 26.007 21.2179L26.3874 23.5069L24.328 22.4376C24.2435 22.3937 24.1508 22.3717 24.0581 22.3717C23.9654 22.3717 23.8727 22.3937 23.788 22.4376L21.7285 23.5069L22.109 21.2179C22.1403 21.0298 22.0781 20.8382 21.9421 20.7043L20.2891 19.0758L22.5832 18.7304Z"
												fill="#12CA9E"
											/>
											<path
												d="M24.6445 9.58594C24.6445 9.90958 24.3822 10.1719 24.0586 10.1719C23.735 10.1719 23.4727 9.90958 23.4727 9.58594C23.4727 9.2623 23.735 9 24.0586 9C24.3822 9 24.6445 9.2623 24.6445 9.58594Z"
												fill="#12CA9E"
											/>
											<path
												d="M21.2971 9.34552C16.3682 10.6037 12.9258 15.0396 12.9258 20.133C12.9258 23.2963 14.2558 26.2771 16.5906 28.3881L13.0606 34.6093C12.9471 34.8096 12.9613 35.0577 13.0968 35.2435C13.2323 35.4296 13.4639 35.5191 13.6893 35.4722L17.6982 34.6397L19.1072 38.6101C19.1836 38.8262 19.3793 38.9775 19.6078 38.9979C19.8362 39.0182 20.0552 38.9031 20.1685 38.7038L24.0586 31.8648L27.9485 38.7038C28.0533 38.888 28.2483 38.9999 28.4575 38.9999C28.4747 38.9999 28.4921 38.9993 28.5092 38.9979C28.7376 38.9775 28.9333 38.826 29.01 38.6101L30.4188 34.6397L34.4277 35.4722C34.6529 35.5189 34.8847 35.4294 35.0202 35.2435C35.156 35.0577 35.1699 34.8096 35.0564 34.6093L31.5264 28.3881C33.8612 26.2771 35.1912 23.2963 35.1912 20.133C35.1912 15.0396 31.7488 10.6037 26.8201 9.34552C26.5063 9.26541 26.1874 9.4547 26.1073 9.76827C26.0272 10.0818 26.2165 10.4009 26.5301 10.481C30.9397 11.6066 34.0196 15.5757 34.0196 20.133C34.0196 25.6795 29.5149 30.0939 24.0586 30.0939C18.5984 30.0939 14.0977 25.6758 14.0977 20.133C14.0977 15.5757 17.1773 11.6066 21.5869 10.481C21.9005 10.4009 22.0898 10.0818 22.0099 9.76827C21.9298 9.4547 21.6109 9.26541 21.2971 9.34552ZM19.7833 37.0112L18.6318 33.7663C18.5339 33.4903 18.2473 33.3289 17.9605 33.3884L14.7188 34.0616L17.5126 29.1379C19.1415 30.3221 21.0703 31.0435 23.076 31.2221L19.7833 37.0112ZM30.1565 33.3884C29.8699 33.3289 29.5831 33.4903 29.4852 33.7663L28.3339 37.0112L25.041 31.2221C27.0469 31.0435 28.9755 30.3221 30.6046 29.1379L33.3984 34.0616L30.1565 33.3884Z"
												fill="#12CA9E"
											/>
										</g>
									</svg>
								</div>
								<div class="flex-grow-1 ms-3">
									<p class="text-muted mb-1"><small>May, 2021</small></p>
									<h4 class="fs-4 mb-0 text-clr-green">$56,9875.00</h4>
								</div>
							</div>
						</div>
						<div class="performing-wedget mb-4">
							<p class="mb-3 text-dark">Weakest Month</p>
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0">
									<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect opacity="0.1" width="48" height="48" rx="10" fill="#ED1B1B" />
										<path
											d="M30.1738 26.1863C32.3287 24.4048 33.7041 21.7123 33.7041 18.7046C33.7041 13.3535 29.3506 9 23.9995 9C18.6484 9 14.2949 13.3535 14.2949 18.7046C14.2949 21.7123 15.6704 24.4048 17.8252 26.1863V29.3429H15.1152V31.7924L23.9995 39L32.8838 31.7924V29.3428H30.1738V26.1863ZM16.0527 18.7046C16.0527 14.3227 19.6176 10.7578 23.9995 10.7578C28.3814 10.7578 31.9463 14.3227 31.9463 18.7046C31.9463 23.0865 28.3814 26.6514 23.9995 26.6514C19.6176 26.6514 16.0527 23.0865 16.0527 18.7046ZM30.9464 31.1007L23.9995 36.7365L17.0526 31.1006H19.583V27.3447C20.9085 28.025 22.41 28.4092 23.9995 28.4092C25.589 28.4092 27.0905 28.025 28.416 27.3447V31.1006H30.9464V31.1007Z"
											fill="#ED1B1B"
										/>
										<path
											d="M23.4981 19.5836H24.5033C25.0278 19.5836 25.4545 20.0102 25.4545 20.5347C25.4545 21.0592 25.0278 21.4859 24.5033 21.4859H23.4802C22.9736 21.4859 22.5615 21.0737 22.5615 20.5671H20.8037C20.8037 21.9214 21.8149 23.0432 23.1217 23.2189V24.4703H24.8795V23.2169C26.1957 23.0331 27.2122 21.9006 27.2122 20.5346C27.2122 19.0409 25.997 17.8257 24.5033 17.8257H23.498C22.9736 17.8257 22.5469 17.399 22.5469 16.8745C22.5469 16.3501 22.9736 15.9234 23.498 15.9234H24.4802C25.0053 15.9234 25.4326 16.3505 25.4326 16.8756H27.1904C27.1904 15.517 26.1852 14.3889 24.8795 14.1952V12.939H23.1217V14.1924C21.8055 14.3762 20.7891 15.5087 20.7891 16.8746C20.7891 18.3683 22.0044 19.5836 23.4981 19.5836Z"
											fill="#ED1B1B"
										/>
									</svg>
								</div>
								<div class="flex-grow-1 ms-3">
									<p class="text-muted mb-1"><small>jun, 2021</small></p>
									<h4 class="fs-4 mb-0 text-clr-red">$10,75.00</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	export default {
		name: "cashBalanceDetails",
		components: {
			PageTitle,
		},
		data() {
			return {
				showCashBalanceMonthWise: false,
				cashBalanceWidgetTable: [
					{ month: "Jun", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Feb", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "March", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Apr", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "May", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Jun", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Aug", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Oct", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Sept", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Nov", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
					{ month: "Dec", opening: "$981506354", closing: "$98545245", amount: "0.00 (0%)" },
				],
				apexDonutChart: {
					series: [70, 30],
					chartOptions: {
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
				},
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
							categories: ["Jun", "Feb", "March", "Apr", "May", "Jun", "July", "Aug", "Oct", "Sept", "Nov", "Dec"],
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
			};
		},
	};
</script>

<style lang="scss" scoped>
	.cashBalanceWidgetTable {
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
			font-weight: 500;

			tr {
				cursor: pointer;
			}
		}
	}
</style>
