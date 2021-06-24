<template>
	<div class="CalculatePanel px-4 py-4 bg-white is-theme-lg-radius">
		<div class="CalculatePanel-grid table-responsive">
			<table class="table table-bordered table-layout-fixed">
				<tbody>
					<tr>
						<td class="px-3 py-3">
							<h5 class="jifie-card-title mb-3">Due</h5>
							<div class="row">
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Amount</small></p>
										<h5 class="jifie-card-title text-warning fw-bold">0.00</h5>
									</div>
								</div>
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Invoices</small></p>
										<h5 class="jifie-card-title text-warning fw-bold">0</h5>
									</div>
								</div>
							</div>
						</td>
						<td class="px-3 py-3 ps-5">
							<h5 class="jifie-card-title mb-3">Overdue</h5>
							<div class="row">
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Amount</small></p>
										<h5 class="jifie-card-title text-clr-red fw-bold">0.00</h5>
									</div>
								</div>
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Invoices</small></p>
										<h5 class="jifie-card-title text-clr-red fw-bold">0</h5>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td class="px-3 py-3">
							<h5 class="jifie-card-title mb-3">Paid</h5>
							<div class="row">
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Amount</small></p>
										<h5 class="jifie-card-title text-clr-green fw-bold">$55,667.70</h5>
									</div>
								</div>
								<div class="col-6">
									<div class="content">
										<p class="mb-1 text-muted"><small>Invoices</small></p>
										<h5 class="jifie-card-title text-clr-green fw-bold">7</h5>
									</div>
								</div>
							</div>
						</td>
						<td class="px-3 py-3 ps-5">
							<h5 class="jifie-card-title mb-3">Behaviour</h5>
							<p class="mb-0">Pays 9 days after the due date.</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CalculatePanel",
	};
</script>

<style lang="scss" scoped>
	.CalculatePanel-grid {
		.table {
			tbody {
				tr {
                    &:first-child {
                            border-top: 0;
                    }
                    &:last-child {
                        border-bottom: 0;
                    }
					td:first-child {
						border-left: 0;
					}
					td:last-child {
						border-right: 0;
					}
				}
			}
		}
	}
</style>
