<template>
	<div class="container-fluid">
		<PageTitle title="Application" />
		<div class="row">
			<div class="col-xl-8">
				<CreateApplication />
			</div>
			<div class="col-xl-4">
				<SubmittedApplications />
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import CreateApplication from "@/components/CreateApplication/CreateApplication.vue";
	import SubmittedApplications from "@/components/ApplicationLists/SubmittedApplications.vue";
	export default {
		name: "CreateNewApplication",
		components: {
			PageTitle,
			CreateApplication,
			SubmittedApplications,
		},
	};
</script>
