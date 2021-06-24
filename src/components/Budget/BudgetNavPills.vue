<template>
	<div class="BudgetNavPills">
		<div class="nav nav-pills flex-column flex-sm-row flex-sm-nowrap mb-4" role="tablist">
			<button
				class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4 active"
				data-bs-toggle="pill"
				data-bs-target="#BudgetNavPills-1"
				type="button"
				role="tab"
				aria-selected="true"
			>
				<div class="pills-content">
					<h4 class="fs-4 pills-title text-dark">
						All expenses <br class="d-none d-xl-inline" />
						account
					</h4>
				</div>
			</button>
			<button
				class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
				data-bs-toggle="pill"
				data-bs-target="#BudgetNavPills-2"
				type="button"
				role="tab"
				aria-selected="false"
			>
				<div class="pills-content">
					<p class="text-muted mb-2 pills-sub-title">Budget Spent</p>
					<h4 class="text-clr-red d-flex align-items-center fs-3 pills-title fw-bold">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
						70%
					</h4>
				</div>
			</button>
			<button
				class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
				data-bs-toggle="pill"
				data-bs-target="#BudgetNavPills-3"
				type="button"
				role="tab"
				aria-selected="false"
			>
				<div class="pills-content">
					<p class="text-muted mb-2 pills-sub-title">Budget Spent</p>
					<h4 class="text-warning fs-3 pills-title fw-bold">35% -70%</h4>
				</div>
			</button>
			<button
				class="nav-link flex-sm-fill text-sm-start is-theme-lg-radius bg-white px-4 py-4"
				data-bs-toggle="pill"
				data-bs-target="#BudgetNavPills-4"
				type="button"
				role="tab"
				aria-selected="false"
			>
				<div class="pills-content">
					<p class="text-muted mb-2 pills-sub-title">Budget Spent</p>
					<h4 class="text-clr-green d-flex align-items-center fs-3 pills-title fw-bold">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
						30%
					</h4>
				</div>
			</button>
		</div>
		<div class="tab-content bg-white px-5 py-5 is-theme-lg-radius mt-4">
			<div class="instant-search mb-4">
				<div class="row align-items-center">
					<div class="col-xxl-3">
						<div class="instant-search-left d-flex align-items-center flex-wrap mb-3 mb-xxl-0">
							<p class="text-dark d-flex align-items-center text-muted mb-0 me-4 me-xxl-5">
								<svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 24C18.627 24 24 18.627 24 12C24 5.37305 18.627 0 12 0C5.373 0 0 5.37305 0 12C0 18.627 5.373 24 12 24Z"
										fill="#2D405A"
									/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.0431L10.5 21L12 13.9569H6L13.5 3L12 10.0431H18Z" fill="white" />
								</svg>
								Synced
							</p>
							<p class="text-dark d-flex align-items-center text-muted mb-0">
								<svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 24C18.627 24 24 18.627 24 12C24 5.37305 18.627 0 12 0C5.373 0 0 5.37305 0 12C0 18.627 5.373 24 12 24Z"
										fill="#009FCC"
									/>
									<path
										d="M12.7416 7.26954C11.7884 7.26954 11.0393 7.64513 10.4943 8.3963C9.95086 9.14602 9.67766 10.1811 9.67766 11.5015C9.67766 12.8146 9.94352 13.8496 10.4782 14.6052C11.0114 15.3563 11.7487 15.7319 12.6887 15.7319C13.429 15.7319 14.0312 15.5237 14.4954 15.1088C14.961 14.694 15.2401 14.1073 15.3326 13.3517H18C17.884 14.8191 17.3567 15.9619 16.4151 16.7801C15.4751 17.5953 14.2325 18 12.6887 18C11.524 18 10.5149 17.738 9.66003 17.2153C8.80518 16.6869 8.14715 15.9357 7.68888 14.9633C7.2306 13.9923 7 12.8393 7 11.5087C7 10.1782 7.23354 9.02374 7.69769 8.04546C8.16184 7.06282 8.82574 6.30873 9.685 5.78611C10.5516 5.26204 11.5328 5 12.6285 5C13.7301 5 14.6658 5.19362 15.434 5.58231C16.1777 5.94008 16.8022 6.50194 17.2333 7.20112C17.6695 7.89989 17.9089 8.70056 17.9471 9.59877H15.3326C15.2504 8.87671 14.9801 8.3075 14.5218 7.89261C14.0636 7.47772 13.4702 7.26954 12.7416 7.26954Z"
										fill="white"
									/>
								</svg>
								Synced
							</p>
						</div>
					</div>
					<div class="col-xxl-9">
						<form action="#" class="instant-search-form d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-xl-end">
							<input type="text" class="form-control search-control" placeholder="Account name" />
							<select class="form-select form-control">
								<option selected>All Account Types</option>
								<option value="1">Synced</option>
								<option value="2">Custom</option>
							</select>
							<select class="form-select form-control">
								<option selected>All budget period</option>
								<option value="1">Monthly</option>
								<option value="1">Fixed</option>
							</select>
							<select class="form-select form-control">
								<option selected>Show - high to low</option>
								<option selected>Show - low to high</option>
							</select>
						</form>
					</div>
				</div>
			</div>
			<div class="tab-pane show active" id="BudgetNavPills-1" role="tabpanel" aria-labelledby="BudgetNavPills-1-tab">
				<div class="budget-widgets">
					<div class="row">
						<div v-for="(widget, index) in [1, 2, 3, 4, 5, 6]" :key="index + 1" class="col-xxl-4 col-md-6">
							<div @click="emitBudgetDetails" class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
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
											<apexchart width="80" type="donut" :options="chartOptions" :series="series"></apexchart>
										</div>
										<div class="flex-grow-1 ms-2">
											<h3 class="widget-body-title mb-1">$218,442.49 <sub class="fs-6">Spent</sub></h3>
											<p class="mb-0 text-muted">out of <strong>$34,5875.51</strong></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane" id="BudgetNavPills-2" role="tabpanel" aria-labelledby="BudgetNavPills-2-tab">
				<div class="budget-widgets">
					<div class="row">
						<div v-for="(widget, index) in [1, 2, 3, 4, 5]" :key="index + 2" class="col-xxl-4 col-md-6">
							<div @click="emitBudgetDetails" class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
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
											<apexchart width="80" type="donut" :options="chartOptions" :series="series"></apexchart>
										</div>
										<div class="flex-grow-1 ms-2">
											<h3 class="widget-body-title mb-1">$218,442.49 <sub class="fs-6">Spent</sub></h3>
											<p class="mb-0 text-muted">out of <strong>$34,5875.51</strong></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane" id="BudgetNavPills-3" role="tabpanel" aria-labelledby="BudgetNavPills-3-tab">
				<div class="budget-widgets">
					<div class="row">
						<div v-for="(widget, index) in [1, 2, 3]" :key="index + 3" class="col-xxl-4 col-md-6">
							<div @click="emitBudgetDetails" class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
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
											<apexchart width="80" type="donut" :options="chartOptions" :series="series"></apexchart>
										</div>
										<div class="flex-grow-1 ms-2">
											<h3 class="widget-body-title mb-1">$218,442.49 <sub class="fs-6">Spent</sub></h3>
											<p class="mb-0 text-muted">out of <strong>$34,5875.51</strong></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane" id="BudgetNavPills-4" role="tabpanel" aria-labelledby="BudgetNavPills-4-tab">
				<div class="budget-widgets">
					<div class="row">
						<div v-for="(widget, index) in [1, 2]" :key="index + 4" class="col-xxl-4 col-md-6">
							<div @click="emitBudgetDetails" class="budget-widget bg-light is-theme-lg-radius px-4 py-4 mb-4">
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
											<apexchart width="80" type="donut" :options="chartOptions" :series="series"></apexchart>
										</div>
										<div class="flex-grow-1 ms-2">
											<h3 class="widget-body-title mb-1">$218,442.49 <sub class="fs-6">Spent</sub></h3>
											<p class="mb-0 text-muted">out of <strong>$34,5875.51</strong></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BudgetWidgetDetailsModal from "@/components/Budget/BudgetWidgetDetailsModal.vue";
	export default {
		name: "BudgetNavPills",
		components: {
			BudgetWidgetDetailsModal,
		},
		methods: {
			emitBudgetDetails() {
				this.$emit("emitOpenBudgetDetails", true);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.BudgetNavPills {
		.instant-search {
			.instant-search-form {
				grid-gap: 20px;
				--input-width: 180px;

				.form-control {
					max-width: var(--input-width);
					font-size: 14px;
					color: var(--theme-clr-gray-dark);
					font-weight: 500;

					&.search-control {
						background-repeat: no-repeat;
						background-size: 16px;
						background-position: 15px center;
						background-image: url("data:image/svg+xml,%3Csvg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='8.80492' cy='8.80541' rx='7.49047' ry='7.49047' stroke='%2399A6B9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.0156 14.4043L16.9523 17.3334' stroke='%2399A6B9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
						padding-left: 40px;
					}
				}
			}
		}

		.budget-widgets {
			.budget-widget {
				cursor: pointer;
				border: 1px solid transparent;
				transition: var(--theme-transition);

				&:hover {
					border-color: var(--theme-clr-green);
				}
			}
		}

		.nav-pills {
			grid-column-gap: 30px;
			grid-row-gap: 20px;

			.nav-link {
				flex-basis: 0;
				border-radius: 20px;
				font-weight: 500;
				flex-basis: 0 !important;
				transition: var(--theme-transition);
				position: relative;

				&:after {
					content: "";
					display: block;
					width: 20px;
					height: 20px;
					background: inherit;
					position: absolute;
					top: 100%;
					left: 25%;
					clip-path: polygon(0 0, 100% 0, 50% 70%, 50% 70%);
					visibility: hidden;
					opacity: 0;
				}

				&.active,
				&:hover {
					background-color: var(--theme-clr-green) !important;

					&::after {
						visibility: visible !important;
						opacity: 1 !important;
					}

					.pills-sub-title,
					.pills-title {
						color: #fff !important;
					}
				}
			}
		}
	}
</style>
