<template>
	<div class="BudgetWidgetDetailsModal">
		<vue-final-modal
			@click-outside="emitShowModal"
			v-model="showModal"
			classes="vue-modal-container vue-modal-md"
			content-class="vue-modal-content is-theme-radius py-4 px-4"
		>
			<div class="vue-modal-header d-flex align-items-center justify-content-between">
				<h5 class="vue-modal-header-title mb-0">Budget Details</h5>
				<button class="btn px-0 py-0 vue-modal-close" @click="emitShowModal">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="vue-modal-body mt-4">
				<div class="BudgetWidgetDetailsModal-body">
					<ul class="nav nav-pills nav-pills-outline mb-3" role="tablist">
						<li class="nav-item" role="presentation">
							<button
								class="nav-link px-0 mx-4 ms-0 active"
								data-bs-toggle="pill"
								data-bs-target="#budget-1"
								type="button"
								role="tab"
								aria-controls="pills-budget"
								aria-selected="true"
							>
								Budget
							</button>
						</li>
						<li class="nav-item" role="presentation">
							<button
								class="nav-link px-0"
								data-bs-toggle="pill"
								data-bs-target="#transaction-1"
								type="button"
								role="tab"
								aria-controls="pills-transaction"
								aria-selected="false"
							>
								Transaction
							</button>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane show active" id="budget-1" role="tabpanel" aria-labelledby="pills-budget-tab">
							<div class="budget-1-panel mt-4">
								<p class="mb-3 text-muted">This is how your new budget will look like. Add in data and see it magically self create</p>
								<div class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
									<div class="budget-widget-header d-flex align-items-center justify-content-between">
										<p class="text-dark d-flex align-items-center text-muted mb-0 me-4 me-xxl-5">
											<svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M12 24C18.627 24 24 18.627 24 12C24 5.37305 18.627 0 12 0C5.373 0 0 5.37305 0 12C0 18.627 5.373 24 12 24Z"
													fill="#2D405A"
												/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.0431L10.5 21L12 13.9569H6L13.5 3L12 10.0431H18Z" fill="white" />
											</svg>
											Abc Privet Limited
										</p>
										<span class="budget-widget-date text-muted">3 Aug, 2020</span>
									</div>
									<div class="budget-widget-body mt-4">
										<div class="d-flex align-items-center">
											<div class="flex-shrink-0">
												<apexchart width="80" type="donut" :options="chartOptions" :series="chartSeries"></apexchart>
											</div>
											<div class="flex-grow-1 ms-2">
												<h3 class="widget-body-title mb-1">$218,442.49 <sub class="fs-6">Spent</sub></h3>
												<p class="mb-0 text-muted">out of <strong>$34,5875.51</strong></p>
											</div>
										</div>
									</div>
								</div>
								<form action="#" class="mt-4">
									<div class="form-group mb-3">
										<label for="#" class="form-label">Budget Occurrence</label>
										<select class="form-select">
											<option selected value="fixed">Fixed</option>
											<option value="monthly">Monthly</option>
										</select>
									</div>
									<div class="row">
										<div class="col-6">
											<div class="form-group mb-3">
												<label for="#" class="form-label">Start Date</label>
												<input type="date" class="form-control" placeholder="02/04/21" />
											</div>
										</div>
										<div class="col-6">
											<div class="form-group mb-3">
												<label for="#" class="form-label">End Date</label>
												<input type="date" class="form-control" placeholder="02/04/21" />
											</div>
										</div>
									</div>
									<div class="form-group mb-3">
										<label for="#" class="form-label">Budget Value</label>
										<input type="text" class="form-control" placeholder="$218,442.49" />
									</div>
									<div class="form-group text-end mt-4">
										<button type="submit" class="btn btn-jifie px-4 py-2">Save Budget</button>
									</div>
								</form>
							</div>
						</div>
						<div class="tab-pane" id="transaction-1" role="tabpanel" aria-labelledby="pills-transaction-tab">
							<div class="budget-1-panel mt-4">
								<p class="mb-3 text-muted">Add your individual transactions/expenses attached to this budget</p>
								<div class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
									<div class="budget-widget-header d-flex align-items-start justify-content-between">
										<p class="text-dark d-flex align-items-center text-muted mb-0 me-4 me-xxl-5">
											<svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M12 24C18.627 24 24 18.627 24 12C24 5.37305 18.627 0 12 0C5.373 0 0 5.37305 0 12C0 18.627 5.373 24 12 24Z"
													fill="#2D405A"
												/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.0431L10.5 21L12 13.9569H6L13.5 3L12 10.0431H18Z" fill="white" />
											</svg>
											Abc Privet Limited
										</p>
										<div class="widget-header-inner">
											<h4 class="mb-2 widget-total fs-6">Total</h4>
											<h4 class="widget-total-amount text-clr-red fs-3">$218,442.49</h4>
										</div>
									</div>
								</div>
								<div class="budget-transaction-table">
									<div v-if="budgetTransactionTable" class="status-table table-responsive is-scrollable" style="--max-height : 300px">
										<table class="table">
											<thead>
												<tr>
													<th class="py-3">Date</th>
													<th class="py-3">Description</th>
													<th class="py-3">Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(data, index) in budgetTransactionTable" :key="index">
													<td class="py-3">{{ data.date }}</td>
													<td class="py-3">{{ data.desc }}</td>
													<td class="py-3">{{ data.amount }}</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="pagination-theme mt-4">
										<Pagination
											v-model="paginate.page"
											:records="500"
											:per-page="10"
											:options="paginate.options"
											@paginate="paginateCallback($event)"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</vue-final-modal>
	</div>
</template>

<script>
	import Pagination from "v-pagination-3";
	export default {
		name: "BudgetWidgetDetailsModal",
		components: {
			Pagination,
		},
		data() {
			return {
				paginate: {
					page: 1,
					options: {
						chunk: 3,
					},
				},
				budgetTransactionTable: [
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
					{ date: "2 Aug, 2020", desc: "Hozo Tech works", amount: "$2,390.92" },
				],
			};
		},
		props: {
			showModal: {
				type: Boolean,
				default: false,
			},
			modalEmit: Function,
			chartSeries: Array,
			chartOptions: Object,
		},
		methods: {
			emitShowModal() {
				this.$emit("modalEmit", false);
			},
			paginateCallback($event) {
				console.log($event);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.budget-transaction-table {
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
		}
	}
</style>
