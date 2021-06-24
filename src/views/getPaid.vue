<template>
	<div class="get-paid">
		<div class="container-fluid">
			<PageTitle title="Get Paid" />
			<div class="row">
				<div class="col-xxl-3">
					<div class="mb-4">
						<Clients />
					</div>
				</div>
				<div class="col-xxl-6">
					<div class="mb-4">
						<CalculatePanel />
					</div>
					<div class="mb-4">
						<InvoiceTable />
					</div>
				</div>
				<div class="col-xxl-3">
					<div class="mb-4">
						<History />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import Clients from "@/components/getPaid/Clients";
	import CalculatePanel from "@/components/getPaid/CalculatePanel";
	import InvoiceTable from "@/components/getPaid/InvoiceTable";
	import History from "@/components/getPaid/History";
	export default {
		components: {
			PageTitle,
			Clients,
			CalculatePanel,
			InvoiceTable,
			History,
		},
	};
</script>

<style lang="scss" scoped></style>
