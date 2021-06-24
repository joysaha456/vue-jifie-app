<template>
	<div class="RepaymentCalculator bg-white is-theme-lg-radius px-4 py-4">
		<h5 class="jifie-card-title mb-4">Work out how much your repayments might be.</h5>
		<form action="#" method="POST">
			<div class="row">
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label">Loan Amount</label>
						<input type="number" class="form-control is-dollar" placeholder="10,000" />
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label">Upfront Payment</label>
						<input type="number" class="form-control is-dollar" placeholder="500" />
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label">Upfront Fees</label>
						<input type="number" class="form-control is-dollar" placeholder="500" />
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label">Purpose of Funds</label>
						<select class="form-select">
							<option selected>Equipment/Asset</option>
							<option value="1">Home Repairs.</option>
							<option value="2">Finance funeral expenses</option>
							<option value="3">Help cover moving costs</option>
							<option value="4">Make a large purchase.</option>
						</select>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label">Loan Terms</label>
						<div class="group-after" data-after="Years">
							<input type="number" class="form-control loan-terms" placeholder="6" />
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group mb-4">
						<label for="//" class="form-label"> &nbsp; </label>
						<div class="group-after" data-after="Months">
							<input type="number" class="form-control loan-terms" placeholder="0" />
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="form-group">
						<button type="button" class="btn btn-jifie px-4 py-2 is-theme-radius">Calculate</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "RepaymentCalculator",
	};
</script>

<style lang="scss" scoped>
	.RepaymentCalculator {
		.group-after {
			position: relative;

			&::after {
				display: inline-block;
				content: attr(data-after);
				position: absolute;
				top: 50%;
				right: 5px;
                padding-right: 20px;
				transform: translateY(-50%);
				font-size: 16px;
				font-weight: 500;
				background-color: #fff;
			}
		}

		.form-control {
			background-repeat: no-repeat;
			background-size: 8px;
			background-position: 20px calc(50% + 1px);

			&.is-dollar {
				background-image: url("data:image/svg+xml,%3Csvg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.344 9.088C7.344 5.328 2.416 6.432 2.416 4.112C2.416 3.376 2.96 2.848 3.968 2.848C4.848 2.848 5.472 3.296 5.728 4.256L7.2 3.696C6.896 2.544 6.016 1.792 4.768 1.584V0.112H3.392V1.568C1.792 1.776 0.88 2.816 0.88 4.24C0.88 7.744 5.76 6.672 5.76 9.136C5.76 10 5.104 10.544 4.048 10.544C2.944 10.544 2.16 9.936 1.904 8.864L0.432 9.44C0.832 10.848 1.92 11.696 3.36 11.856V13.296H4.736V11.824C6.352 11.568 7.344 10.528 7.344 9.088Z' fill='%232D405A'/%3E%3C/svg%3E");
				padding-left: 38px;
			}
		}
	}
</style>
