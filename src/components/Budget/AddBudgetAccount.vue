<template>
	<div class="AddBudgetAccount">
		<vue-final-modal
			@click-outside="emitShowModal"
			v-model="showModal"
			classes="vue-modal-container vue-modal-md"
			content-class="vue-modal-content is-theme-radius py-4 px-4"
		>
			<div class="vue-modal-header d-flex align-items-center justify-content-between">
				<h5 class="vue-modal-header-title mb-0">Add Custom Budget</h5>
				<button class="btn px-0 py-0 vue-modal-close" @click="emitShowModal">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="vue-modal-body mt-4">
				<p class="mb-0 text-muted">
					You can create a custom budget (not part of your accounting) to track your expenses attached to it. This can be a project based budget like
					expansion, or a new internal product, yearly education or anything alike
				</p>
				<form action="#" class="mt-4">
					<div class="form-group">
						<div class="form-group mb-3">
							<label for="#" class="form-label">Name of the Account</label>
							<select class="form-select">
								<option selected value="a-1">Account 1</option>
								<option value="a-2">Account 2</option>
								<option value="a-3">Account 3</option>
								<option value="a-4">Account 4</option>
							</select>
						</div>
					</div>
					<div class="form-group text-end mt-4">
						<button @click="emitNextModalTriggerd" type="button" class="btn btn-jifie px-4 py-2">Next</button>
					</div>
				</form>
			</div>
		</vue-final-modal>
	</div>
</template>

<script>
	export default {
		name: "AddBudgetAccount",
		props: {
			showModal: {
				type: Boolean,
				default: false,
			},
			modalEmit: Function,
		},
		methods: {
			emitShowModal() {
				this.$emit("addBudgetModalEmit", false);
			},
			emitNextModalTriggerd() {
				this.$emit("nextTriggerdModalEmit", true);
			},
		},
	};
</script>

<style lang="scss" scoped></style>
