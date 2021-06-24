<template>
	<div class="row">
		<div class="col-xxl-8">
			<div class="ClientStatusTable bg-white px-4 py-4 is-theme-lg-radius">
				<div class="ClientStatusTable-header mb-4">
					<h5 class="jifie-card-title mb-1">Client Status</h5>
					<p class="sub-title text-muted">Just like Santa, we’ve compiled a naughty and nice list of your customers.</p>
				</div>
				<div class="status-table table-responsive is-scrollable" style="--max-height : 450px">
					<table class="table">
						<thead>
							<tr>
								<th class="py-4">Name</th>
								<th class="py-4">Revenue</th>
								<th class="py-4">Behaviour</th>
							</tr>
						</thead>
						<tbody v-if="statusTable">
							<tr v-for="(item, index) in statusTable" :key="index">
								<td class="py-4">{{ item.name }}</td>
								<td class="py-4 text-clr-green">{{ item.revenue }}</td>
								<td class="py-4">{{ item.behaviour }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="pagination-theme mt-4">
					<Pagination v-model="paginate.page" :records="500" :per-page="10" :options="paginate.options" @paginate="paginateCallback($event)" />
				</div>
			</div>
		</div>
		<div class="col-xxl-4">
			<div class="clients-activity bg-white px-4 py-4 is-theme-lg-radius">
				<div class="row">
					<div class="col-6">
						<div class="c-playground px-4 py-4 bg-clr-green is-theme-lg-radius">
							<p class="mb-2 text-white">Active Clients</p>
							<h3 class="text-white fs-3 mb-0 fw-bold">150</h3>
						</div>
					</div>
					<div class="col-6">
						<div class="c-playground px-4 py-4 bg-danger is-theme-lg-radius">
							<p class="mb-2 text-white">Late Payers</p>
							<h3 class="text-white fs-3 mb-0 fw-bold">250</h3>
						</div>
					</div>
				</div>
				<ul class="listy-unstled mb-0 mt-3 px-0">
					<li class="d-flex align-items-center py-4 border-bottom">
						<div class="flex-shrink-0">
							<svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="40" height="40" rx="10" fill="#12CA9E" />
								<g>
									<path
										d="M13.5977 17.1641C13.5977 20.7181 16.489 23.6094 20.043 23.6094C23.597 23.6094 26.4883 20.7181 26.4883 17.1641C26.4883 13.6101 23.597 10.7188 20.043 10.7188C16.489 10.7188 13.5977 13.6101 13.5977 17.1641ZM20.043 11.5781C23.1231 11.5781 25.6289 14.0839 25.6289 17.1641C25.6289 20.2442 23.1231 22.75 20.043 22.75C16.9628 22.75 14.457 20.2442 14.457 17.1641C14.457 14.0839 16.9628 11.5781 20.043 11.5781Z"
										fill="white"
									/>
									<path
										d="M16.0637 16.3982L17.7292 18.0392L17.346 20.3456C17.3194 20.5063 17.3857 20.6681 17.5174 20.7637C17.649 20.8594 17.8234 20.8723 17.9679 20.7975L20.043 19.7199L22.1179 20.7975C22.2613 20.8718 22.4357 20.8602 22.5684 20.7637C22.7002 20.6681 22.7665 20.5063 22.7398 20.3456L22.3566 18.0392L24.0222 16.3982C24.1381 16.2841 24.1796 16.1142 24.1292 15.9593C24.0789 15.8045 23.9455 15.6916 23.7845 15.6672L21.4731 15.3193L20.4272 13.2277C20.3545 13.0822 20.2057 12.9902 20.043 12.9902C19.8802 12.9902 19.7315 13.0822 19.6586 13.2277L18.6128 15.3193L16.3014 15.6672C16.1404 15.6914 16.007 15.8045 15.9566 15.9593C15.9062 16.1142 15.9479 16.2841 16.0637 16.3982ZM18.9614 16.1359C19.0997 16.115 19.2192 16.0283 19.2818 15.9032L20.043 14.3807L20.8042 15.9032C20.8668 16.0283 20.9863 16.115 21.1246 16.1359L22.8069 16.3891L21.5946 17.5834C21.4951 17.6816 21.4494 17.822 21.4722 17.96L21.7512 19.6387L20.2409 18.8545C20.179 18.8222 20.111 18.8061 20.043 18.8061C19.975 18.8061 19.9071 18.8222 19.8449 18.8545L18.3347 19.6387L18.6136 17.96C18.6366 17.822 18.591 17.6816 18.4913 17.5834L17.2791 16.3891L18.9614 16.1359Z"
										fill="white"
									/>
									<path
										d="M20.4727 9.42969C20.4727 9.66702 20.2803 9.85938 20.043 9.85938C19.8056 9.85938 19.6133 9.66702 19.6133 9.42969C19.6133 9.19235 19.8056 9 20.043 9C20.2803 9 20.4727 9.19235 20.4727 9.42969Z"
										fill="white"
									/>
									<path
										d="M18.0179 9.25273C14.4033 10.1754 11.8789 13.4284 11.8789 17.1635C11.8789 19.4833 12.8543 21.6692 14.5665 23.2173L11.9778 27.7795C11.8945 27.9264 11.9049 28.1083 12.0043 28.2446C12.1037 28.3811 12.2735 28.4467 12.4388 28.4123L15.3787 27.8018L16.4119 30.7135C16.468 30.8719 16.6115 30.9829 16.779 30.9978C16.9465 31.0127 17.1072 30.9283 17.1903 30.7821L20.043 25.7668L22.8955 30.7821C22.9724 30.9172 23.1154 30.9993 23.2688 30.9993C23.2814 30.9993 23.2942 30.9988 23.3068 30.9978C23.4743 30.9829 23.6178 30.8717 23.674 30.7135L24.7071 27.8018L27.647 28.4123C27.8121 28.4465 27.9821 28.3809 28.0815 28.2446C28.181 28.1083 28.1913 27.9264 28.108 27.7795L25.5193 23.2173C27.2315 21.6692 28.2069 19.4833 28.2069 17.1635C28.2069 13.4284 25.6825 10.1754 22.0681 9.25273C21.8379 9.19399 21.6041 9.3328 21.5454 9.56275C21.4866 9.7927 21.6254 10.0267 21.8554 10.0854C25.0891 10.9109 27.3477 13.8215 27.3477 17.1635C27.3477 21.231 24.0443 24.4682 20.043 24.4682C16.0388 24.4682 12.7383 21.2283 12.7383 17.1635C12.7383 13.8215 14.9967 10.9109 18.2304 10.0854C18.4604 10.0267 18.5992 9.7927 18.5406 9.56275C18.4818 9.3328 18.248 9.19399 18.0179 9.25273ZM16.9078 29.5409L16.0633 27.1613C15.9915 26.9589 15.7813 26.8406 15.571 26.8842L13.1938 27.3778L15.2426 23.7671C16.4371 24.6356 17.8516 25.1646 19.3224 25.2955L16.9078 29.5409ZM24.5148 26.8842C24.3046 26.8406 24.0943 26.9589 24.0225 27.1613L23.1782 29.5409L20.7634 25.2955C22.2344 25.1646 23.6487 24.6356 24.8434 23.7671L26.8921 27.3778L24.5148 26.8842Z"
										fill="white"
									/>
								</g>
							</svg>
						</div>
						<div class="flex-grow-1 ms-3">
							<p class="mb-1 text-muted">Highest Paying</p>
							<h4 class="mb-0 text-clr-green fs-5">Company Private Ltd</h4>
						</div>
					</li>
					<li class="d-flex align-items-center py-4">
						<div class="flex-shrink-0">
							<svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="40" height="40" rx="10" fill="#EB5757" />
								<path
									d="M24.9395 21.749C26.6633 20.3239 27.7637 18.1699 27.7637 15.7637C27.7637 11.4828 24.2809 8 20 8C15.7191 8 12.2363 11.4828 12.2363 15.7637C12.2363 18.1699 13.3367 20.3239 15.0605 21.749V24.2743H12.8926V26.234L20 32L27.1074 26.2339V24.2743H24.9395V21.749ZM13.6426 15.7637C13.6426 12.2582 16.4945 9.40625 20 9.40625C23.5055 9.40625 26.3574 12.2582 26.3574 15.7637C26.3574 19.2692 23.5055 22.1211 20 22.1211C16.4945 22.1211 13.6426 19.2692 13.6426 15.7637ZM25.5575 25.6805L20 30.1892L14.4425 25.6805H16.4668V22.6758C17.5272 23.22 18.7284 23.5273 20 23.5273C21.2716 23.5273 22.4728 23.22 23.5332 22.6758V25.6805H25.5575V25.6805Z"
									fill="white"
								/>
								<path
									d="M19.5989 16.467H20.403C20.8226 16.467 21.164 16.8084 21.164 17.228C21.164 17.6475 20.8226 17.9889 20.403 17.9889H19.5846C19.1793 17.9889 18.8496 17.6592 18.8496 17.2539H17.4433C17.4433 18.3373 18.2523 19.2347 19.2978 19.3754V20.3765H20.704V19.3737C21.757 19.2267 22.5702 18.3207 22.5702 17.2279C22.5702 16.0329 21.598 15.0607 20.403 15.0607H19.5988C19.1792 15.0607 18.8379 14.7194 18.8379 14.2998C18.8379 13.8802 19.1792 13.5389 19.5988 13.5389H20.3846C20.8047 13.5389 21.1464 13.8806 21.1464 14.3007H22.5527C22.5527 13.2138 21.7486 12.3113 20.704 12.1564V11.1514H19.2978V12.1541C18.2448 12.3012 17.4316 13.2071 17.4316 14.2999C17.4317 15.4949 18.4039 16.467 19.5989 16.467Z"
									fill="white"
								/>
							</svg>
						</div>
						<div class="flex-grow-1 ms-3">
							<p class="mb-1 text-muted">Lowest Paying</p>
							<h4 class="mb-0 text-dark fs-5">Info Technology</h4>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Pagination from "v-pagination-3";
	export default {
		name: "ClientStatusTable",
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
				statusTable: [
					{ name: "Company Private Ltd", revenue: "$555", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$5412", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$8952", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$83254", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$788751", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$45", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$287", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$236", behaviour: "Late payer" },
					{ name: "Company Private Ltd", revenue: "$452", behaviour: "Late payer" },
				],
			};
		},
		methods: {
			paginateCallback($event) {
				console.log($event);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.ClientStatusTable {
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
