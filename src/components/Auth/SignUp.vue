<template>
	<div class="authentication sign-up">
		<h2 class="text-dark fw-bold mb-2">Create your free account</h2>
		<p class="mb-0 text-muted">Create your account by filled out the following field.</p>
		<Form class="authentication-form mt-5" @submit="onSubmit" :validation-schema="schema">
			<div class="form-group mb-3">
				<label for="#" class="mb-1">Full Name</label>
				<Field class="form-control form-control-name" name="fullName" type="text" placeholder="Enter Full Name" />
				<ErrorMessage class="d-block text-danger" name="fullName" />
			</div>
			<div class="form-group mb-3">
				<label for="#" class="mb-1">Email</label>
				<Field class="form-control form-control-email" name="email" type="email" placeholder="Enter email address" />
				<ErrorMessage class="d-block text-danger" name="email" />
			</div>
			<div class="form-group mb-4">
				<label for="#" class="mb-1">Password</label>
				<div class="form-group-password position-relative">
					<Field class="form-control form-control-password" name="password" :type="passwordShow ? 'text' : 'password'" placeholder="Enter password" />
					<button type="button" class="btn btn-password-show" @click="passwordShow = !passwordShow">
						<span class="ni fs-5 text-muted" :class="passwordShow ? 'ni-eye-off' : 'ni-eye'"></span>
					</button>
				</div>
				<ErrorMessage class="d-block text-danger" name="password" />
			</div>
			<div class="form-group mb-4">
				<label for="#" class="mb-1">Re-type Password</label>
				<div class="form-group-password position-relative">
					<Field
						class="form-control form-control-password"
						name="reTypePassword"
						:type="reTypePasswordShow ? 'text' : 'password'"
						placeholder="Re-type Password"
					/>
					<button type="button" class="btn btn-password-show" @click="reTypePasswordShow = !reTypePasswordShow">
						<span class="ni fs-5 text-muted" :class="reTypePasswordShow ? 'ni-eye-off' : 'ni-eye'"></span>
					</button>
				</div>
				<ErrorMessage class="d-block text-danger" name="reTypePassword" />
			</div>
			<div class="form-group mb-5">
				<div class="form-check">
					<input type="checkbox" class="form-check-input" id="check" />
					<label class="form-check-label" for="check">
                        By signing up, you agree to the
                        <router-link to="/sign-up" class="text-decoration-none">terms and conditions</router-link>
                    </label>
				</div>
			</div>
			<div class="form-group d-flex align-items-center mb-4">
				<button class="btn btn-jifie px-4 py-2 me-3" type="submit">Submit</button>
				<button class="btn btn-jifie btn-google-signin d-flex align-items-center px-4 py-2 text-primary" type="button">
					<svg class="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4.3882 8.1375C4.77811 6.95787 5.53059 5.93151 6.5383 5.20483C7.54601 4.47815 8.75748 4.08828 9.99987 4.09083C11.4082 4.09083 12.6815 4.59083 13.6815 5.40917L16.5915 2.5C14.8182 0.954167 12.5457 0 9.99987 0C6.0582 0 2.66487 2.24833 1.0332 5.54167L4.3882 8.1375Z"
							fill="#EA4335"
						/>
						<path
							d="M13.3671 15.011C12.4588 15.5968 11.3054 15.9093 10.0004 15.9093C8.76298 15.9118 7.55609 15.5251 6.55061 14.8038C5.54514 14.0825 4.79204 13.0631 4.39792 11.8901L1.03125 14.446C1.85729 16.1179 3.13564 17.5246 4.7211 18.5064C6.30656 19.4882 8.13559 20.0057 10.0004 20.0001C12.4446 20.0001 14.7796 19.131 16.5287 17.5001L13.3679 15.011H13.3671Z"
							fill="#34A853"
						/>
						<path
							d="M16.5283 17.5C18.3575 15.7933 19.545 13.2533 19.545 9.99997C19.545 9.40831 19.4542 8.77247 19.3183 8.18164H10V12.0458H15.3633C15.0992 13.345 14.3883 14.3508 13.3675 15.0108L16.5283 17.5Z"
							fill="#4A90E2"
						/>
						<path
							d="M4.3976 11.8898C4.19373 11.2806 4.09016 10.6423 4.09093 9.99984C4.09093 9.34817 4.1951 8.72234 4.38843 8.13734L1.03343 5.5415C0.347079 6.92708 -0.00673329 8.4536 9.70454e-05 9.99984C9.70454e-05 11.5998 0.37093 13.1082 1.03093 14.4457L4.3976 11.8898Z"
							fill="#FBBC05"
						/>
					</svg>
					<span class="button-text">Sign in with gogole</span>
				</button>
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
		name: "SignUp",
		components: {
			Form,
			Field,
			ErrorMessage,
		},
		data() {
			const schema = yup.object({
				fullName: yup
					.string()
					.required('full name is required field !')
					.min(4 , 'full name must be at least 4 characters'),
				email: yup
					.string()
					.required()
					.email(),
				password: yup
					.string()
					.required()
					.min(8),
				reTypePassword: yup
					.string()
					.required('please re-type your password. its a required field !')
					.min(8 , 're-type password must be at least 8 characters'),
			});

			return {
				schema,
				passwordShow: false,
				reTypePasswordShow: false,
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
