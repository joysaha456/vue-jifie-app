<template>
	<CreateCampaignModal :showModal="campaignModalInit" @closeCreateCampaignModal="closeCreateCampaignModal" />
	<div class="CreateCampaign">
		<div class="CreateCampaign-header d-flex flex-wrap align-items-center justify-content-between mb-5">
			<h5 class="jifie-card-title mb-1">Campaign</h5>
			<button type="button" class="px-4 py-2 btn btn-jifie" @click="campaignModalInit = true">Create Campaign</button>
		</div>
		<div class="progressing-week">
			<ul class="progressing-widgets list-unstyled mb-0 px-0 d-flex align-items-center justify-content-between">
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
				<li class="progressing-widget">
					<div class="progressing-circle"></div>
					<div class="progressing-line"></div>
				</li>
			</ul>
			<ul class="progressing-guideline mb-0 px-0 d-flex align-items-center mt-4">
				<li class="d-flex align-items-center me-4">
					<div class="guideline-cirle flex-shrink-0 me-3 unselected"></div>
					<p class="mb-0 text-muted">Unselected</p>
				</li>
				<li class="d-flex align-items-center me-4">
					<div class="guideline-cirle flex-shrink-0 me-3 in-porgress"></div>
					<p class="mb-0 text-muted">In Progress</p>
				</li>
				<li class="d-flex align-items-center me-4">
					<div class="guideline-cirle flex-shrink-0 me-3 d-flex align-items-center justify-content-center completed">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" class="bi bi-check" viewBox="0 0 16 16">
							<path
								d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
							/>
						</svg>
					</div>
					<p class="mb-0 text-muted">Completed</p>
				</li>
				<li class="d-flex align-items-center me-4">
					<div class="guideline-cirle flex-shrink-0 me-3 paused d-flex align-items-center justify-content-center">
						<small>!</small>
					</div>
					<p class="mb-0 text-muted">Paused</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import CreateCampaignModal from "@/components/getPaid/CreateCampaignModal";
	export default {
		name: "CreateCampaign",
		components: {
			CreateCampaignModal,
		},
		data() {
			return {
				campaignModalInit: false,
			};
		},
		methods: {
			closeCreateCampaignModal(value) {
				this.campaignModalInit = value;
			},
		},
	};
</script>

<style lang="scss">
	.progressing-guideline {
		.guideline-cirle {
			--size: 18px;
			--bg-color: #c4c4c4;
			width: var(--size);
			height: var(--size);
			border-radius: 100%;
			border: 1px solid var(--bg-color);
			background-color: var(--bg-color);

			&.unselected {
				background-color: #fff;
			}

			&.in-porgress {
				--bg-color: #f3b410;
			}
			&.completed {
				--bg-color: #8addc1;
			}
			&.in-paused {
				--bg-color: #f0f0f0;
			}
		}
	}
	.progressing-week {
		.progressing-widgets {
			--circle-size: 36px;
			--line-color: #c4c4c4;
			position: relative;
			z-index: 10;

			&::after {
				content: "";
				display: block;
				width: 100%;
				border-bottom: 2px dashed var(--line-color);
				position: absolute;
				top: 20px;
				left: 0;
				right: 0;
				z-index: -10;
			}

			.progressing-widget {
				.progressing-circle {
					width: var(--circle-size);
					height: var(--circle-size);
					background-color: #fff;
					border: 2px solid #f0f0f0;
					border-radius: 100%;
				}

				.progressing-line {
					width: var(--circle-size);
					height: 4px;
					background-color: var(--line-color);
					border-radius: 10px;
					margin-top: 10px;
				}
			}
		}
	}
</style>
