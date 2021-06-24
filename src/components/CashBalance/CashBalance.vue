<template>
	<section class="cashBalance-flow bg-white is-theme-lg-radius is-drop-shadow  overflow-hidden">
		<div
			v-if="balance.cash"
			class="cash-balance bg-clr-green px-4 py-4 text-light is-theme-lg-radius"
			:style="{
				'background-image': 'url(' + require('../../assets/images/cash-balance-bg.png') + ')',
			}"
		>
			<p class="mb-2 title">Cash Balance</p>
			<h3 class="mb-0 balance">{{ `$${balance.cash}` }}</h3>
		</div>
		<ul class="list-unstyled cashBalance-variant px-4 pt-2">
			<li v-if="balance.totalProfits" class="cashBalance-variant-list py-3">
				<div class="variant-icon bg-clr-green is-theme-radius">
					<img src="../../assets/images/profits-1.svg" alt="img-icon" class="img-fluid" />
				</div>
				<div class="variant-text">
					<p class="mb-1 title">Total Profits</p>
					<h4 class="mb-0 balance text-clr-green">
						{{ `$${balance.totalProfits}` }}
					</h4>
				</div>
			</li>
			<li v-if="balance.totalIncome" class="cashBalance-variant-list py-3">
				<div class="variant-icon bg-clr-blue-solid is-theme-radius">
					<img src="../../assets/images/profits-2.svg" alt="img-icon" class="img-fluid" />
				</div>
				<div class="variant-text">
					<p class="mb-1 title">Total Income</p>
					<h4 class="mb-0 balance text-clr-blue-solid">
						{{ `+ $${balance.totalIncome}` }}
					</h4>
				</div>
			</li>
			<li v-if="balance.totalExpense" class="cashBalance-variant-list py-3">
				<div class="variant-icon bg-clr-maroon is-theme-radius">
					<img src="../../assets/images/profits-3.svg" alt="img-icon" class="img-fluid" />
				</div>
				<div class="variant-text">
					<p class="mb-1 title">Total Expenses</p>
					<h4 class="mb-0 balance text-clr-maroon">
						{{ `- $${balance.totalExpense}` }}
					</h4>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: "CashBalance",
		data() {
			return {
				balance: {
					cash: "56,9875.00.00",
					totalProfits: "569875.00",
					totalIncome: "569875.00",
					totalExpense: "569875.00",
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.cashBalance-flow {
		.cash-balance {
			.title {
				font-size: 14px;
				font-weight: 400;
				color: #dbf5e7;
			}

			.balance {
				font-size: 26px;
				font-weight: 700;
				color: #fff;
			}
		}

		.cashBalance-variant {
			.cashBalance-variant-list {
				--grid-first: 45px;
				display: grid;
				grid-template-columns: var(--grid-first) 1fr;
				grid-column-gap: 15px;
				align-items: center;

				.variant-icon {
					width: var(--grid-first);
					height: var(--grid-first);
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.variant-text {
					.title {
						font-size: 12px;
						line-height: calc(100% + 5px);
						font-weight: 400;
						color: var(--text-clr-gray-dark);
					}

					.balance {
						font-size: 16px;
						line-height: calc(100% + 5px);
						font-weight: 500;
					}
				}

				+ .cashBalance-variant-list {
					border-top: 1px solid #e8eff6;
				}
			}
		}
	}
</style>
