<template>
	<div class="application">
		<div class="container-fluid">
			<PageTitle title="Application" />
			<div class="row">
				<div class="col-xl-8">
					<div class="create-application bg-white is-theme-lg-radius is-drop-shadow px-4 py-4 mb-4">
						<div class="row align-items-center">
							<div class="col-6">
								<div class="create-application-title d-flex flex-wrap align-items-center">
									<span class="appIcon-buffet bg-clr-green-light me-3">
										<svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0)">
												<path
													d="M18.3023 4.78003L14.151 0.68335C13.7057 0.243897 13.1021 -0.00512695 12.4737 -0.00512695H2.375C1.0638 -0.00024414 0 1.04956 0 2.34351V22.656C0 23.95 1.0638 24.9998 2.375 24.9998H16.625C17.9362 24.9998 19 23.95 19 22.656V6.44019C19 5.82007 18.7477 5.21948 18.3023 4.78003ZM17.1841 5.88843C17.288 5.99097 17.3573 6.11304 17.3919 6.24976H12.6667V1.58667C12.8052 1.62085 12.9289 1.68921 13.0328 1.79175L17.1841 5.88843ZM16.625 23.4373H2.375C1.93958 23.4373 1.58333 23.0857 1.58333 22.656V2.34351C1.58333 1.91382 1.93958 1.56226 2.375 1.56226H11.0833V6.64038C11.0833 7.2898 11.6128 7.81226 12.2708 7.81226H17.4167V22.656C17.4167 23.0857 17.0604 23.4373 16.625 23.4373ZM14.25 11.5232V11.9138C14.25 12.2361 13.9828 12.4998 13.6562 12.4998H5.34375C5.01719 12.4998 4.75 12.2361 4.75 11.9138V11.5232C4.75 11.2009 5.01719 10.9373 5.34375 10.9373H13.6562C13.9828 10.9373 14.25 11.2009 14.25 11.5232ZM14.25 14.6482V15.0388C14.25 15.3611 13.9828 15.6248 13.6562 15.6248H5.34375C5.01719 15.6248 4.75 15.3611 4.75 15.0388V14.6482C4.75 14.3259 5.01719 14.0623 5.34375 14.0623H13.6562C13.9828 14.0623 14.25 14.3259 14.25 14.6482ZM14.25 17.7732V18.1638C14.25 18.4861 13.9828 18.7498 13.6562 18.7498H5.34375C5.01719 18.7498 4.75 18.4861 4.75 18.1638V17.7732C4.75 17.4509 5.01719 17.1873 5.34375 17.1873H13.6562C13.9828 17.1873 14.25 17.4509 14.25 17.7732Z"
													fill="#12CA9E"
												/>
											</g>
											<defs>
												<clipPath id="clip0">
													<rect width="19" height="25" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</span>
									<div class="application-title-content">
										<h5 class="mb-1">Application for Loan</h5>
										<p class="mb-0"><small>Just send us a application for loan.</small></p>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="application-submit text-end">
									<router-link to="/create-new-application" class="btn btn-jifie px-4 py-2 text-dark px-4 py-2 is-theme-radius"
										>Submit Application</router-link
									>
								</div>
							</div>
						</div>
					</div>
					<div class="mb-4">
						<ApplicationLists />
					</div>
					<div class="mb-4">
						<ApplicationUsagesHistory />
					</div>
				</div>
				<div class="col-xl-4">
					<SubmittedApplications />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import ApplicationLists from "@/components/ApplicationLists/ApplicationLists.vue";
	import SubmittedApplications from "@/components/ApplicationLists/SubmittedApplications.vue";
	import ApplicationUsagesHistory from "@/components/ApplicationLists/ApplicationUsagesHistory.vue";
	export default {
		name: "Application",
		components: {
			PageTitle,
			ApplicationLists,
			SubmittedApplications,
			ApplicationUsagesHistory,
		},
	};
</script>

<style lang="scss" scoped></style>
