<template>
	<div class="invoiceTable bg-white px-4 py-4 is-theme-lg-radius">
		<div class="invoiceTable-header mb-4">
			<h5 class="jifie-card-title mb-1">Invoices</h5>
		</div>
		<div class="invoice-table-wrapper table-responsive is-scrollable mb-4" style="--max-height : 450px">
			<table class="table table-hover">
				<thead>
					<tr>
						<th class="py-4">Invoice ID</th>
						<th class="py-4">Due Date</th>
						<th class="py-4">Status</th>
						<th class="py-4">AMOUNT</th>
					</tr>
				</thead>
				<tbody v-if="invoiceTableData">
					<tr v-for="(item, index) in invoiceTableData" :key="index">
						<td class="py-4">{{ item.invoiceId }}</td>
						<td class="py-4">{{ item.dueDate }}</td>
						<td class="py-4">
                            <span class="badge" :class="item.status.toLowerCase() === 'paid' ? 'bg-success' : 'bg-danger' "> {{item.status}} </span>
                        </td>
						<td class="py-4">{{ item.amount }}</td>
					</tr>
				</tbody>
			</table>
		</div>
       <div class="mb-4">
            <CreateCampaign />
       </div>
	</div>
</template>

<script>
	import Pagination from "v-pagination-3";
    import CreateCampaign from "@/components/getPaid/CreateCampaign.vue";
	export default {
		name: "InvoiceTable",
		components: {
			Pagination,
            CreateCampaign
		},
		data() {
			return {
				invoiceTableData: [
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Overdue" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Paid" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Overdue" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Paid" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Overdue" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Overdue" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Paid" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Paid" , amount : '$630.44' },
					{ invoiceId: "5grt8daf52", dueDate: "26 may 2021", status: "Overdue" , amount : '$630.44' },
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.invoiceTable {
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
