<template>
	<ApplicationDetailsModal :showModal="showModal" @modalEmit="modalEmit" />
	<div class="submittedApplications bg-white px-3 py-4 is-theme-lg-radius">
		<h5 class="jifie-card-title px-3 mb-3">Submitted Applications</h5>
		<ul v-if="submittedApplications" class="list-unstyled submittedApplications-lists mb-0">
			<li
				v-for="app in submittedApplications"
				:key="app.id"
				class="submittedApplications-list d-flex justify-content-between is-theme-radius py-2 px-3"
			>
				<div class="looking-for flex-grow-1 align-items-center">
					<p class="mb-1 text-muted looking-for-title">{{ app.lookingFor }}</p>
					<p class="date-and-status d-flex align-items-center">
						<small class="date text-muted me-3"> {{ app.date }}</small>
						<span class="badge bg-warning">{{ app.status }}</span>
					</p>
				</div>
				<div class="button-group d-flex align-items-center">
					<button @click="showModal = true" type="button" class="flex-shrink-0 btn px-3 py-2 is-theme-radius">Details</button>
				</div>
			</li>
		</ul>
		<div class="see-all text-center mt-4">
			<router-link class="text-muted d-inline-flex align-items-center" to="/application">
				<span class="route-text me-2">See all applications</span>
				<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.75 7.72559L0.75 7.72559" stroke="#56606D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M9.70117 1.70124L15.7512 7.72524L9.70117 13.7502"
						stroke="#56606D"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</router-link>
		</div>
	</div>
</template>

<script>
	import ApplicationDetailsModal from "@/components/ApplicationLists/ApplicationDetailsModal.vue";
	export default {
		name: "SubmittedApplications",
		data() {
			return {
				showModal: false,
				submittedApplications: [
					{
						id: Date.now(),
						lookingFor: "Asset or Equipment",
						status: "Pending",
						date: "Apr 24, 2021",
					},
					{
						id: Date.now(),
						lookingFor: "Bank Loan",
						status: "Pending",
						date: "March 22, 2020",
					},
					{
						id: Date.now(),
						lookingFor: "Credit card cash advances",
						status: "Pending",
						date: "may 25, 1995",
					},
					{
						id: Date.now(),
						lookingFor: "Pawn shop loans",
						status: "Pending",
						date: "Dec 12, 1468",
					},
				],
			};
		},
		components: {
			ApplicationDetailsModal,
		},
		methods: {
			modalEmit(value) {
				this.showModal = value;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.submittedApplications {
		.submittedApplications-list {
			.btn {
				font-weight: 500;
			}

			.looking-for-title {
				font-size: 16px;
				font-weight: 500;
			}

			&:hover {
				background-color: #f5f5f5;

				.btn {
					background-color: var(--status-clr-green);
				}
			}
		}
	}
</style>
