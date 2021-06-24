<template>
	<ApplicationDetailsModal :showModal="showModal" @modalEmit="modalEmit" />
	<div class="application px-4 py-4 bg-white is-drop-shadow is-theme-lg-radius">
		<div class="row mb-4 align-items-center">
			<div class="col-xl-6">
				<h5 class="jifie-card-title">Applications</h5>
			</div>
			<div class="col-xl-6">
				<div class="form-group text-end">
					<select
						v-model="selectedApplicationStatus"
						@change="handleChangeAppStatus"
						class="form-select d-inline-block select-summary"
						name="select-appication-status"
						id="select-appication-status"
					>
						<option selected>Approved</option>
						<option>Cancaled</option>
						<option>All</option>
					</select>
				</div>
			</div>
		</div>
		<div v-if="tableData" class="application-list-table table-responsive is-scrollable" style="--max-height: 475px">
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col" class="text-nowrap text-uppercase py-3" v-for="(column, index) in tableData.tableColumns" :key="index">
							{{ column }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="row in tableData.tableRows" :key="row.id">
						<td scope="row" class="py-3">
							<p class="mb-0 text-dark productType">{{ row.productType }}</p>
						</td>
						<td class="py-3">
							<p class="mb-0 text-dark amount">{{ row.amount }}</p>
						</td>
						<td class="py-3">
							<span
								class="badge"
								:class="
									row.status.toString() === 'success'
										? 'bg-success'
										: row.status.toString() === 'pending'
										? 'bg-warning'
										: row.status.toString() === 'cancaled'
										? 'bg-danger'
										: ''
								"
							>
								{{ row.statusText }}
							</span>
						</td>
						<td class="py-3">
							<p class="mb-0 text-dark repayment">{{ row.repayment }}</p>
						</td>
						<td class="py-3">
							<button @click="showModal = true" type="button" class="btn btn-outline-secondary is-theme-radius btn-action">
								<small>Details</small>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import ApplicationDetailsModal from "@/components/ApplicationLists/ApplicationDetailsModal.vue";
	export default {
		name: "Applications",
		components: {
			ApplicationDetailsModal,
		},
		data() {
			return {
				showModal: false,
				selectedApplicationStatus: "Approved",
				tableData: {
					tableColumns: ["Product type", "AMOUNT", "Status", "repayment", ""],
					tableRows: [],
				},
			};
		},
		methods: {
			modalEmit(value) {
				this.showModal = value;
			},
			setTableRows(status) {
				let appTableData = [
					{
						id: Date.now(),
						productType: "Asset or Equipment",
						amount: "$779.58",
						status: "success",
						statusText: "Approved",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Unsecured personal loans",
						amount: "$84565625.58",
						status: "cancaled",
						statusText: "cancaled",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Secured personal loans",
						amount: "$779.58",
						status: "success",
						statusText: "Approved",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Business Loan",
						amount: "$84565625.58",
						status: "cancaled",
						statusText: "cancaled",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Payday loans",
						amount: "$779.58",
						status: "success",
						statusText: "Approved",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Title loans",
						amount: "$84565625.58",
						status: "cancaled",
						statusText: "cancaled",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Pawn shop loans",
						amount: "$779.58",
						status: "success",
						statusText: "Approved",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Payday alternative loans",
						amount: "$84565625.58",
						status: "cancaled",
						statusText: "cancaled",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Home equity loans",
						amount: "$84565625.58",
						status: "cancaled",
						statusText: "cancaled",
						repayment: "$30.58",
					},
					{
						id: Date.now(),
						productType: "Credit card cash advances",
						amount: "$65625.58",
						status: "success",
						statusText: "Approved",
						repayment: "$30.58",
					},
				];

				if (status.toString().toLowerCase() === "all") {
					this.tableData.tableRows = appTableData;
				}

				if (status.toString().toLowerCase() === "approved") {
					let approvedApplication = appTableData.filter((data) => {
						if (data.status.toString().toLowerCase() === "success") {
							return {
								id: data.id,
								productType: data.productType,
								amount: data.amount,
								status: data.status,
								statusText: data.statusText,
								repayment: data.repayment,
							};
						}
					});
					this.tableData.tableRows = approvedApplication;
				}

				if (status.toString().toLowerCase() === "cancaled") {
					let cancledApplication = appTableData.filter((data) => {
						if (data.status.toString().toLowerCase() === "cancaled") {
							return {
								id: data.id,
								productType: data.productType,
								amount: data.amount,
								status: data.status,
								statusText: data.statusText,
								repayment: data.repayment,
							};
						}
					});
					this.tableData.tableRows = cancledApplication;
				}
			},

			handleChangeAppStatus() {
				this.setTableRows(this.selectedApplicationStatus);
			},
		},
		mounted() {
			this.setTableRows(this.selectedApplicationStatus);
		},
	};
</script>

<style lang="scss" scoped>
	.application-list-table {
		th,
		td {
			vertical-align: middle;
			font-size: 15px;
			color: var(--text-clr-gray);

			.fw-bold {
				font-weight: 600 !important;
			}
		}

		th {
			font-size: 14px !important;
			letter-spacing: 1px;
			color: var(--text-clr-gray);
			font-weight: 500;
		}

		.table > :not(caption) > * > * {
			border-color: #f0f0f0;
		}
	}
</style>
