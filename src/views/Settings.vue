<template>
	<div class="settings">
		<div class="container-fluid">
			<PageTitle title="Settings" />
			<div class="mb-4">
                <SettingsNavPills />
			</div>
		</div>
	</div>
</template>

<script>
	import PageTitle from "@/components/PageTitle/PageTitle.vue";
	import SettingsNavPills from "@/components/Settings/SettingsNavPills.vue";
	export default {
		name: "Settings",
		components: {
            PageTitle,
			SettingsNavPills,
		},
	};
</script>

<style lang="scss" scoped></style>
