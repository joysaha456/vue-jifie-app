<template>
	<ApplicationDetailsModal :showModal="showModal" @modalEmit="modalEmit" />
	<div class="applicationUsagesHistory px-4 py-4 bg-white is-drop-shadow is-theme-lg-radius">
		<div class="usage-history-header d-flex align-items-center justify-content-between">
			<h5 class="jifie-card-title d-flex align-items-center">
				<span class="me-2 flex-shirnk-0 me-3">Line of Credit</span>
				<span class="fs-3 fw-bold">$50,000</span>
			</h5>
			<button @click="usagesHistoryShow = !usagesHistoryShow" class="btn btn-jifie px-4 py-2 is-theme-radius">
				{{ usagesHistoryShow ? " Uses History" : "Detailed Usage" }}
			</button>
		</div>
		<div v-if="usagesHistoryShow" class="usages-history-table mt-4 is-scrollable" style="--max-height: 450px">
			<table class="table align-middle mb-0">
				<thead>
					<tr>
						<th class="py-3 w-50 text-uppercase">Name</th>
						<th class="py-3 w-25 text-uppercase">Invoices</th>
						<th class="py-3 text-uppercase">Approved</th>
						<th class="py-3 text-uppercase">&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data, index) in usagesHistoryTableData" :key="index">
						<td class="py-3 text-dark">{{ data.name }}</td>
						<td class="py-3 text-dark">{{ data.invoices }}</td>
						<td class="py-3 text-dark">{{ data.approved }}</td>
						<td class="py-3 text-end text-dark">
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
		name: "ApplicationUsagesHistory",
        components: {
            ApplicationDetailsModal,
        },
        methods: {
            modalEmit(value) {
				this.showModal = value;
			},
        },
		data() {
			return {
                showModal : false,
				usagesHistoryShow: false,
				usagesHistoryTableData: [
					{
						name: "This here is some placeholder text,",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "Simple solution would be to debounce",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "Its because your are setting loading",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "user stops typing (delayed execution)",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "As a solution, you might consider",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "I updated the example snippet",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "Simple solution would be to debounce",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "Its because your are setting loading",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "user stops typing (delayed execution)",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "As a solution, you might consider",
						invoices: "$779.58",
						approved: "$30.58",
					},
					{
						name: "I updated the example snippet",
						invoices: "$779.58",
						approved: "$30.58",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.usages-history-table {
		.table {
			table-layout: fixed;
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

			> :not(caption) > * > * {
				border-color: #f0f0f0;
			}
		}
	}
</style>
