<template>
	<div class="news-feed bg-white px-4 py-4 is-theme-lg-radius">
		<h5 class="jifie-card-title mb-4">Feed</h5>
		<ul class="feed-list px-0 my-0">
			<li class="feed-list-item d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="../../assets/images/user-1.png" alt="img" class="img-fluid" />
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-0"><span class="text-clr-blue-solid">John Smith</span> Added a new agent</h6>
					<p class="text-muted mb-0"><small>5 min ago</small></p>
				</div>
			</li>
			<li class="feed-list-item d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="../../assets/images/lock-red.png" alt="img" class="img-fluid" />
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-0">login in new device and new location</h6>
					<p class="text-muted mb-0"><small>5 min ago</small></p>
				</div>
			</li>
			<li class="feed-list-item d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="../../assets/images/lock-yellow.png" alt="img" class="img-fluid" />
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-0">You have changes the password</h6>
					<p class="text-muted mb-0"><small>5 min ago</small></p>
				</div>
			</li>
			<li class="feed-list-item d-flex align-items-center">
				<div class="flex-shrink-0">
					<img src="../../assets/images/user-2.png" alt="img" class="img-fluid" />
				</div>
				<div class="flex-grow-1 ms-3">
					<h6 class="mb-0"><span class="text-clr-blue-solid">John Smith</span> Added a new agent</h6>
					<p class="text-muted mb-0"><small>5 min ago</small></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Feed",
	};
</script>

<style lang="scss" scoped>
	.feed-list {
		.feed-list-item {
			padding: 16px 0;

			&:first-child {
				padding-top: 0;
			}
			&:last-child {
				padding-bottom: 0;
			}

			+ .feed-list-item {
				border-top: 1px solid #f5f5f5;
			}
		}
	}
</style>
