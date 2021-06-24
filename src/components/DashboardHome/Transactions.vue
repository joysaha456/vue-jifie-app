<template>
	<div class="transactions bg-white is-theme-lg-radius px-4 py-4">
		<div class="transactions-header d-flex align-items-center justify-content-between mb-4">
			<h5 class="jifie-card-title mb-2">Transactions</h5>
			<button type="button" class="btn btn-danger">Disconnect</button>
		</div>
		<div class="transaction-statement bg-light is-theme-lg-radius px-4 py-4 mb-4">
			<div class="row align-items-center">
				<div class="col-xxl-2 col-xl-3">
					<div class="bank-logo">
						<img src="../../assets/images/hooli-bank.svg" alt="img" class="img-fluid" />
					</div>
				</div>
				<div class="col-xxl-5 col-xl-6">
					<div class="form-group d-flex align-items-center">
						<label for="bank-account" class="me-2 text-nowrap fs-6 text-muted">Select Accout :</label>
						<select
							v-model="selectedAccount"
							@change="handleChangeBankAccount"
							name="bank-account"
							id="bank-account"
							class="form-select border-0 py-2 fs-6 text-muted"
						>
							<option selected value="1">Checking Account - 845-6934-5001</option>
							<option value="2">Checking Account - 645-8455-61502</option>
							<option value="3">Checking Account - 8948-742-403</option>
							<option value="4">Checking Account - 9+898-745-404</option>
						</select>
					</div>
				</div>
				<div class="col-xxl-5 col-xl-3">
					<div class="avarage-income text-end">
						<p class="mb-0"><small>Avarage Income/m</small></p>
						<h5 class="mb-1 text-clr-green">$9,875.00</h5>
					</div>
				</div>
			</div>
		</div>
		<div v-if="tableData" class="transaction-table table-responsive is-scrollable" style="--max-height: 475px">
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
						<td scope="row" class="py-4">
							<p class="mb-0 text-nowrap text-dark client-name">{{ row.clientName }}</p>
						</td>
						<td class="py-4">
							<p class="mb-0 text-nowrap text-dark due-date">{{ row.dueDate }}</p>
						</td>
						<td class="py-4">
							<p class="mb-0 text-nowrap text-dark value-date">{{ row.valueDate }}</p>
						</td>
						<td class="py-4">
							<p class="mb-0 text-nowrap text-danger fw-bold text-end">{{ row.amount }}</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Transactions",
		data() {
			return {
				selectedAccount: "1",
				tableData: {
					tableColumns: ["Client", "Due Date", "Value Date", "AMOUNT"],
					tableRows: [],
				},
			};
		},
		mounted() {
			this.handleTableRows(this.selectedAccount.toString());
		},
		methods: {
			handleChangeBankAccount() {
				this.handleTableRows(this.selectedAccount.toString());
			},
            
			handleTableRows(acc) {
				let Account1 = [
					{
						id: Date.now(),
						clientName: "MC Donald ",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Jane Cooper",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Savannah Nguyen",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Annette Black",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Darrell Steward",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Annette Black",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Darrell Steward",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
				];

				let Account2 = [
					{
						id: Date.now(),
						clientName: "MC Donald ",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Jane Cooper",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Savannah Nguyen",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
				];

				let Account3 = [
					{
						id: Date.now(),
						clientName: "MC Donald ",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Jane Cooper",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Savannah Nguyen",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Jane Cooper",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Savannah Nguyen",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
				];

				let Account4 = [
					{
						id: Date.now(),
						clientName: "MC Donald ",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Jane Cooper",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
					{
						id: Date.now(),
						clientName: "Savannah Nguyen",
						dueDate: "Fri , 17 Jan 2020",
						valueDate: "Fri , 17 Jan 2020",
						amount: "$106.58",
					},
				];

				if (acc === "1") {
					this.tableData.tableRows = Account1;
				}

				if (acc === "2") {
					this.tableData.tableRows = Account2;
				}

				if (acc === "3") {
					this.tableData.tableRows = Account3;
				}

				if (acc === "4") {
					this.tableData.tableRows = Account4;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.transaction-table {
		table.table {
			@media (min-width: 992px) {
				table-layout: fixed;
			}
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
				color: var(--theme-clr-green);
				font-weight: 600;

				&:nth-child(1) {
					width: 40%;
				}
				&:nth-child(2) {
					width: 25%;
				}

				&:last-child {
					text-align: right;
				}
			}
		}

		.table > :not(caption) > * > * {
			border-color: #f0f0f0;
		}
	}
</style>
