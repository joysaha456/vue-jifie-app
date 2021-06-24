<template>
	<div class="CreateEmailTemplate">
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Create Campaign</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="$emit('closeCreateCampaignModalTrigger')">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
			<div class="row">
				<div class="col-4">
					<p class="text-gray mb-3">Reminder Timeline</p>
					<div class="reminder-timeline bg-light px-3 py-3 rounded">
						<ul v-if="reminderTimelineLists" class="reminder-timeline-list list-unstyled px-0 mb-0 ">
							<li
								@click="handleClickTimeline(timeline)"
								v-for="timeline in reminderTimelineLists"
								:key="timeline.id"
								class="history-timeline d-flex align-items-center"
								:class="timeline?.isActive ? 'active' : null"
							>
								<div class="timeline-history-circle flex-shrink-0 me-3" :class="timeline.initiated ? 'initiated' : 'skiped'"></div>
								<div class="timeline-content bg-white px-2 py-2 rounded flex-grow-1">
									<p class="text-dark fw-bold mb-1">
										<small>{{ timeline.reminderDate }}</small>
									</p>
									<p class="d-flex align-items-center mb-0">
										<span class="badge bg-success me-2"> {{ timeline.timelineId }} </span>
										<small class="normal-text text-muted">{{ timeline.reminderText }}</small>
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-8">
					<div class="select-reminder">
						<p class="text-gray mb-3">Select Reminder</p>
						<div
							v-for="timeline in reminderTimelineLists.filter((t) => t.isActive)"
							:key="timeline.id"
							class="select-reminder-header mb-3 pb-3 border-bottom"
						>
							<div class="expected-timeline">
								<div class="header-top d-flex align-items-center justify-content-between mb-2">
									<h6 class="reminderText text-dark fw-bold mb-0">{{ timeline.reminderText }}</h6>
									<button
										@click="handleTimelineSelectDelect(timeline.id)"
										type="button"
										class="btn px-4 py-2"
										:class="timeline.initiated ? 'btn-jifie' : 'btn-secondary'"
									>
										{{ timeline.initiated ? "Deselect" : "Select" }}
									</button>
								</div>
								<p class="flex-grow-1 mb-1 text-muted">
									<small>
										This template was created using negotiation experts, we encourage you to edit the contents of the template to word it to your
										needs before sending.
									</small>
								</p>
							</div>
						</div>
						<div class="email-template">
							<div class="row form-group align-items-center justify-content-between mb-4">
								<div class="col">
									<h6 class="fs-6 text-dark fw-bold mb-0">Create Campaign</h6>
								</div>
								<div class="col-5">
									<input type="date" class="form-control" />
								</div>
							</div>
							<div class="template-create">
								<h6 class="fs-6 text-dark fw-bold mb-3">Email template</h6>
								<div class="form-group mb-3">
									<label for="#">To</label>
									<input type="email" class="form-control" placeholder="Enter Email" />
								</div>
								<div class="form-group mb-3">
									<label for="#">Subject</label>
									<input type="text" class="form-control" placeholder="Enter subject" />
								</div>
								<div class="form-group mb-3">
									<label for="#">Message</label>
									<Editor
										api-key="m5vtugsi9x0c1ilbrm19entrjd5dxz0ig9bnci3346turcnc"
										:init="{
											height: 175,
											menubar: false,
											branding: false,
											statusbar: false,
											plugins: [
												'advlist autolink lists link image charmap print preview anchor',
												'searchreplace visualblocks code fullscreen',
												'insertdatetime media table paste code',
											],
											toolbar:
												'undo redo | formatselect | bold italic backcolor | \
                                                    alignleft aligncenter alignright alignjustify | \
                                                    bullist numlist outdent indent | removeformat | help',
										}"
									/>
								</div>
							</div>
						</div>
						<div class="form-group text-end">
							<button @click="$emit('templateReview', true)" type="button" class="btn btn-jifie px-4 py-2">Next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Editor from "@tinymce/tinymce-vue";
	export default {
		name: "CreateEmailTemplate",
		components: {
			Editor,
		},
		data() {
			return {
				reminderTimelineLists: [
					{
						id: Date.now() + Math.random(),
						timelineId: "#1st",
						initiated: true,
						isActive: true,
						reminderDate: "02 Apr 2021",
						reminderText: "Tomorrow",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#2nd",
						initiated: true,
						isActive: false,
						reminderDate: "08 Apr 2021",
						reminderText: "After 1 week",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#3rd",
						initiated: true,
						isActive: false,
						reminderDate: "14 Apr 2021",
						reminderText: "After 2 week",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#4th",
						initiated: true,
						isActive: false,
						reminderDate: "21 Apr 2021",
						reminderText: "After 3 week",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#5th",
						initiated: true,
						isActive: false,
						reminderDate: "27 Apr 2021",
						reminderText: "After 4 week",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#6th",
						initiated: true,
						isActive: false,
						reminderDate: "03 May 2021",
						reminderText: "After 5 week",
					},
					{
						id: Date.now() + Math.random(),
						timelineId: "#7th",
						initiated: true,
						isActive: false,
						reminderDate: "10 May 2021",
						reminderText: "After 6 week",
					},
				],
			};
		},
		methods: {
			handleClickTimeline(timeline) {
				let tID = timeline.id;
				let newReminderLists = this.reminderTimelineLists.map((reminder) => {
					if (reminder.id === tID) {
						return {
							...reminder,
							isActive: true,
						};
					} else {
						return {
							...reminder,
							isActive: false,
						};
					}
				});
				this.reminderTimelineLists = newReminderLists;
			},
			handleTimelineSelectDelect(id) {
				let newReminderLists = this.reminderTimelineLists.map((reminder) => {
					if (reminder.id === id) {
						return {
							...reminder,
							initiated: !reminder.initiated,
						};
					} else {
						return {
							...reminder,
						};
					}
				});
				this.reminderTimelineLists = newReminderLists;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.reminder-timeline {
		.reminder-timeline-list {
			position: relative;
			z-index: 10;

			&::before {
				position: absolute;
				top: 0;
				content: "";
				display: block;
				left: 9px;
				height: calc(100% - 50px);
				border-left: 2px dashed #79828d;
				top: 50%;
				transform: translateY(-50%);
				z-index: -10;
			}

			.history-timeline {
				cursor: pointer;

				.timeline-history-circle {
					--circle-size: 20px;
					width: var(--circle-size);
					height: var(--circle-size);
					border-radius: 100%;
					background-color: var(--bg-color);
					transition: all 0.3s linear;

					&.initiated {
						--bg-color: #f3b410;
					}
					&.skiped {
						--bg-color: #fff;
						border: 4px solid #79828d;
					}
				}

				&.active {
					.timeline-content {
						background: #dbf5e7 !important;
					}
				}

				+ .history-timeline {
					margin-top: 20px;
				}
			}
		}
	}
</style>
