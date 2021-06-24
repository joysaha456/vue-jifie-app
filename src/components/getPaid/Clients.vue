<template>
	<div class="getPaid-clients px-4 py-4 bg-white is-theme-lg-radius">
		<h5 class="jifie-card-title mb-4">Clients</h5>
		<ul class="mb-0 px-0 list-unstyled clients-list is-scrollable" style="--max-height : 600px">
			<li class="px-3 py-3">
				<p class="mb-0 fw-bold text-muted">Etiz Pvt Ltd</p>
				<p class="mb-0 text-clr-red">
					<small>16,522.00</small>
				</p>
			</li>
			<li class="px-4 py-3 active">
				<p class="mb-0 fw-bold text-muted">ABC Private Limited</p>
				<p class="mb-0 text-clr-red">
					<small>16,522.00</small>
				</p>
			</li>
			<li class="px-4 py-3">
				<p class="mb-0 fw-bold text-muted">Stack & Co</p>
				<p class="mb-0 text-clr-red">
					<small>16,522.00</small>
				</p>
			</li>
			<li class="px-4 py-3">
				<p class="mb-0 fw-bold text-muted">Info Technology</p>
				<p class="mb-0 text-clr-red">
					<small>16,522.00</small>
				</p>
			</li>
			<li class="px-4 py-3">
				<p class="mb-0 fw-bold text-muted">Info Pvt Ltd</p>
				<p class="mb-0 text-clr-red">
					<small>16,522.00</small>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Clients",
	};
</script>

<style lang="scss" scoped>
	.getPaid-clients {
		.clients-list {
			li {
				transition: all 0.3s linear;
				cursor: pointer;

				&:not(:where(:last-child)) {
					border-bottom: 1px solid #f0f0f0;
				}

				&:hover ,
                &.active {
					background-color: #DBF5E7;
                    border-radius: 10px;
				}
			}
		}
	}
</style>
