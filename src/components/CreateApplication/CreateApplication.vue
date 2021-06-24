<template>
	<div class="make-application">
		<div class="stepper is-theme-lg-radius bg-white">
			<div class="steps is-theme-lg-radius py-5 px-4">
				<p class="mb-3 text-uppercase">Steps</p>
				<ul class="step-lists list-unstyled">
					<li :class="steps.currentStep === 1 ? 'active' : 'completed'" class="step-list-item d-flex align-items-center">
						<div class="step-icon me-2">01</div>
						<div class="step-info">
							<p class="mb-0">
								Loan <br />
								Requirements
							</p>
						</div>
					</li>
					<li :class="steps.currentStep === 2 ? 'active' : steps.currentStep > 2 ? 'completed' : ''" class="step-list-item d-flex align-items-center">
						<div class="step-icon me-2">02</div>
						<div class="step-info">
							<p class="mb-0">
								Terms & <br />
								Conditions
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="step-content d-flex flex-column justify-content-between py-5 px-3">
				<div class="step-slots">
					<div v-if="steps.currentStep === 1" class="step-slot-item">
						<h5 class="steps-slot-title border-start border-3 ps-3 border-success mb-4">Loan Requirements</h5>
						<div class="form-group mb-4">
							<label for="#" class="text-muted">How much do you need ($) ?</label>
							<input type="number" class="form-control form-control-lg fs-6 is-theme-radius" placeholder="0" min="0" />
						</div>
						<div class="form-group mb-4">
							<label for="#" class="text-muted">What are you looking to use the funds for?</label>
							<select class="form-select form-select-lg fs-6 is-theme-radius" name="#" id="#">
								<option>Asset or Equipment</option>
								<option>Bank Loan</option>
								<option>Payday loans</option>
								<option>Credit card cash advances</option>
								<option>Pawn shop loans</option>
								<option>Home equity loans</option>
								<option>Unsecured personal loans</option>
							</select>
						</div>
					</div>
					<div v-if="steps.currentStep === 2" class="step-slot-item">
						<h5 class="steps-slot-title border-start border-3 ps-3 border-success mb-5">Submit Application</h5>
						<h6 class="steps-slot-title text-clr-blue">Terms, Privacy & Constent</h6>
						<div class="py-3 text-muted">
							<p class="mb-4">If you do not agree to any of the terms and conditions below, please do not proceed with this application.</p>
							<ul class="mb-0 ps-5">
								<li class="mb-2">
									I have read and agreed to the terms set out in the
									<router-link class="text-decoration-none" to="/privacy-policy">privacy policy</router-link>
								</li>
								<li class="mb-2">I confirm I am a permanent Australian resident or citizen currently residing in Australia.</li>
							</ul>
						</div>
						<div class="form-check text-muted mt-4">
							<input class="form-check-input" type="checkbox" value="" id="agree" />
							<label class="form-check-label" for="agree"> I have read, understood and agree to the terms and conditions above. </label>
						</div>
					</div>
					<div v-if="steps.currentStep === 3" class="step-slot-item">
						<div class="text-center mt-5">
							<img src="../../assets/images/step-completed.svg" alt="img" class="img-fluid mb-2" />
							<p class="mb-2 text-muted">Your Application is</p>
							<h4 class="fs-3 mb-4">Submitted</h4>
							<router-link class="text-muted d-inline-flex align-items-center" to="/application">
								<span class="route-text me-2">Go to the Application Panel</span>
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
				</div>
				<div v-if="steps.currentStep < steps.totalStep" class="btn-steps mt-5">
					<button v-if="steps.currentStep > 1" @click="stepBackword" class="mt-4 btn py-2 me-3 d-inline-flex align-items-center">
						<svg class="me-2" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.25 7.27441L16.25 7.27441" stroke="#56606D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path
								d="M7.29883 13.2988L1.24883 7.27476L7.29883 1.24976"
								stroke="#56606D"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span class="btn-text">Back</span>
					</button>
					<button @click="stepForword" class="mt-4 btn btn-jifie px-4 py-2 is-theme-radius bg-clr-green-light">
						{{ steps.currentStep === steps.totalStep - 1 ? "Submit" : "Continue" }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CreateApplication",
		data() {
			return {
				steps: {
					currentStep: 1,
					totalStep: 3,
				},
			};
		},
		methods: {
			stepForword() {
				if (this.steps.currentStep <= this.steps.totalStep) {
					this.steps.currentStep = this.steps.currentStep + 1;
				} else {
					return;
				}
			},
			stepBackword() {
				if (this.steps.currentStep > 1) {
					this.steps.currentStep = this.steps.currentStep - 1;
				} else {
					return;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.stepper {
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-gap: 20px;

		.steps {
			background-color: #e8eff6;

			.step-lists {
				.step-list-item {
					--icon-clr: #a6aeb6;
					--info-clr: #a6aeb6;
					--bg-color: transparent;
					--border-color: #a6aeb6;
					--stepIconSize: 40px;
					--distance: 60px;
					position: relative;

					+ .step-list-item {
						padding-top: var(--distance);

						&::before {
							content: "";
							display: block;
							position: absolute;
							width: 0.5px;
							height: calc(100% - var(--stepIconSize));
							top: calc(0% - 1px);
							left: 20px;
							transform: translateX(-50%);
							background-color: var(--border-color);
						}
					}

					.step-icon {
						height: var(--stepIconSize);
						width: var(--stepIconSize);
						border-radius: 100%;
						display: grid;
						place-items: center;
						background: var(--bg-color);
						border: 1px solid var(--border-color);
						color: var(--icon-clr);
						font-size: 14px;
						font-weight: 600;
					}

					.step-info {
						font-size: 14px;
						font-weight: 700;
						color: var(--info-clr);
					}

					&.completed {
						--icon-clr: #fff;
						--info-clr: var(--text-clr-black);
						--bg-color: var(--status-clr-green);
						--border-color: var(--status-clr-green);
					}
				}
			}
		}

		.step-content {
			--min-height: 500px;
			min-height: var(--min-height);
		}
	}
</style>
