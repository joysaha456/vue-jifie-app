<template>
	<vue-final-modal
		@click-outside="showPersonalInfoModal = false"
		v-model="showPersonalInfoModal"
		classes="vue-modal-container vue-modal-md"
		content-class="vue-modal-content is-theme-radius py-4 px-4"
	>
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Change Personal Info</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="showPersonalInfoModal = false">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
			<form action="#" class="mt-4">
				<ul class="nav nav-pills nav-pills-outline mb-3" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link px-0 me-4 active" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab">
							Personal
						</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link px-0" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab">
							Address
						</button>
					</li>
				</ul>
				<div class="tab-content mt-4">
					<div class="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">First Name</label>
									<input type="text" class="form-control" id="#" placeholder="2337 Kildeer Drive" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Last Name</label>
									<input type="text" class="form-control" id="#" placeholder="Bone" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Phone number</label>
									<input type="text" class="form-control" id="#" placeholder="State" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Date Of birth</label>
									<input type="date" class="form-control" id="#" placeholder="26 Jan 1990" />
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Address Line 1</label>
									<input type="text" class="form-control" id="#" placeholder="2337 Kildeer Drive" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Address Line 2</label>
									<input type="text" class="form-control" id="#" placeholder="Bone" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">State</label>
									<input type="text" class="form-control" id="#" placeholder="State" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group mb-3">
									<label for="#" class="form-label">Country</label>
									<select class="form-select">
										<option selected>Australia</option>
										<option value="1">India</option>
										<option value="2">USA</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group mt-4 text-end">
						<button type="submit" class="btn btn-jifie px-4 py-2">Update</button>
					</div>
				</div>
			</form>
		</div>
	</vue-final-modal>
	<vue-final-modal
		@click-outside="showChangePasswordModal = false"
		v-model="showChangePasswordModal"
		classes="vue-modal-container vue-modal-sm"
		content-class="vue-modal-content is-theme-radius py-4 px-4"
	>
		<div class="vue-modal-header d-flex align-items-center justify-content-between">
			<h5 class="vue-modal-header-title mb-0">Change Password</h5>
			<button class="btn px-0 py-0 vue-modal-close" @click="showChangePasswordModal = false">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.6673 3.33331L3.33398 16.6666" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16.6673 16.6666L3.33398 3.33331" stroke="#56606D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
		<div class="vue-modal-body mt-4">
			<form action="#" class="mt-4 security-setting-change-password">
				<div class="form-group mb-3">
					<label for="#" class="form-label">Old Password</label>
					<input type="password" class="form-control password-control" id="#" placeholder="Enter password" />
				</div>
				<div class="form-group mb-3">
					<label for="#" class="form-label">New Password</label>
					<input type="password" class="form-control password-control" id="#" placeholder="Enter password" />
				</div>
				<div class="form-group mb-3">
					<label for="#" class="form-label">Re-type Password</label>
					<input type="password" class="form-control password-control" id="#" placeholder="Re-type password" />
				</div>
				<div class="form-group mt-4 text-end">
					<button type="submit" class="btn btn-jifie px-4 py-2">Update</button>
				</div>
			</form>
		</div>
	</vue-final-modal>
	<div class="settings-nav-pills bg-white is-theme-lg-radius">
		<div class="d-grid settings-navPills-grid">
			<div class="settings-.navPills-grid-item border-end">
				<div class="logged-user-info bg-clr-green  px-5 py-4">
					<div class="d-flex align-items-center">
						<div class="flex-shrink-0">
							<img src="../../assets/images/user-1.png" alt="user-img" class="img-fluid logged-user-img" />
						</div>
						<div class="flex-grow-1 text-white ms-3">
							<h5 class="logged-user-name fs-5 mb-1">Oleo Bone</h5>
							<p class="mb-0 logged-user-email">
								<small>olio@gmail.com</small>
							</p>
						</div>
					</div>
				</div>
				<div class="navPills-wrapper px-5 py-4">
					<p class="text-muted text-uppercase mb-2">
						<small>Options</small>
					</p>
					<div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
						<button class="nav-link mb-2 active" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab">
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.6445 2.98828C15.457 2.42578 15.1582 1.93945 14.748 1.5293C14.3379 1.11914 13.8574 0.826172 13.3066 0.650391L13.2715 0.632812C12.5098 0.433594 11.6895 0.28125 10.8105 0.175781C9.94336 0.0585938 9.05273 0 8.13867 0C7.22461 0 6.32227 0.0585938 5.43164 0.175781C4.55273 0.292969 3.69141 0.457031 2.84766 0.667969L3.00586 0.632812H2.98828C2.42578 0.820312 1.93945 1.125 1.5293 1.54688C1.11914 1.95703 0.820312 2.43164 0.632812 2.9707V3.00586C0.433594 3.7793 0.275391 4.59961 0.158203 5.4668C0.0527344 6.33398 0 7.22461 0 8.13867C0 9.05273 0.0527344 9.95508 0.158203 10.8457C0.275391 11.7246 0.445312 12.5918 0.667969 13.4473L0.632812 13.2891C0.820312 13.8516 1.11914 14.3438 1.5293 14.7656C1.93945 15.1758 2.41992 15.4688 2.9707 15.6445H3.00586C3.76758 15.8555 4.58203 16.0137 5.44922 16.1191C6.32812 16.2246 7.22461 16.2832 8.13867 16.2949C9.05273 16.2832 9.94922 16.2188 10.8281 16.1016C11.7188 15.9961 12.5859 15.832 13.4297 15.6094L13.2891 15.6445C13.8516 15.457 14.3379 15.1582 14.748 14.748C15.1582 14.3379 15.457 13.8574 15.6445 13.3066V13.2891C15.8438 12.5156 15.9961 11.6953 16.1016 10.8281C16.2188 9.94922 16.2773 9.05273 16.2773 8.13867C16.2773 7.22461 16.2188 6.32812 16.1016 5.44922C15.9961 4.55859 15.832 3.69141 15.6094 2.84766L15.6445 2.98828ZM8.13867 3.39258C8.83008 3.39258 9.41602 3.63867 9.89648 4.13086C10.3887 4.62305 10.6348 5.21484 10.6348 5.90625C10.6348 6.59766 10.3887 7.18945 9.89648 7.68164C9.41602 8.16211 8.83008 8.40234 8.13867 8.40234C7.44727 8.40234 6.85547 8.16211 6.36328 7.68164C5.87109 7.18945 5.625 6.59766 5.625 5.90625C5.625 5.21484 5.87109 4.62305 6.36328 4.13086C6.85547 3.63867 7.44727 3.39258 8.13867 3.39258ZM11.8477 12.8145C11.8008 12.8379 11.748 12.8555 11.6895 12.8672C11.6309 12.8789 11.5723 12.8848 11.5137 12.8848C11.373 12.8848 11.2383 12.8496 11.1094 12.7793C10.9922 12.709 10.9043 12.6094 10.8457 12.4805C10.5879 11.9883 10.2188 11.5898 9.73828 11.2852C9.25781 10.9688 8.72461 10.8105 8.13867 10.8105C7.55273 10.8105 7.01953 10.9629 6.53906 11.2676C6.05859 11.5723 5.68945 11.9707 5.43164 12.4629V12.4805C5.37305 12.5977 5.2793 12.6973 5.15039 12.7793C5.0332 12.8496 4.9043 12.8848 4.76367 12.8848C4.55273 12.8848 4.37109 12.8145 4.21875 12.6738C4.07812 12.5215 4.00781 12.3398 4.00781 12.1289C4.00781 12.0703 4.01367 12.0117 4.02539 11.9531C4.04883 11.8945 4.07227 11.8359 4.0957 11.7773V11.7949C4.48242 11.0566 5.0332 10.459 5.74805 10.002C6.46289 9.54492 7.25977 9.31641 8.13867 9.31641C9.01758 9.31641 9.81445 9.54492 10.5293 10.002C11.2441 10.459 11.7891 11.0508 12.1641 11.7773L12.1816 11.8125C12.2051 11.8594 12.2227 11.9121 12.2344 11.9707C12.2578 12.0293 12.2695 12.0879 12.2695 12.1465C12.2695 12.2871 12.2285 12.416 12.1465 12.5332C12.0762 12.6504 11.9824 12.7441 11.8652 12.8145H11.8477ZM7.13672 5.90625C7.13672 5.625 7.23047 5.39062 7.41797 5.20312C7.61719 5.00391 7.85742 4.9043 8.13867 4.9043C8.4082 4.9043 8.64258 5.00391 8.8418 5.20312C9.04102 5.39062 9.14062 5.625 9.14062 5.90625C9.14062 6.17578 9.04102 6.41016 8.8418 6.60938C8.64258 6.80859 8.4082 6.9082 8.13867 6.9082C7.85742 6.9082 7.61719 6.80859 7.41797 6.60938C7.23047 6.41016 7.13672 6.17578 7.13672 5.90625Z"
									fill="#79828D"
								/>
							</svg>
							<span class="nav-text text-muted text-start">Basic</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
						<button class="nav-link mb-2" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab">
							<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.793 2.64453L6.95312 0.398438C6.91406 0.372396 6.86849 0.359375 6.81641 0.359375C6.76432 0.346354 6.71224 0.339844 6.66016 0.339844C6.60807 0.339844 6.55599 0.346354 6.50391 0.359375C6.45182 0.359375 6.39974 0.372396 6.34766 0.398438H6.36719L0.527344 2.64453C0.371094 2.70964 0.240885 2.8138 0.136719 2.95703C0.0455729 3.08724 0 3.24349 0 3.42578V8.66016C0 9.89714 0.3125 11.0169 0.9375 12.0195C1.57552 13.0221 2.27865 13.8815 3.04688 14.5977C3.8151 15.3138 4.53125 15.8672 5.19531 16.2578C5.85938 16.6615 6.22396 16.8763 6.28906 16.9023C6.34115 16.9414 6.39974 16.9674 6.46484 16.9805C6.52995 16.9935 6.59505 17 6.66016 17C6.72526 17 6.79036 16.9935 6.85547 16.9805C6.92057 16.9674 6.98568 16.9414 7.05078 16.9023H7.03125C7.09635 16.8763 7.46094 16.6615 8.125 16.2578C8.78906 15.8672 9.50521 15.3138 10.2734 14.5977C11.0417 13.8815 11.7448 13.0221 12.3828 12.0195C13.0078 11.0169 13.3203 9.89714 13.3203 8.66016V3.42578C13.3203 3.24349 13.2682 3.08724 13.1641 2.95703C13.0729 2.8138 12.9492 2.70964 12.793 2.64453ZM9.76562 7.35156L6.32812 11.1016C6.26302 11.1927 6.17188 11.2643 6.05469 11.3164C5.95052 11.3555 5.83984 11.375 5.72266 11.375C5.60547 11.375 5.48828 11.3555 5.37109 11.3164C5.26693 11.2643 5.18229 11.1927 5.11719 11.1016L3.55469 9.40234C3.47656 9.32422 3.41797 9.23958 3.37891 9.14844C3.33984 9.04427 3.32031 8.9401 3.32031 8.83594C3.32031 8.60156 3.39844 8.40625 3.55469 8.25C3.72396 8.08073 3.92578 7.99609 4.16016 7.99609C4.27734 7.99609 4.38802 8.02214 4.49219 8.07422C4.60938 8.1263 4.70052 8.19141 4.76562 8.26953L5.72266 9.30469L8.55469 6.23828C8.61979 6.14714 8.70443 6.08203 8.80859 6.04297C8.92578 5.99089 9.04297 5.96484 9.16016 5.96484C9.39453 5.96484 9.58984 6.04948 9.74609 6.21875C9.91536 6.375 10 6.5638 10 6.78516C10 6.90234 9.98047 7.01302 9.94141 7.11719C9.90234 7.20833 9.84375 7.28646 9.76562 7.35156Z"
									fill="#79828D"
								/>
							</svg>
							<span class="nav-text text-muted text-start">Security Setting</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
						<button class="nav-link mb-2" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab">
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.3604 11.0938C15.3193 11.0664 14.9844 10.6494 14.3555 9.84277C13.7266 9.03613 13.4121 7.52539 13.4121 5.31055C13.3984 4.57227 13.2412 3.88867 12.9404 3.25977C12.6533 2.61719 12.2637 2.06348 11.7715 1.59863C11.293 1.12012 10.7324 0.744141 10.0898 0.470703C9.44727 0.197266 8.75684 0.0605469 8.01855 0.0605469C7.99121 0.0605469 7.96387 0.0605469 7.93652 0.0605469C7.90918 0.0605469 7.88867 0.0673828 7.875 0.0810547C7.84766 0.0673828 7.82031 0.0605469 7.79297 0.0605469C7.7793 0.0605469 7.75879 0.0605469 7.73145 0.0605469C6.99316 0.0605469 6.30273 0.197266 5.66016 0.470703C5.01758 0.744141 4.4502 1.12012 3.95801 1.59863C3.47949 2.06348 3.09668 2.61719 2.80957 3.25977C2.50879 3.88867 2.35156 4.56543 2.33789 5.29004V5.31055C2.33789 7.52539 2.02344 9.03613 1.39453 9.84277C0.779297 10.6494 0.451172 11.0664 0.410156 11.0938C0.287109 11.1758 0.18457 11.2852 0.102539 11.4219C0.0341797 11.5449 0 11.6816 0 11.832C0 12.0781 0.0820312 12.29 0.246094 12.4678C0.423828 12.6318 0.635742 12.7139 0.881836 12.7139H4.40918C4.50488 13.4932 4.80566 14.3066 5.31152 15.1543C5.81738 16.002 6.67188 16.4258 7.875 16.4258C9.07812 16.4258 9.93262 16.002 10.4385 15.1543C10.9443 14.3066 11.2451 13.4932 11.3408 12.7139H14.8682C15.0732 12.7139 15.251 12.6592 15.4014 12.5498C15.5518 12.4268 15.6543 12.2764 15.709 12.0986V12.0781C15.7227 12.0508 15.7295 12.0166 15.7295 11.9756C15.7432 11.9209 15.75 11.873 15.75 11.832C15.75 11.6816 15.709 11.5449 15.627 11.4219C15.5586 11.2852 15.4697 11.1758 15.3604 11.0938ZM7.875 14.6826C7.28711 14.6826 6.87012 14.4502 6.62402 13.9854C6.3916 13.5205 6.24805 13.0967 6.19336 12.7139H9.55664C9.50195 13.0967 9.35156 13.5205 9.10547 13.9854C8.87305 14.4502 8.46289 14.6826 7.875 14.6826Z"
									fill="#79828D"
								/>
							</svg>
							<span class="nav-text text-muted text-start">Notifications</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
						<button class="nav-link mb-2" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab">
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9.73828 10.0117C9.89062 10.1875 9.9668 10.4297 9.9668 10.7383C9.9668 11.0156 9.89062 11.2344 9.73828 11.3945C9.58594 11.5508 9.37695 11.6289 9.11133 11.6289C8.74805 11.6289 8.4668 11.5137 8.26758 11.2832C8.07227 11.0488 7.97461 10.709 7.97461 10.2637H6C6 11.0723 6.22656 11.7246 6.67969 12.2207C7.13672 12.7129 7.79102 13.0039 8.64258 13.0938V14.2773H9.57422V13.0996C10.3047 13.0293 10.8809 12.7832 11.3027 12.3613C11.7285 11.9395 11.9414 11.3945 11.9414 10.7266C11.9414 10.332 11.875 9.99414 11.7422 9.71289C11.6094 9.43164 11.4258 9.18555 11.1914 8.97461C10.957 8.76367 10.6777 8.57617 10.3535 8.41211C10.0332 8.24414 9.69141 8.08398 9.32812 7.93164C8.96484 7.77539 8.70117 7.61328 8.53711 7.44531C8.37305 7.27344 8.29102 7.04297 8.29102 6.75391C8.29102 6.46875 8.36133 6.24609 8.50195 6.08594C8.64648 5.92188 8.84766 5.83984 9.10547 5.83984C9.39453 5.83984 9.61719 5.94922 9.77344 6.16797C9.92969 6.38672 10.0078 6.69922 10.0078 7.10547H11.9883C11.9883 6.36328 11.7832 5.75195 11.373 5.27148C10.9668 4.78711 10.4062 4.49219 9.69141 4.38672V3.12695H8.75977V4.36328C8.01758 4.43359 7.42383 4.68359 6.97852 5.11328C6.5332 5.53906 6.31055 6.08203 6.31055 6.74219C6.31055 7.13672 6.37305 7.47266 6.49805 7.75C6.62305 8.02734 6.80273 8.27148 7.03711 8.48242C7.27148 8.69336 7.55078 8.87891 7.875 9.03906C8.19922 9.19922 8.55273 9.35742 8.93555 9.51367C9.31836 9.66992 9.58594 9.83594 9.73828 10.0117Z"
									fill="#79828D"
								/>
							</svg>
							<span class="nav-text text-muted text-start">Subscription</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="settings-navPills-grid-item pb-5">
				<div class="tab-content px-5 py-4">
					<div class="tab-pane fade show active" id="v-pills-1" role="tabpanel">
						<div class="basic-information">
							<h5 class="navPills-content-title text-dark mb-4">Basic Information</h5>
							<ul class="list-group list-group-flush basic-information-lists">
								<li @click="showPersonalInfoModal = true" class="list-group-item px-4 basic-information-list py-3">
									<strong class="full-name">Full Name</strong>
									<p class="mb-0">Ernesto Blue</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</li>
								<li @click="showPersonalInfoModal = true" class="list-group-item px-4 basic-information-list py-3">
									<strong class="full-name">Email</strong>
									<p class="mb-0">info@mirino.io</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
										<path
											d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
										/>
									</svg>
								</li>
								<li @click="showPersonalInfoModal = true" class="list-group-item px-4 basic-information-list py-3">
									<strong class="full-name">Phone Number</strong>
									<p class="mb-0">Not set yet</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</li>
								<li @click="showPersonalInfoModal = true" class="list-group-item px-4 basic-information-list py-3">
									<strong class="full-name">Date of Birth</strong>
									<p class="mb-0">26 Jan, 1982</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</li>
								<li @click="showPersonalInfoModal = true" class="list-group-item px-4 basic-information-list py-3">
									<strong class="full-name">Address</strong>
									<p class="mb-0">2337 Kildeer Drive, Kentucky, Canada</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-pane fade" id="v-pills-2" role="tabpanel">
						<div class="basic-information">
							<h5 class="navPills-content-title text-dark mb-4">Security Setting</h5>
							<ul class="list-group list-group-flush">
								<li class="list-group-item px-4 py-3 d-flex align-items-center">
									<div class="text-content flex-grow-1">
										<h5 class="fs-6 fw-bold mb-1">Save my Activity Logs</h5>
										<p class="text-muted">You can save your all activity logs including unusual activity detected.</p>
									</div>
									<div class="form-check form-switch">
										<label class="form-check-label" for="switch-1">
											<input class="form-check-input" type="checkbox" id="switch-1" checked />
										</label>
									</div>
								</li>
								<li class="list-group-item px-4 py-3 d-flex align-items-center">
									<div class="text-content flex-grow-1">
										<h5 class="fs-6 fw-bold mb-1">Change Password</h5>
										<p class="text-muted">You can save your all activity logs including unusual activity detected.</p>
									</div>
									<button @click="showChangePasswordModal = true" type="button" class="btn btn-jifie px-4 py-2">
										Change Password
									</button>
								</li>
								<li class="list-group-item px-4 py-3 d-flex align-items-center">
									<div class="text-content flex-grow-1">
										<h5 class="fs-6 fw-bold mb-1">2 Factor Auth</h5>
										<p class="text-muted">You can save your all activity logs including unusual activity detected.</p>
									</div>
									<button type="button" class="btn btn-jifie px-4 py-2">
										Enable
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-pane fade" id="v-pills-3" role="tabpanel">
						<div class="basic-information">
							<h5 class="navPills-content-title text-dark mb-4">Notifications</h5>
							<div class="form-group mb-5">
								<p class="text-clr-green text-uppercase mb-2">
									<var><small>Security Alerts</small></var>
								</p>
								<label for="#" class="form-check-label mb-3">You will get only those email notification what you want.</label>
								<div class="form-check form-switch mb-2">
									<input class="form-check-input" type="checkbox" id="notification-switch-1" checked />
									<label class="form-check-label text-muted" for="notification-switch-1">
										Email me whenever encounter unusual activity
									</label>
								</div>
								<div class="form-check form-switch">
									<input class="form-check-input" type="checkbox" id="notification-switch-2" checked />
									<label class="form-check-label text-muted" for="notification-switch-2">
										Email me if new browser is used to sign in
									</label>
								</div>
							</div>
							<div class="form-group">
								<p class="text-clr-green text-uppercase mb-2">
									<var><small>Update</small></var>
								</p>
								<label for="#" class="form-check-label mb-3">You can enable and disable your add update news </label>
								<div class="form-check form-switch mb-2">
									<input class="form-check-input" type="checkbox" id="notification-switch-3" checked />
									<label class="form-check-label text-muted" for="notification-switch-3">
										Notify when campaign will expired
									</label>
								</div>
								<div class="form-check form-switch">
									<input class="form-check-input" type="checkbox" id="notification-switch-4" />
									<label class="form-check-label text-muted" for="notification-switch-4">
										Notify when my balance is low
									</label>
								</div>
								<div class="form-check form-switch">
									<input class="form-check-input" type="checkbox" id="notification-switch-5" checked />
									<label class="form-check-label text-muted" for="notification-switch-5">
										Notify when add is approved
									</label>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="v-pills-4" role="tabpanel">
						<div class="basic-information">
							<h5 class="navPills-content-title text-dark mb-4">Subscription</h5>
							<div class="bg-light is-theme-lg-radius px-4 py-3 d-flex align-items-center">
								<p class="mb-0 flex-grow-1">For only $39/m you can enjoy unlimited access to Jifie.</p>
								<button type="button" class="btn btn-jifie px-4 py-2 flex-shrink-0">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SettingsNavPills",
		data() {
			return {
				showPersonalInfoModal: false,
				showChangePasswordModal: false,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.settings-navPills-grid {
		display: grid;
		--grid-first: 320px;
		grid-template-columns: var(--grid-first) 1fr;
		font-family: "Boston", sans-serif;

		.logged-user-info {
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			font-family: "Boston", sans-serif;
			img.logged-user-img {
				--img-size: 55px;
				width: var(--img-size);
				height: var(--img-size);
				border: 2px solid #fff;
				object-fit: cover;
				object-position: top;
				border-radius: 100%;
			}
		}

		.nav-pills {
			.nav-link {
				--icon-size: 20px;
				display: grid;
				grid-template-columns: var(--icon-size) 1fr var(--icon-size);
				align-items: center;
				background-color: transparent;
				grid-column-gap: 10px;
				padding-left: 0;
				padding-right: 0;
				font-family: "Boston", sans-serif;

				&.active {
					color: var(--status-clr-green);

					svg * {
						fill: var(--status-clr-green);
					}
				}
			}
		}

		.basic-information {
			.basic-information-list {
				display: grid;
				grid-template-columns: 200px 1fr 20px;
				align-items: center;
				cursor: pointer;
				transition: var(--theme-transition);

				&:hover {
					color: var(--status-clr-green);
				}
			}
		}
	}

	form.security-setting-change-password {
		.form-control {
            height: var(--input-height);
            border-radius: 10px;
            padding-left: 45px;
            background-position: 15px center;
            background-size: 20px;
            background-repeat: no-repeat;

            &.password-control {
                background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6848 7.87321V6.08404C13.6848 3.98987 11.9865 2.29154 9.89232 2.29154C7.79815 2.28237 6.09315 3.97237 6.08398 6.06737V6.08404V7.87321' stroke='%2379828D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0685 17.7081H6.70102C4.95602 17.7081 3.54102 16.294 3.54102 14.5481V10.974C3.54102 9.22813 4.95602 7.81396 6.70102 7.81396H13.0685C14.8135 7.81396 16.2285 9.22813 16.2285 10.974V14.5481C16.2285 16.294 14.8135 17.7081 13.0685 17.7081Z' stroke='%2379828D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.88542 11.8354V13.6863' stroke='%2379828D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
            }

        }
	}
</style>
