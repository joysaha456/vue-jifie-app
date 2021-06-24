<template>
	<div class="CreateCampaignModal">
		<vue-final-modal
			@click-outside="$emit('closeCreateCampaignModal', false)"
			v-model="showModal"
			classes="vue-modal-container vue-modal-lg"
			content-class="vue-modal-content is-theme-radius py-4 px-4"
		>
			<CreateEmailTemplate v-if="!emailTemplateReview" @templateReview="templateReview" @closeCreateCampaignModalTrigger="closeCreateCampaignModalTrigger" />
			<EmailTemplateReview v-if="emailTemplateReview" @closeCreateCampaignModalTrigger="closeCreateCampaignModalTrigger" />
		</vue-final-modal>
	</div>
</template>

<script>
	import CreateEmailTemplate from "@/components/getPaid/CreateEmailTemplate";
	import EmailTemplateReview from "@/components/getPaid/EmailTemplateReview";
	export default {
		name: "CreateCampaignModal",
		components: {
			CreateEmailTemplate,
            EmailTemplateReview
		},
		props: {
			showModal: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				emailTemplateReview: false,
			};
		},
		methods: {
			templateReview(value) {
				this.emailTemplateReview = value;
			},
			closeCreateCampaignModalTrigger() {
				this.emailTemplateReview = false;
				this.$emit('closeCreateCampaignModal', false);
			},
		},
	};
</script>
