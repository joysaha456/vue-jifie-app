<template>
	<div class="CreateNewReminderModal">
		<vue-final-modal
			@click-outside="$emit('closeCreateNewReminderModal', false)"
			v-model="showModal"
			classes="vue-modal-container vue-modal-lg"
			content-class="vue-modal-content is-theme-radius py-4 px-4"
		>
			<div class="vue-modal-header d-flex align-items-center justify-content-end">
				<button class="btn px-0 py-0 vue-modal-close" @click="$emit('closeCreateNewReminderModal', false)">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="vue-modal-body mt-1">
				<div class="row gx-xxl-4">
					<div class="col-4">
						<div class="log-call-nav-pills bg-light px-3 py-3 rounded h-100">
							<h6 class="jifie-card-title fw-bold fs-6 mb-4">Log Call and send Emails</h6>
							<div class="nav flex-column nav-pills ps-5" role="tablist" aria-orientation="vertical">
								<button
									class="nav-link text-start mb-4 active"
									data-bs-toggle="pill"
									data-bs-target="#v-pills-call"
									type="button"
									role="tab"
									aria-controls="v-pills-call"
									aria-selected="true"
								>
									Call
								</button>
								<button
									class="nav-link mb-2 text-start"
									data-bs-toggle="pill"
									data-bs-target="#v-pills-email"
									type="button"
									role="tab"
									aria-controls="v-pills-email"
									aria-selected="false"
								>
									Email
								</button>
							</div>
						</div>
					</div>
					<div class="col-8">
						<div class="log-call-nav-pills-content px-3 py-3">
							<div class="tab-content">
								<div class="tab-pane show active" id="v-pills-call" role="tabpanel" aria-labelledby="v-pills-call-tab">
									<h6 class="jifie-card-title fw-bold fs-6 mb-4">Log Call</h6>
									<form action="#">
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">Inquiry Type</label>
											<div class="form-check-group d-flex align-items-center">
												<div class="form-check me-4">
													<input class="form-check-input" type="radio" checked name="inquiry-radio" id="inquiry-radio-1" />
													<label class="form-check-label text-muted" for="inquiry-radio-1">
														General
													</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="radio" name="inquiry-radio" id="inquiry-radio-2" />
													<label class="form-check-label text-muted" for="inquiry-radio-2">
														Invoice
													</label>
												</div>
											</div>
										</div>
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">Call log</label>
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
										<div class="form-group">
											<label for="#" class="mb-2 fw-bold text-clr-blue">Call Script - Objectives</label>
											<ul class="objectives text-muted ps-3 mb-0">
												<li class="objective-list mb-3">
													Build pleasant conversation and draw familiarity (sports, weather)
												</li>
												<li class="objective-list mb-3">
													Ask them if they were able to look into pending invoice
												</li>
												<li class="objective-list mb-3">
													Sympathize with their situation, ask them how they would YOU to proceed
												</li>
												<li class="objective-list mb-3">
													Mention a finalized date and heads up that you'll be following up
												</li>
												<li class="objective-list mb-3">
													Send a summarised email so it's on their records to reference
												</li>
											</ul>
										</div>
										<div class="form-group text-end">
											<button type="button" class="btn btn-jifie px-4 py-2">Log Call</button>
										</div>
									</form>
								</div>
								<div class="tab-pane" id="v-pills-email" role="tabpanel" aria-labelledby="v-pills-email-tab">
									<h6 class="jifie-card-title fw-bold fs-6 mb-4">Email</h6>
									<form action="#">
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">Inquiry Type</label>
											<div class="form-check-group d-flex align-items-center">
												<div class="form-check me-4">
													<input class="form-check-input" type="radio" name="inquiry-radio" id="inquiry-radio-3" />
													<label class="form-check-label text-muted" for="inquiry-radio-3">
														General
													</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="radio" checked name="inquiry-radio" id="inquiry-radio-4" />
													<label class="form-check-label text-muted" for="inquiry-radio-4">
														Invoice
													</label>
												</div>
											</div>
										</div>
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">To</label>
											<input type="email" class="form-control" placeholder="Enter email" />
										</div>
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">Subject</label>
											<input type="text" class="form-control" placeholder="Enter Subject" />
										</div>
										<div class="form-group mb-4">
											<label for="#" class="mb-2 text-muted">Call log</label>
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
										<div class="form-group">
											<label for="#" class="mb-2 fw-bold text-clr-blue">Call Script - Objectives</label>
											<ul class="objectives text-muted ps-3 mb-0">
												<li class="objective-list mb-3">
													Build pleasant conversation and draw familiarity (sports, weather)
												</li>
												<li class="objective-list mb-3">
													Ask them if they were able to look into pending invoice
												</li>
												<li class="objective-list mb-3">
													Sympathize with their situation, ask them how they would YOU to proceed
												</li>
												<li class="objective-list mb-3">
													Mention a finalized date and heads up that you'll be following up
												</li>
												<li class="objective-list mb-3">
													Send a summarised email so it's on their records to reference
												</li>
											</ul>
										</div>
										<div class="form-group text-end">
											<button type="button" class="btn btn-outline-secondary px-4 py-2 me-3">Schedule</button>
											<button type="button" class="btn btn-jifie px-4 py-2">Send Email</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</vue-final-modal>
	</div>
</template>

<script>
	import Editor from "@tinymce/tinymce-vue";
	export default {
		name: "CreateNewReminderModal",
		props: {
			showModal: {
				type: Boolean,
				default: false,
			},
		},
		components: {
			Editor,
		},
	};
</script>

<style lang="scss" scoped>
	.log-call-nav-pills {
		.nav-pills {
			position: relative;

			&::before {
				content: "";
				display: block;
				height: calc(100% - 36px);
				border-left: 1px dashed #79828d;
				position: absolute;
				left: 12px;
				top: 50%;
				transform: translateY(-50%);
			}
			.nav-link {
				background-color: #fff;
				color: var(--theme-clr-black);
				font-weight: 500;
				position: relative;

				&::before {
					content: "";
					display: block;
					--size: 20px;
					--bg-color: #fff;
					--border-color: #79828d;
					width: var(--size);
					height: var(--size);
					background-color: var(--bg-color);
					border-radius: 100%;
					border: 1px solid var(--border-color);
					position: absolute;
					top: 50%;
					left: -46px;
					transform: translateY(-50%);
				}

				&.active {
					background-color: var(--theme-clr-green);

					&::before {
						--bg-color: var(--theme-clr-green);
						--border-color: var(--theme-clr-green);
					}
				}
			}
		}
	}
</style>
