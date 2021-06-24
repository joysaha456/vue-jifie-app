<template>
	<section class="my-offer">
		<div class="container-fluid">
			<PageTitle title="My Offer" />
			<div class="row">
				<div class="col-xxl-8">
					<div class="approved-credit-limit is-theme-lg-radius bg-white px-4 pt-4 pb-5 mb-4">
						<div class="area-chart-hwead d-flex align-items-center justify-content-between mb-5">
							<h5 class="jifie-card-title mb-0">Cash Balance</h5>
							<button type="button" class="btn btn-jifie px-4 py-2">Submit New Application</button>
						</div>
						<div class="row">
							<div class="col-xxl-8">
								<div class="d-flex justify-content-between">
									<div class="credit-limit-card pe-5">
										<p class="title mb-2 text-clr-blue-solid">Approved</p>
										<h4 class="mb-0 text-dark fw-bold">$50,000</h4>
									</div>
									<div class="credit-limit-card px-5 border-start">
										<div class="px-4">
											<p class="title mb-2 text-clr-maroon">Used</p>
											<h4 class="mb-0 text-dark fw-bold">$26,864</h4>
										</div>
									</div>
									<div class="credit-limit-card ps-5 border-start">
										<div class="px-4 px-xxl-5">
											<p class="title mb-2 text-clr-green">Available</p>
											<h4 class="mb-0 text-dark fw-bold">$32,000</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mb-4">
						<Exposure />
					</div>
				</div>
				<div class="col-xxl-4">
					<div class="mb-4">
						<Feed />
					</div>
					<div class="mb-4">
						<ScoreSummary />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import Feed from "@/components/Feed/Feed.vue";
	import Exposure from "@/components/Exposure/Exposure.vue";
	import ScoreSummary from "@/components/ScoreSummary/ScoreSummary.vue";
	export default {
		name: "MyOffer",
		components: {
			PageTitle,
			Feed,
			Exposure,
			ScoreSummary
		},
	};
</script>

<style lang="scss" scoped>
</style>
