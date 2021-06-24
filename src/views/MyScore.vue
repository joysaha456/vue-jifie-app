<template>
	<div class="my-score">
		<div class="container-fluid">
			<PageTitle title="My Score" />
			<div v-if="scoreBoard" class="score-board mb-4">
				<div class="row">
					<div v-for="score in scoreBoard" :key="score.id" class="col">
						<div class="score-board-card bg-white is-theme-lg-radius px-4 py-4">
							<h2 class="text-dark mb-2">{{ score.value }}</h2>
							<p class="mb-0 text-muted">{{ score.name }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xxl-8">
					<div class="mb-4">
						<ScoreSummaryBarChart />
					</div>
				</div>
				<div class="col-xxl-4">
					<div class="mb-4">
						<ScoreSummary />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import ScoreSummary from "@/components/ScoreSummary/ScoreSummary.vue";
	import ScoreSummaryBarChart from "@/components/ScoreSummaryBarChart/ScoreSummaryBarChart.vue";
	export default {
		name: "MyScore",
		data() {
			return {
				scoreBoard: [
					{ id: Date.now(), name: "Credit Enquiries", value: "06" },
					{ id: Date.now(), name: "Credit Defaults", value: "0" },
					{ id: Date.now(), name: "Court Actions", value: "0" },
					{ id: Date.now(), name: "Public Information", value: "04" },
					{ id: Date.now(), name: "Insolvency Notices", value: "01" },
				],
			};
		},
		components: {
			PageTitle,
			ScoreSummary,
			ScoreSummaryBarChart,
		},
	};
</script>

<style lang="scss" scoped></style>
