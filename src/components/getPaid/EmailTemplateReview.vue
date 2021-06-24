<template>
	<div class="EmailTemplateReview">
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Review</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="$emit('closeCreateCampaignModalTrigger')">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
			<div class="selected-invoice mb-4 table-responsive">
				<h6 class="vue-modal-header-title mb-3">Selected Invoice</h6>
				<table class="table table-layout-fixed table-borderless">
					<thead class="bg-light">
						<tr>
							<th class="py-3 px-3">5JGFU58</th>
							<th class="py-3 px-3">26 May, 2021</th>
							<th class="py-3 px-3"><span class="badge px-2 py-2 bg-danger">Overdue</span></th>
							<th class="py-3 px-3 text-clr-red">$630.44</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="progressing-week">
				<ul class="progressing-widgets list-unstyled mb-0 px-0 d-flex align-items-center justify-content-between">
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
					<li class="progressing-widget">
						<div class="progressing-circle"></div>
						<div class="progressing-line"></div>
					</li>
				</ul>
				<ul class="progressing-guideline mb-0 px-0 d-flex align-items-center mt-4">
					<li class="d-flex align-items-center me-4">
						<div class="guideline-cirle flex-shrink-0 me-3 unselected"></div>
						<p class="mb-0 text-muted">Unselected</p>
					</li>
					<li class="d-flex align-items-center me-4">
						<div class="guideline-cirle flex-shrink-0 me-3 in-porgress"></div>
						<p class="mb-0 text-muted">In Progress</p>
					</li>
					<li class="d-flex align-items-center me-4">
						<div class="guideline-cirle flex-shrink-0 me-3 d-flex align-items-center justify-content-center completed">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" class="bi bi-check" viewBox="0 0 16 16">
								<path
									d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
								/>
							</svg>
						</div>
						<p class="mb-0 text-muted">Completed</p>
					</li>
					<li class="d-flex align-items-center me-4">
						<div class="guideline-cirle flex-shrink-0 me-3 paused d-flex align-items-center justify-content-center">
							<small>!</small>
						</div>
						<p class="mb-0 text-muted">Paused</p>
					</li>
				</ul>
			</div>
			<div class="form-group text-end mt-5">
				<button type="button" class="btn btn-jifie px-4 py-2">Create Campaing</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "EmailTemplateReview",
	};
</script>

<style lang="scss" scoped></style>
