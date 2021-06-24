<template>
	<div class="payments">
		<div class="container-fluid">
			<PageTitle title="Payments" />
			<div class="row">
				<div class="col-lg-6">
					<div class="mb-4" id="payment-invoices">
						<Invoices :cardData="invoiceData" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-4" id="payment-payouts">
						<Invoices :cardData="payoutsData" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-4">
						<Suggestions :suggestedData="clearingPayments" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-4">
						<Suggestions :suggestedData="supplierPayments" />
					</div>
				</div>
			</div>
			<div class="mb-4" id="payment-transaction">
				<TransactionsPills />
			</div>
			<div class="mb-4" id="payment-client-status">
				<ClientStatusTable />
			</div>
		</div>
	</div>
</template>


<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import Invoices from "@/components/Payments/Invoices.vue";
	import Suggestions from "@/components/Payments/Suggestions.vue";
	import ClientStatusTable from "@/components/Payments/ClientStatusTable.vue";
	import TransactionsPills from "@/components/Payments/TransactionsPills.vue";
	export default {
		name: "Payments",
		data() {
			return {
				invoiceData: {
					cardTitle: "Invoices",
					cardSubTitle: "The cash you are owed",
					cardOverview: [
						{
							id: Date.now(),
							title: "Card overview title",
							payment: "02",
							status: "success",
						},
						{
							id: Date.now(),
							title: "Card overview title",
							payment: "$65213",
							status: "success",
						},
					],
				},
				payoutsData: {
					cardTitle: "Payouts",
					cardSubTitle: "The cash that you have to payout.",
					cardOverview: [
						{
							id: Date.now(),
							title: "Pending Payouts",
							payment: "02",
							status: "danger",
						},
						{
							id: Date.now(),
							title: "Overdue Amount",
							payment: "$65213",
							status: "danger",
						},
					],
				},
				clearingPayments: {
					cardTitle: "Suggestions",
					cardSubTitle: "Clearing payments of 0.00 these 0 invoices will help meet your goals for this month.",
					cardOverview: [
						{
							id: Date.now(),
							title: "Company Private Ltd",
							payment: "$293.01",
							status: "success",
						},
						{
							id: Date.now(),
							title: "Etiz Pvt Ltd",
							payment: "$65213",
							status: "success",
						},
						{
							id: Date.now(),
							title: "Btiz Pvt Ltd",
							payment: "$65213",
							status: "success",
						},
					],
				},
				supplierPayments: {
					cardTitle: "Suggestions",
					cardSubTitle: "Here are the most critical supplier payments that needs your attention",
					cardOverview: [
						{
							id: Date.now(),
							title: "Company Private Ltd",
							payment: "$293.01",
							status: "danger",
						},
						{
							id: Date.now(),
							title: "Etiz Pvt Ltd",
							payment: "$65213",
							status: "danger",
						},
						{
							id: Date.now(),
							title: "Btiz Pvt Ltd",
							payment: "$65213",
							status: "danger",
						},
					],
				},
			};
		},
		components: {
			PageTitle,
			Invoices,
			Suggestions,
			ClientStatusTable,
			TransactionsPills,
		},
		mounted() {
			this.$store.dispatch("paymentsDropdownAction", { status: true });
		},
		unmounted() {
			this.$store.dispatch("paymentsDropdownAction", { status: false });
		},
	};
</script>

<style lang="scss" scoped></style>
