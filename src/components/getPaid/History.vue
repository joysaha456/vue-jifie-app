<template>
	<CreateNewReminderModal :showModal="createNewReminderModalInit" @closeCreateNewReminderModal="closeCreateNewReminderModal" />
	<div class="get-paid-history bg-white px-4 py-4 is-theme-lg-radius">
		<h5 class="jifie-card-title mb-4">History</h5>
		<form action="#">
			<div class="form-group mb-4">
				<select class="form-select">
					<option selected>All reminders</option>
					<option value="1">Show campaign reminders</option>
				</select>
			</div>
			<div class="form-group mb-4">
				<div class="form-elect" v-click-outside="onClickOutside" :data-value="value" :data-list="formElectList">
					<div class="selector border is-theme-radius bg-light" @click="electToggle()">
						<div class="label d-flex align-items-center justify-content-between">
							<div class="flex-shrink-0 me-3">
								<p class="mb-0 fw-bold text-dark">{{ value.code }}</p>
								<p class="mb-0 text-muted">
									<small>{{ value.date }}</small>
								</p>
							</div>
							<div class="flex-grow-1 text-end pe-5">
								<p class="mb-0 fw-bold text-clr-red">{{ value.amount }}</p>
							</div>
						</div>
						<div class="arrow" :class="{ expanded: visible }"></div>
						<div :class="{ hidden: !visible, visible }">
							<ul class="list-unstyled elect-options rounded is-scrollable" style="--max-height : 200px">
								<li class="elect-option" v-for="(item, key) in formElectList" :key="key" @click="electItem(item)">
									<div class="d-flex align-items-center justify-content-between">
										<div class="flex-shrink-0 me-3">
											<p class="mb-0 fw-bold text-dark">{{ item.code }}</p>
											<p class="mb-0 text-muted">
												<small>{{ item.date }}</small>
											</p>
										</div>
										<div class="flex-grow-1 text-end pe-5">
											<p class="mb-0 fw-bold text-clr-red">{{ item.amount }}</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="form-group text-end mb-4">
				<button @click="createNewReminderModalInit = true" type="button" class="btn btn-jifie px-4 py-2">New Reminder</button>
			</div>
		</form>
	</div>
</template>

<script>
	import CreateNewReminderModal from "@/components/getPaid/CreateNewReminderModal.vue";
	export default {
		name: "History",
		components: {
			CreateNewReminderModal,
		},
		data() {
			return {
				createNewReminderModalInit: false,
				value: { code: "4ge456", date: "26 May, 2021", amount: "$130.44" },
				formElectList: [
					{ code: "4ge456", date: "26 May, 2021", amount: "$130.44" },
					{ code: "465g3", date: "10 May, 2021", amount: "$1630.44" },
					{ code: "gdfsds456", date: "26 July, 2021", amount: "$3696.44" },
					{ code: "fd25", date: "09 Feb, 2021", amount: "$650.44" },
					{ code: "fsdgrfg", date: "20 Jun, 2021", amount: "$130.44" },
					{ code: "hg43", date: "03 Dec, 2021", amount: "$30.44" },
				],
				visible: false,
			};
		},
		methods: {
			electToggle() {
				this.visible = !this.visible;
			},
			electItem(option) {
				this.value = option;
			},
			onClickOutside(event) {
				this.visible = false;
			},
			closeCreateNewReminderModal (value) {
				this.createNewReminderModalInit = value
			}
		},
	};
</script>

<style lang="scss" scoped>
	.form-elect {
		width: 100%;
		display: block;
		.selector {
			position: relative;
			z-index: 1;
			.arrow {
				position: absolute;
				right: 15px;
				top: 40%;
				width: 20px;
				height: 20px;
				transform: rotateZ(0deg) translateY(0px);
				transition-duration: 0.3s;
				transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				background-position: center;
				background-size: 18px;

				&.expanded {
					transform: rotateZ(180deg) translateY(2px);
				}
			}

			.label {
				display: block;
				padding: 12px;
				font-size: 16px;
				color: #888;
			}
		}
		ul.elect-options {
			width: 100%;
			list-style-type: none;
			padding: 0;
			margin: 0;
			font-size: 16px;
			border: 1px solid gainsboro;
			position: absolute;
			z-index: 1;
			background: #fff;
			li.elect-option {
				padding: 4px 12px;
				font-size: 14px !important;
				&:hover {
					cursor: pointer;
					background: #f5f5f5;
				}
			}
		}
		.hidden {
			visibility: hidden;
		}
		.visible {
			visibility: visible;
		}
	}
</style>
