<template>
	<div class="applicationDetailsModal">
		<vue-final-modal v-model="showModal" classes="vue-modal-container vue-modal-sm" content-class="vue-modal-content is-theme-radius py-4 px-4">
			<div class="vue-modal-header d-flex align-items-center justify-content-between">
				<h5 class="vue-modal-header-title mb-0">Application Details</h5>
				<button class="btn px-0 py-0 vue-modal-close" @click="emitShowModal">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="vue-modal-body mt-4">
				<div class="row">
					<div class="col-sm-4">
                        <div class="app-details-card mb-4">
                            <p class="mb-1 text-muted"><small>Amount</small></p>
                            <h5 class="fs-6 mb-0">$5,874.00</h5>
                        </div>
                    </div>
					<div class="col-sm-4">
                        <div class="app-details-card mb-4">
                            <p class="mb-1 text-muted"><small>Monthly repayment</small></p>
                            <h5 class="fs-6 mb-0">$5,874.00</h5>
                        </div>
                    </div>
					<div class="col-sm-4">
                        <div class="app-details-card mb-4">
                            <p class="mb-1 text-muted"><small>Term</small></p>
                            <h5 class="fs-6 mb-0">6 years</h5>
                        </div>
                    </div>
					<div class="col-sm-4">
                        <div class="app-details-card mb-4">
                            <p class="mb-1 text-muted"><small>Missing Term</small></p>
                            <h5 class="fs-6 mb-0">5.6 years</h5>
                        </div>
                    </div>
					<div class="col-sm-6">
                        <div class="app-details-card mb-4">
                            <p class="mb-1 text-muted"><small>Product type</small></p>
                            <h5 class="fs-6 mb-0">Asset or Equipment Loan</h5>
                        </div>
                    </div>
				</div>
			</div>
		</vue-final-modal>
	</div>
</template>


<script>
	export default {
		name: "ApplicationDetailsModal",
		props: {
			showModal: {
				type: Boolean,
				default: false,
			},
			modalEmit: Function,
		},
		methods: {
			emitShowModal() {
				this.$emit("modalEmit", false);
			},
		},
	};
</script>


<style lang="scss" scoped>
	.modal-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal-content {
		position: relative;
		width: 50%;
		max-height: 300px;
		padding: 16px;
		overflow: auto;
		background-color: #fff;
		border-radius: 4px;
	}
	.modal-close {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		margin: 8px 8px 0 0;
		cursor: pointer;
	}
	.modal-close::hover {
		color: gray;
	}
</style>
