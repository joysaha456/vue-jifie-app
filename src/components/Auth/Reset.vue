<template>
	<div class="authentication reset">
		<h2 class="text-dark fw-bold mb-2">Reset Password</h2>
		<p class="mb-0 text-muted">
			Have no fear, help is here. Enter the email address that you wish to reset the password 
            for and we'll send you an email with the instructions
		</p>
		<Form class="authentication-form mt-5" @submit="onSubmit" :validation-schema="schema">
			<div class="form-group mb-3">
				<label for="#" class="mb-1">Email</label>
				<Field class="form-control form-control-email" name="email" type="email" placeholder="Enter email address" />
				<ErrorMessage class="d-block text-danger" name="email" />
			</div>
            <div class="form-group mb-4">
				<button class="btn btn-jifie px-4 py-2 me-3" type="submit">Submit</button>
			</div>
			<div class="form-group">
				<p class="mb-2 text-muted">
					<small> Already a user? <router-link to="/sign-in" class="text-decoration-none">Login here</router-link></small>
				</p>
				<p class="mb-0 text-muted">
					<small> Are you an accountant? <router-link to="/sign-up" class="text-decoration-none">Sign Up Here</router-link></small>
				</p>
			</div>
		</Form>
	</div>
</template>


<script>
	import { Form, Field, ErrorMessage } from "vee-validate";
	import * as yup from "yup";

	export default {
		name: "Reset",
		components: {
			Form,
			Field,
			ErrorMessage,
		},
		data() {
			const schema = yup.object({
				email: yup
					.string()
					.required()
					.email(),
			});

			return {
				schema,
			};
		},
		methods: {
			onSubmit(values) {
				// Submit values to API...
				alert(JSON.stringify(values, null, 2));
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./Authentication.scss";
</style>
