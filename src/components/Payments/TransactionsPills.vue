<template>
	<div class="pay-TransactionsPills">
		<h5 class="jifie-card-title mb-4">Transaction</h5>
		<nav class="TransactionsNavPills">
			<div class="nav nav-pills flex-column flex-sm-row flex-sm-nowrap mb-3" role="tablist">
				<button
					class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4 active"
					data-bs-toggle="pill"
					data-bs-target="#pills-1"
					type="button"
					role="tab"
					aria-selected="true"
				>
					<p class="mb-2 pills-sub-title text-muted">Payments yet to be received (Payments Overdue)</p>
					<h3 class="mb-0 pills-title text-dark">$56,985.00</h3>
				</button>
				<button
					class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
					data-bs-toggle="pill"
					data-bs-target="#pills-2"
					type="button"
					role="tab"
					aria-selected="false"
				>
					<p class="mb-2 pills-sub-title text-muted">Payments yet to be received</p>
					<h3 class="mb-0 pills-title text-dark">$15,620.00</h3>
				</button>
				<button
					class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
					data-bs-toggle="pill"
					data-bs-target="#pills-3"
					type="button"
					role="tab"
					aria-selected="false"
				>
					<p class="mb-2 pills-sub-title text-muted">Money yet to be paid out (Payments Overdue)</p>
					<h3 class="mb-0 pills-title text-dark">$56,985.00</h3>
				</button>
				<button
					class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
					data-bs-toggle="pill"
					data-bs-target="#pills-4"
					type="button"
					role="tab"
					aria-selected="false"
				>
					<p class="mb-2 pills-sub-title text-muted">Money yet to be paid out</p>
					<h3 class="mb-0 pills-title text-dark">$56,985.00</h3>
				</button>
			</div>
		</nav>
		<div class="tab-content bg-white px-4 py-4 is-theme-lg-radius mt-4">
			<div class="tab-pane show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
				<h4 class="table-caption fs-5 mb-4">Payments yet to be received (Payments Overdue)</h4>
				<div v-if="paymentsTable" class="payment-receive-table table-responsive is-scrollable" style="--max-height : 600px">
					<table class="table">
						<thead>
							<tr>
								<th class="py-3">Name</th>
								<th class="py-3">Invoice Date</th>
								<th class="py-3">Due Date</th>
								<th class="py-3">Days Late</th>
								<th class="py-3">Behaviour</th>
								<th class="py-3">Value</th>
								<th class="py-3">&nbsp;</th>
							</tr>
						</thead>
						<tbody v-if="paymentsTable">
							<tr v-for="(item, index) in paymentsTable" :key="index">
								<td class="py-3 d-flex align-items-center">
									<img src="../../assets/images/user-2.png" alt="userImg" class="img-fluid flex-shrink-0 me-2" />
									<p class="mb-0">{{ item.name }}</p>
								</td>
								<td class="py-3">{{ item.invoiceDate }}</td>
								<td class="py-3">{{ item.dueDate }}</td>
								<td class="py-3">{{ item.daysLate }}</td>
								<td class="py-3">{{ item.behaviour }}</td>
								<td class="py-3">{{ item.value }}</td>
								<td class="py-3">
									<div class="dropdown spill-down-action">
										<button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M4.83268 2.99984C4.83268 4.15043 3.89994 5.08317 2.74935 5.08317C1.59876 5.08317 0.666016 4.15043 0.666016 2.99984C0.666016 1.84924 1.59876 0.916504 2.74935 0.916504C3.89994 0.916504 4.83268 1.84924 4.83268 2.99984Z"
													fill="#79828D"
												/>
												<path
													d="M11.0827 2.99984C11.0827 4.15043 10.1499 5.08317 8.99935 5.08317C7.84876 5.08317 6.91602 4.15043 6.91602 2.99984C6.91602 1.84924 7.84876 0.916504 8.99935 0.916504C10.1499 0.916504 11.0827 1.84924 11.0827 2.99984Z"
													fill="#79828D"
												/>
												<path
													d="M17.3327 2.99984C17.3327 4.15043 16.3999 5.08317 15.2493 5.08317C14.0988 5.08317 13.166 4.15043 13.166 2.99984C13.166 1.84924 14.0988 0.916504 15.2493 0.916504C16.3999 0.916504 17.3327 1.84924 17.3327 2.99984Z"
													fill="#79828D"
												/>
											</svg>
										</button>
										<ul class="dropdown-menu px-0 py-3">
											<li>
												<a class="dropdown-item d-flex align-items-center" href="#">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-pen me-2"
														viewBox="0 0 16 16"
													>
														<path
															d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
														/>
													</svg>
													<span class="spill-down-text">Edit</span>
												</a>
											</li>
											<li>
												<a class="dropdown-item d-flex align-items-center" href="#">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-trash me-2"
														viewBox="0 0 16 16"
													>
														<path
															d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
														/>
														<path
															fill-rule="evenodd"
															d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
														/>
													</svg>
													<span class="spill-down-text">Delete</span>
												</a>
											</li>
										</ul>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="pagination-theme mt-5">
					<Pagination v-model="paginate.page" :records="500" :per-page="10" :options="paginate.options" @paginate="paginateCallback($event)" />
				</div>
			</div>
			<div class="tab-pane" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
				<h5 class="text-dark fs-3">Tab-pane 2</h5>
			</div>
			<div class="tab-pane" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
				<h5 class="text-dark fs-3">Tab-pane 3</h5>
			</div>
			<div class="tab-pane" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
				<h5 class="text-dark fs-3">Tab-pane 4</h5>
			</div>
		</div>
	</div>
</template>

<script>
	import Pagination from "v-pagination-3";
	export default {
		name: "TransactionsPills",
		components: {
			Pagination,
		},
		data() {
			return {
				paginate: {
					page: 1,
					options: {
						chunk: 5,
					},
				},
				paymentsTable: [
					{
						name: "Kristin Watson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Leslie Alexander",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Courtney Henry",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Darlene Robertson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Esther Howard",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Kristin Watson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Savannah Nguyen",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Jenny Wilson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Kristin Watson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Leslie Alexander",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Courtney Henry",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Darlene Robertson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Esther Howard",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Kristin Watson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Savannah Nguyen",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
					{
						name: "Jenny Wilson",
						userImgUrl: "",
						invoiceDate: "2 Aug, 2020",
						dueDate: "3 Aug, 2020",
						daysLate: "20",
						behaviour: "Pays 7 days after the due date",
						value: "$854.08",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.pay-TransactionsPills {
		.TransactionsNavPills {
			.nav-pills {
				column-gap: 30px;
				row-gap: 10px;
				flex-basis: 0;
				.nav-link {
					border-radius: 20px;
					font-weight: 500;
					flex-basis: 0 !important;
					transition: var(--theme-transition);
					position: relative;

					.pills-title {
						transition: var(--theme-transition);
					}

					&:hover {
						.pills-title {
							color: var(--theme-clr-green) !important;
						}
					}

					&.active {
						.pills-title {
							color: var(--theme-clr-green) !important;
						}

						border-bottom-right-radius: 0 !important;
						border-bottom-left-radius: 0 !important;

						&::after {
							content: "";
							display: block;
							position: absolute;
							top: calc(100% - 20px);
							left: 0;
							right: 0;
							height: 60px;
							background: #fff;
							width: 100%;
							transition: var(--theme-transition);
						}

						&::before {
							content: "";
							display: block;
							width: 60px;
							height: 60px;
							position: absolute;
							top: calc(100% - 30px);
							right: -50px;
							background: #fff;
							clip-path: polygon(10% 26%, 26% 55%, 45% 74%, 63% 86%, 100% 100%, 0 100%, 0 0);
							transition: var(--theme-transition);
						}
					}

					&:last-child {
						&::before {
							left: -50px;
							right: initial;
							transform: rotate(-100deg);
						}
					}
				}
			}
		}
		.payment-receive-table {
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
				table-layout: auto;
				font-weight: 500;
				color: #79828d;
				font-size: 14px;
			}
		}
	}
</style>
