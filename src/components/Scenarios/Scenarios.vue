<template>
	<vue-final-modal
		v-model="showAddScenarioModal"
		@click-outside="showAddScenarioModal = false"
		classes="vue-modal-container vue-modal-sm"
		content-class="vue-modal-content is-theme-radius py-4 px-4"
	>
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Add Expected Income</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="showAddScenarioModal = false">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
			<form action="#">
				<div class="row">
					<div class="col-sm-6">
						<div class="form-group mb-3">
							<label for="#" class="mb-1 form-label">Income tyepe</label>
							<select class="form-select">
								<option value="1">Selling Equipment</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group mb-3">
							<label for="#" class="mb-1 form-label">Name</label>
							<input type="text" class="form-control" placeholder="e.g Sell office furniture" />
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group mb-3">
							<label for="#" class="mb-1 form-label">Purchase date</label>
							<input type="date" class="form-control" placeholder="e.g 25/05-2021" />
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group mb-3">
							<label for="#" class="mb-1 form-label">Amount ($)</label>
							<input type="text" class="form-control" placeholder="0.00" />
						</div>
					</div>
				</div>
				<div class="form-group text-end">
					<button type="submit" class="btn btn-jifie px-4 py-2">Submit</button>
				</div>
			</form>
		</div>
	</vue-final-modal>
	<div class="scenario bg-white is-theme-lg-radius px-4 py-4">
		<div class="scenario-header d-flex align-items-center justify-content-between mb-5">
			<h5 class="jifie-card-title mb-0">Scenarios</h5>
			<button @click="showAddScenarioModal = true" type="button" class="btn btn-outline-secondary px-4 py-2 border-2 is-theme-radius">
				Create New Scenario
			</button>
		</div>
		<div class="scenario-wedget bg-light is-theme-lg-radius px-3 py-3">
			<div class="scenario-wedget-header pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between">
				<h6 class="fs-6 text-muted mb-0">Default Scenario</h6>
				<div class="wedget-header-action d-flex align-items-center">
					<button type="button" class="btn">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="14" height="14">
								<path d="M21 3V17H19.1333V4.86667H7V3H21Z" fill="white" />
							</mask>
							<g mask="url(#mask0)">
								<rect
									x="20.25"
									y="16.25"
									width="12.5"
									height="12.5"
									rx="1.25"
									transform="rotate(-180 20.25 16.25)"
									stroke="#56606D"
									stroke-width="1.5"
								/>
							</g>
							<path
								d="M16.25 19C16.25 19.6904 15.6904 20.25 15 20.25H5C4.30964 20.25 3.75 19.6904 3.75 19V9C3.75 8.30964 4.30964 7.75 5 7.75H15C15.6904 7.75 16.25 8.30964 16.25 9V19Z"
								stroke="#56606D"
								stroke-width="1.5"
							/>
						</svg>
					</button>
					<button type="button" class="btn">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="Iconly/Light/Delete">
								<g id="Delete">
									<path
										id="Stroke 1"
										d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777"
										stroke="#56606D"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path id="Stroke 3" d="M20.708 6.23926H3.75" stroke="#56606D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path
										id="Stroke 5"
										d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949"
										stroke="#56606D"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<line
										id="Line 28"
										x1="14.75"
										y1="10.75"
										x2="14.75"
										y2="16.25"
										stroke="#56606D"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<line
										id="Line 29"
										x1="9.75"
										y1="10.75"
										x2="9.75"
										y2="16.25"
										stroke="#56606D"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</g>
						</svg>
					</button>
				</div>
			</div>
			<ul class="list-unstyled mb-4">
				<li class="mb-3 py-2 px-4 bg-white is-theme-xl-radius d-flex align-items-center justify-content-between">
					<h6 class="title mb-0 d-flex align-items-center">
						<div class="form-check mb-0 me-2">
							<input class="form-check-input mb-0" type="checkbox" checked disabled id="check-1" />
						</div>
						Project Manager
					</h6>
					<div class="dropdown spill-down-action">
						<button
							class="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#56606D" class="bi bi-three-dots" viewBox="0 0 16 16">
								<path
									stroke="#56606D"
									d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
								/>
							</svg>
						</button>
						<ul class="dropdown-menu px-0 py-3">
							<li>
								<a class="dropdown-item d-flex align-items-center px-4" href="#">
									<svg class="me-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.18945 12.7459H13.1252" stroke="#56606D" stroke-linecap="round" stroke-linejoin="round" />
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.53084 1.4159C8.05871 0.785022 9.00763 0.692513 9.6516 1.20965C9.6872 1.23771 10.8312 2.1264 10.8312 2.1264C11.5386 2.55406 11.7584 3.46322 11.3211 4.15704C11.2979 4.19419 4.83035 12.2842 4.83035 12.2842C4.61518 12.5526 4.28855 12.7111 3.93948 12.7149L1.46268 12.7459L0.904625 10.3839C0.826451 10.0518 0.904625 9.70301 1.1198 9.43458L7.53084 1.4159Z"
											stroke="#56606D"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path d="M6.33398 2.9173L10.0445 5.76687" stroke="#56606D" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
									Edit
								</a>
							</li>
							<li>
								<a class="dropdown-item d-flex align-items-center px-4" href="#">
									<svg class="me-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="M7.58268 11.6667C8.35595 11.6657 9.09727 11.3581 9.64405 10.8114C10.1908 10.2646 10.4984 9.52326 10.4993 8.75V3.64176C10.5003 3.33513 10.4403 3.03138 10.3229 2.7481C10.2056 2.46482 10.0332 2.20766 9.81568 1.99151L8.50785 0.683676C8.2917 0.466194 8.03453 0.293778 7.75125 0.176422C7.46798 0.0590653 7.16422 -0.000897137 6.8576 1.01439e-05H4.08268C3.30942 0.000936393 2.56809 0.308524 2.02131 0.855304C1.47453 1.40208 1.16694 2.14341 1.16602 2.91667V8.75C1.16694 9.52326 1.47453 10.2646 2.02131 10.8114C2.56809 11.3581 3.30942 11.6657 4.08268 11.6667H7.58268ZM2.33268 8.75V2.91667C2.33268 2.45254 2.51706 2.00743 2.84525 1.67924C3.17343 1.35105 3.61855 1.16668 4.08268 1.16668C4.08268 1.16668 6.9521 1.17484 6.99935 1.18068V2.33334C6.99935 2.64276 7.12227 2.93951 7.34106 3.1583C7.55985 3.37709 7.8566 3.50001 8.16602 3.50001H9.31868C9.32452 3.54726 9.33268 8.75 9.33268 8.75C9.33268 9.21413 9.14831 9.65925 8.82012 9.98743C8.49193 10.3156 8.04681 10.5 7.58268 10.5H4.08268C3.61855 10.5 3.17343 10.3156 2.84525 9.98743C2.51706 9.65925 2.33268 9.21413 2.33268 8.75ZM12.8327 4.66667V11.0833C12.8318 11.8566 12.5242 12.5979 11.9774 13.1447C11.4306 13.6915 10.6893 13.9991 9.91602 14H4.66602C4.51131 14 4.36293 13.9385 4.25354 13.8291C4.14414 13.7197 4.08268 13.5714 4.08268 13.4167C4.08268 13.262 4.14414 13.1136 4.25354 13.0042C4.36293 12.8948 4.51131 12.8333 4.66602 12.8333H9.91602C10.3801 12.8333 10.8253 12.649 11.1535 12.3208C11.4816 11.9926 11.666 11.5475 11.666 11.0833V4.66667C11.666 4.51196 11.7275 4.36359 11.8369 4.25419C11.9463 4.1448 12.0946 4.08334 12.2493 4.08334C12.4041 4.08334 12.5524 4.1448 12.6618 4.25419C12.7712 4.36359 12.8327 4.51196 12.8327 4.66667Z"
												fill="#56606D"
											/>
										</g>
									</svg>
									Copy
								</a>
							</li>
							<li>
								<a class="dropdown-item d-flex align-items-center px-4" href="#">
									<svg class="me-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="M12.2503 2.33333H10.442C10.3066 1.67499 9.94839 1.08345 9.42772 0.658419C8.90706 0.233386 8.25578 0.000848473 7.58366 0L6.41699 0C5.74487 0.000848473 5.0936 0.233386 4.57293 0.658419C4.05226 1.08345 3.69405 1.67499 3.55866 2.33333H1.75033C1.59562 2.33333 1.44724 2.39479 1.33785 2.50419C1.22845 2.61358 1.16699 2.76196 1.16699 2.91667C1.16699 3.07138 1.22845 3.21975 1.33785 3.32915C1.44724 3.43854 1.59562 3.5 1.75033 3.5H2.33366V11.0833C2.33459 11.8566 2.64217 12.5979 3.18895 13.1447C3.73573 13.6915 4.47706 13.9991 5.25033 14H8.75033C9.52359 13.9991 10.2649 13.6915 10.8117 13.1447C11.3585 12.5979 11.6661 11.8566 11.667 11.0833V3.5H12.2503C12.405 3.5 12.5534 3.43854 12.6628 3.32915C12.7722 3.21975 12.8337 3.07138 12.8337 2.91667C12.8337 2.76196 12.7722 2.61358 12.6628 2.50419C12.5534 2.39479 12.405 2.33333 12.2503 2.33333ZM6.41699 1.16667H7.58366C7.94549 1.16711 8.29832 1.27947 8.59377 1.48834C8.88922 1.69721 9.11282 1.99237 9.23391 2.33333H4.76674C4.88783 1.99237 5.11144 1.69721 5.40689 1.48834C5.70234 1.27947 6.05517 1.16711 6.41699 1.16667ZM10.5003 11.0833C10.5003 11.5475 10.316 11.9926 9.98777 12.3208C9.65958 12.649 9.21446 12.8333 8.75033 12.8333H5.25033C4.7862 12.8333 4.34108 12.649 4.01289 12.3208C3.6847 11.9926 3.50033 11.5475 3.50033 11.0833V3.5H10.5003V11.0833Z"
												fill="#56606D"
											/>
											<path
												d="M5.83333 10.5C5.98804 10.5 6.13642 10.4386 6.24581 10.3292C6.35521 10.2198 6.41667 10.0714 6.41667 9.91671V6.41671C6.41667 6.262 6.35521 6.11362 6.24581 6.00423C6.13642 5.89483 5.98804 5.83337 5.83333 5.83337C5.67862 5.83337 5.53025 5.89483 5.42085 6.00423C5.31146 6.11362 5.25 6.262 5.25 6.41671V9.91671C5.25 10.0714 5.31146 10.2198 5.42085 10.3292C5.53025 10.4386 5.67862 10.5 5.83333 10.5Z"
												fill="#56606D"
											/>
											<path
												d="M8.16634 10.5C8.32105 10.5 8.46942 10.4386 8.57882 10.3292C8.68822 10.2198 8.74968 10.0714 8.74968 9.91671V6.41671C8.74968 6.262 8.68822 6.11362 8.57882 6.00423C8.46942 5.89483 8.32105 5.83337 8.16634 5.83337C8.01163 5.83337 7.86326 5.89483 7.75386 6.00423C7.64447 6.11362 7.58301 6.262 7.58301 6.41671V9.91671C7.58301 10.0714 7.64447 10.2198 7.75386 10.3292C7.86326 10.4386 8.01163 10.5 8.16634 10.5Z"
												fill="#56606D"
											/>
										</g>
									</svg>
									Delete
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<div class="scenario-action">
				<button class="btn btn-jifie px-4 py-2 is-theme-radius me-4">Add Income</button>
				<button class="btn btn-outline-secondary is-theme-radius px-4 py-2">Add Expenses</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Scenario",
		data() {
			return {
				showAddScenarioModal: false,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
