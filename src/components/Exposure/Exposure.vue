<template>
	<div class="exposure bg-white px-4 py-4 is-theme-lg-radius">
		<div class="exposure-header d-flex align-items-center justify-content-between mb-4">
			<h5 class="jifie-card-title">Exposure</h5>
			<select class="form-select">
				<option selected>All Prdocuts</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class="row">
			<div class="col-xl-6">
				<div class="pie-chart pt-5">
					<apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
				</div>
			</div>
			<div class="col-xl-6">
				<div class="transactions-wrapper bg-light px-3 py-4 is-theme-lg-radius">
					<h5 class="transactions-title text-dark mb-4">Transactions</h5>
					<ul v-if="transactions" class="transactions-list list-unstyled ps-0 mb-3 is-scrollable" style="--max-height : 300px">
						<li v-for="transaction in transactions" :key="transaction.id" class="transactions-list-item">
							<img :src="transaction.image" alt="img" class="transaction-user img-fluid" />
							<h6 class="mb-0 transaction-user-name">{{ transaction.name }}</h6>
							<h6
								:class="transaction.status === 'positive' ? 'text-clr-green' : transaction.status === 'negative' ? 'text-danger' : null"
								class="mb-0 transaction-amount text-end"
							>
								{{ transaction.balance }}
							</h6>
						</li>
					</ul>
					<router-link to="/all-transactions" class="btn px-1 d-flex align-items-center text-clr-green text-decoration-none">
						See All Transactions
						<span class="ni ni-arrow-right fs-4 ms-1"></span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "Exposure",
		data() {
			return {
				series: [40, 30, 30],
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
						width: 6,
					},
					colors: ["#5667F5", "#12CA9E", "#FFA4BF"],
					plotOptions: {
						pie: {
							expandOnClick: true,
						},
						donut: {
							size: "65%",
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
				transactions: [
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Philips Lawrence",
						balance: "-$500.25",
						status: "negative",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cameron Williamson",
						balance: "$1500.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Wade Warren",
						balance: "$220.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cody Fisher",
						balance: "$150.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Philips Lawrence",
						balance: "-500.25",
						status: "negative",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cameron Williamson",
						balance: "$1500.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Wade Warren",
						balance: "$220.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cody Fisher",
						balance: "$150.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Philips Lawrence",
						balance: "$500.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cameron Williamson",
						balance: "$1500.25",
						status: "positive",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Wade Warren",
						balance: "-$220.25",
						status: "negative",
					},
					{
						id: Date.now(),
						image:
							"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
						name: "Cody Fisher",
						balance: "$150.25",
						status: "positive",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.exposure {
		.exposure-header {
			.form-select {
				--width: 150px;
				max-width: var(--width);
			}
		}
		.transactions-wrapper {
			.transactions-list {
				.transactions-list-item {
					padding: 10px 0;
					--grid-first: 30px;
					display: grid;
					grid-template-columns: 30px 1fr 100px;
					grid-column-gap: 10px;
					align-items: center;

					&:first-child {
						padding-top: 0;
					}
					&:last-child {
						padding-bottom: 0;
					}

					.transaction-user {
						width: var(--grid-first);
						height: var(--grid-first);
						border-radius: 100%;
						object-fit: cover;
						object-position: top;
					}

					+ .transactions-list-item {
						border-top: 1px solid rgba(5, 64, 90, 0.1);
					}
				}
			}
		}
	}
</style>
