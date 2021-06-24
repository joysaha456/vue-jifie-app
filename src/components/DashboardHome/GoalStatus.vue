<template>
	<div class="change-goal-status bg-white is-theme-lg-radius px-4 py-4">
		<div class="status-header d-flex align-items-center justify-content-between">
			<h5 class="jifie-card-title mb-2">{{ title }}</h5>
			<button v-if="changeButton" type="button" class="btn border-2 btn-outline-dark is-theme-radius fw-bold">Changes</button>
		</div>
		<ul v-if="GoalStatus" class="status-lists list-unstyled mt-2">
			<li v-for="(item, index) in GoalStatus" :key="index" class="status-list is-theme-lg-radius px-3 py-3">
				<div v-if="item.status === 'success'" class="status-list-icon bg-clr-green">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" class="bi bi-check" viewBox="0 0 16 16">
						<path
							d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
						/>
					</svg>
				</div>
				<div v-if="item.status === 'reached'" class="status-list-icon bg-clr-yellow-light">
					<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.5 12.8005V3.12453L3.03437 4.98408C3.29688 8.61569 5.07188 11.316 7.5 12.8005ZM14.0781 2.6151L8.07812 0.114857C7.89536 0.0390305 7.69943 0 7.50156 0C7.30369 0 7.10777 0.0390305 6.925 0.114857L0.925 2.6151C0.365625 2.84637 0 3.3933 0 3.99961C0 10.2033 3.57812 14.4913 6.92188 15.8851C7.29063 16.0383 7.70625 16.0383 8.075 15.8851C10.7531 14.7694 15 10.9159 15 3.99961C15 3.3933 14.6344 2.84637 14.0781 2.6151ZM7.5 14.5006C4.45312 13.2318 1.5 9.29075 1.5 3.99961L7.5 1.49937L13.5 3.99961C13.5 9.43139 10.425 13.2818 7.5 14.5006Z"
							fill="#F79A2E"
						/>
					</svg>
				</div>
				<p class="text-muted mb-0">{{ item.title }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "GoalStatus",
		props: {
			title: String,
			GoalStatus: Array,
			changeButton: Boolean,
		},
	};
</script>

<style lang="scss" scoped>
	.change-goal-status {
		.status-list {
			--grid-first: 30px;
			display: grid;
			grid-template-columns: var(--grid-first) 1fr;
			grid-column-gap: 15px;
			align-items: center;
			transition: all 0.2s linear;

			.status-list-icon {
				width: var(--grid-first);
				height: var(--grid-first);
				border-radius: 100%;
				display: grid;
				place-items: center;
			}

			&:hover {
				background-color: var(--bs-light);
			}
		}
	}
</style>
