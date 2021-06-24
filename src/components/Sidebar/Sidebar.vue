<template>
	<aside id="sidebar" class="sidebar pe-1" :class="{ sidebarCollapsed: sidebarToggleStatus }">
		<div class="navbar-theme-brand d-flex align-items-center justify-content-between px-3">
			<router-link to="/">
				<img src="../../assets/images/jifie-logo.png" alt="img" class="img-fluid" />
			</router-link>
			<button id="btn-sidebar-toggle" class="btn text-light">
				<img src="../../assets/images/menu-bar.svg" alt="img" class="img-fluid" />
			</button>
		</div>
		<div class="navbar-scrollable mt-4">
			<ul class="navbar-nav flex-column px-2">
				<li class="nav-item dropdown mb-1">
					<router-link class="nav-link" to="/">
						<span class="nav-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path opacity="0.5" d="M7.5 13.1665H14.25V17.8332H7.5V13.1665Z" fill="#C4CEFE" />
								<path d="M21 6.1665H7.5V10.8332H21V6.1665Z" fill="#C4CEFE" />
								<path d="M5.25 5H3V19H5.25V5Z" fill="#C4CEFE" />
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Dashboard</span>
					</router-link>
					<ul v-if="getDashboardDropdownOpenStatus" class="dropdown-menu px-3 border-0 show">
						<li class="my-2"><a href="#summary" v-smooth-scroll class="dropdown-item">Summary</a></li>
						<li class="my-2"><a href="#cashflow" v-smooth-scroll class="dropdown-item">Cash Flow</a></li>
						<li class="my-2"><a href="#transaction" v-smooth-scroll class="dropdown-item">Transactions</a></li>
						<li class="my-2"><a href="#taxCalculator" v-smooth-scroll class="dropdown-item">Tax Calculator</a></li>
					</ul>
				</li>
				<li class="nav-item dropdown mb-1">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="nav-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.89838 22C11.6812 22 13.0616 21.8353 14.1689 21.4987C14.1454 21.3772 14.1297 21.2529 14.1297 21.125C14.1297 20.5535 14.3759 20.0376 14.7694 19.6667C14.3759 19.2957 14.1297 18.7798 14.1297 18.2083C14.1297 17.6368 14.3759 17.121 14.7694 16.75C14.3759 16.379 14.1297 15.8632 14.1297 15.2917C14.1297 14.7202 14.3759 14.2043 14.7694 13.8333C14.3759 13.4624 14.1297 12.9465 14.1297 12.375C14.1297 11.6999 14.475 11.1049 15 10.733C14.6405 10.4154 14.2564 10.1307 13.8534 9.88019C14.0171 9.68119 14.1297 9.44041 14.1297 9.16667C14.1297 8.52227 13.5885 8 12.9207 8H6.87604C6.20829 8 5.66711 8.52227 5.66711 9.16667C5.66711 9.4398 5.77934 9.67982 5.94211 9.87852C3.59539 11.3375 2 13.9793 2 16.75C2 21.456 6.52485 22 9.89838 22ZM9.89193 16.3376C8.89188 16.3376 8.07853 15.5526 8.07853 14.5876C8.07853 13.8257 8.58854 13.183 9.29392 12.9431V12.0833C9.29392 11.761 9.56435 11.5 9.89838 11.5C10.2324 11.5 10.5029 11.761 10.5029 12.0833V12.9471C11.2016 13.1903 11.7053 13.8304 11.7053 14.5876C11.7053 14.9101 11.4349 15.1709 11.1009 15.1709C10.7667 15.1709 10.4964 14.9101 10.4964 14.5876C10.4964 14.2657 10.2253 14.0042 9.89193 14.0042C9.55837 14.0042 9.28746 14.2657 9.28746 14.5876C9.28746 14.9095 9.55837 15.1709 9.89193 15.1709C10.8918 15.1709 11.7053 15.956 11.7053 16.9209C11.7053 17.678 11.2016 18.3182 10.5029 18.5615V19.0833C10.5029 19.4057 10.2324 19.6667 9.89838 19.6667C9.56435 19.6667 9.29392 19.4057 9.29392 19.0833V18.5653C8.58854 18.3256 8.07853 17.6827 8.07853 16.9209C8.07853 16.5985 8.3488 16.3376 8.68299 16.3376C9.01702 16.3376 9.28746 16.5985 9.28746 16.9209C9.28746 17.2428 9.55837 17.5042 9.89193 17.5042C10.2253 17.5042 10.4964 17.2428 10.4964 16.9209C10.4964 16.599 10.2253 16.3376 9.89193 16.3376Z"
									fill="#C4CEFE"
								/>
								<g opacity="0.5">
									<path
										d="M21.2541 20H16.7459C16.334 20 16 20.4477 16 21C16 21.5523 16.334 22 16.7459 22H21.2541C21.666 22 22 21.5523 22 21C22 20.4477 21.666 20 21.2541 20Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 17H16.7459C16.334 17 16 17.4477 16 18C16 18.5523 16.334 19 16.7459 19H21.2541C21.666 19 22 18.5523 22 18C22 17.4477 21.666 17 21.2541 17Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 14H16.7459C16.334 14 16 14.4477 16 15C16 15.5523 16.334 16 16.7459 16H21.2541C21.666 16 22 15.5523 22 15C22 14.4477 21.666 14 21.2541 14Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 11H16.7459C16.334 11 16 11.4477 16 12C16 12.5523 16.334 13 16.7459 13H21.2541C21.666 13 22 12.5523 22 12C22 11.4477 21.666 11 21.2541 11Z"
										fill="#C4CEFE"
									/>
								</g>
								<path
									d="M11.6091 3.22951C11.3723 2.5155 10.744 2 10 2C9.25506 2 8.6195 2.5139 8.38334 3.22951H6.57144C6.38781 3.22951 6.21534 3.32428 6.10775 3.4847C6.0006 3.64495 5.97099 3.85147 6.02962 4.03877L6.92173 7H13.0784L13.9704 4.03877C14.029 3.85147 13.9994 3.64495 13.8923 3.4847C13.7847 3.32428 13.6122 3.22951 13.4286 3.22951H11.6091Z"
									fill="#C4CEFE"
								/>
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Lending</span>
					</a>
					<ul class="dropdown-menu px-3 border-0" aria-labelledby="navbarDropdown">
						<li class="my-2"><router-link class="dropdown-item" to="/my-offer">My Offers</router-link></li>
						<li class="my-2"><router-link class="dropdown-item" to="/application">Application</router-link></li>
						<li class="my-2"><router-link class="dropdown-item" to="/repayment-calculator">Repayment Calculator</router-link></li>
						<li class="my-2"><router-link class="dropdown-item" to="/my-score">My Score</router-link></li>
					</ul>
				</li>
				<li class="nav-item dropdown mb-1">
					<router-link class="nav-link" to="/forecasts">
						<span class="nav-icon">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									opacity="0.5"
									d="M20.1673 16.6147V17.7606C20.1673 17.9125 20.107 18.0582 19.9995 18.1657C19.8921 18.2731 19.7463 18.3335 19.5944 18.3335H2.97982C2.67592 18.3335 2.38448 18.2128 2.16959 17.9979C1.95471 17.783 1.83398 17.4916 1.83398 17.1877V5.15641C1.83398 5.00447 1.89435 4.85874 2.00179 4.7513C2.10923 4.64386 2.25495 4.5835 2.4069 4.5835H3.55273C3.70468 4.5835 3.8504 4.64386 3.95785 4.7513C4.06529 4.85874 4.12565 5.00447 4.12565 5.15641V16.0418H19.5944C19.7463 16.0418 19.8921 16.1022 19.9995 16.2096C20.107 16.3171 20.1673 16.4628 20.1673 16.6147Z"
									fill="#C4CEFE"
								/>
								<path
									d="M19.0214 6.30241V10.5295C19.0214 11.295 18.0958 11.6785 17.5533 11.1382L16.3931 9.97803L12.9556 13.4155C12.7408 13.6304 12.4494 13.751 12.1455 13.751C11.8416 13.751 11.5502 13.6304 11.3354 13.4155L8.7089 10.7873L7.05961 12.4369C7.00641 12.4901 6.94325 12.5323 6.87373 12.5611C6.80421 12.5899 6.7297 12.6048 6.65445 12.6048C6.57921 12.6048 6.5047 12.5899 6.43518 12.5611C6.36566 12.5323 6.3025 12.4901 6.24929 12.4369L5.43933 11.627C5.38612 11.5738 5.34391 11.5106 5.31511 11.4411C5.28631 11.3716 5.27148 11.297 5.27148 11.2218C5.27148 11.1465 5.28631 11.072 5.31511 11.0025C5.34391 10.933 5.38612 10.8698 5.43933 10.8166L7.89894 8.35703C8.11381 8.1422 8.40522 8.02151 8.70908 8.02151C9.01293 8.02151 9.30434 8.1422 9.51922 8.35703L12.1464 10.9842L14.7736 8.35667L13.6145 7.19759C13.0731 6.65619 13.4566 5.72949 14.2232 5.72949H18.4485C18.6004 5.72949 18.7461 5.78985 18.8536 5.8973C18.961 6.00474 19.0214 6.15046 19.0214 6.30241Z"
									fill="#C4CEFE"
								/>
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Forecasts</span>
					</router-link>
				</li>
				<li class="nav-item dropdown mb-1">
					<router-link class="nav-link dropdown-toggle" :class="getPaymentsdDropdownOpenStatus ? 'show' : null" to="/payments">
						<span class="nav-icon">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.83398 15.9433C1.83398 16.7566 2.5183 17.4165 3.36176 17.4165H18.6395C19.483 17.4165 20.1673 16.7566 20.1673 15.9433V10.5415H1.83398V15.9433ZM7.9451 13.8562C7.9451 13.6537 8.11697 13.4879 8.32704 13.4879H12.6557C12.8658 13.4879 13.0377 13.6537 13.0377 13.8562V15.0839C13.0377 15.2865 12.8658 15.4522 12.6557 15.4522H8.32704C8.11697 15.4522 7.9451 15.2865 7.9451 15.0839V13.8562ZM3.87102 13.8562C3.87102 13.6537 4.0429 13.4879 4.25297 13.4879H6.54463C6.7547 13.4879 6.92658 13.6537 6.92658 13.8562V15.0839C6.92658 15.2865 6.7547 15.4522 6.54463 15.4522H4.25297C4.0429 15.4522 3.87102 15.2865 3.87102 15.0839V13.8562ZM20.1673 5.13972V6.61293H1.83398V5.13972C1.83398 4.32638 2.5183 3.6665 3.36176 3.6665H18.6395C19.483 3.6665 20.1673 4.32638 20.1673 5.13972Z"
									fill="#C4CEFE"
								/>
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Payments</span>
					</router-link>
					<ul v-if="getPaymentsdDropdownOpenStatus" class="dropdown-menu px-3 border-0 show">
						<li class="my-2"><a href="#payment-invoices" v-smooth-scroll class="dropdown-item">Invoices</a></li>
						<li class="my-2"><a href="#payment-payouts" v-smooth-scroll class="dropdown-item">Payouts</a></li>
						<li class="my-2"><a href="#payment-transaction" v-smooth-scroll class="dropdown-item">Transactions</a></li>
						<li class="my-2"><a href="#payment-client-status" v-smooth-scroll class="dropdown-item">Client Status</a></li>
					</ul>
				</li>
				<li class="nav-item dropdown mb-1">
					<router-link class="nav-link" to="/get-paid">
						<span class="nav-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.89838 22C11.6812 22 13.0616 21.8353 14.1689 21.4987C14.1454 21.3772 14.1297 21.2529 14.1297 21.125C14.1297 20.5535 14.3759 20.0376 14.7694 19.6667C14.3759 19.2957 14.1297 18.7798 14.1297 18.2083C14.1297 17.6368 14.3759 17.121 14.7694 16.75C14.3759 16.379 14.1297 15.8632 14.1297 15.2917C14.1297 14.7202 14.3759 14.2043 14.7694 13.8333C14.3759 13.4624 14.1297 12.9465 14.1297 12.375C14.1297 11.6999 14.475 11.1049 15 10.733C14.6405 10.4154 14.2564 10.1307 13.8534 9.88019C14.0171 9.68119 14.1297 9.44041 14.1297 9.16667C14.1297 8.52227 13.5885 8 12.9207 8H6.87604C6.20829 8 5.66711 8.52227 5.66711 9.16667C5.66711 9.4398 5.77934 9.67982 5.94211 9.87852C3.59539 11.3375 2 13.9793 2 16.75C2 21.456 6.52485 22 9.89838 22ZM9.89193 16.3376C8.89188 16.3376 8.07853 15.5526 8.07853 14.5876C8.07853 13.8257 8.58854 13.183 9.29392 12.9431V12.0833C9.29392 11.761 9.56435 11.5 9.89838 11.5C10.2324 11.5 10.5029 11.761 10.5029 12.0833V12.9471C11.2016 13.1903 11.7053 13.8304 11.7053 14.5876C11.7053 14.9101 11.4349 15.1709 11.1009 15.1709C10.7667 15.1709 10.4964 14.9101 10.4964 14.5876C10.4964 14.2657 10.2253 14.0042 9.89193 14.0042C9.55837 14.0042 9.28746 14.2657 9.28746 14.5876C9.28746 14.9095 9.55837 15.1709 9.89193 15.1709C10.8918 15.1709 11.7053 15.956 11.7053 16.9209C11.7053 17.678 11.2016 18.3182 10.5029 18.5615V19.0833C10.5029 19.4057 10.2324 19.6667 9.89838 19.6667C9.56435 19.6667 9.29392 19.4057 9.29392 19.0833V18.5653C8.58854 18.3256 8.07853 17.6827 8.07853 16.9209C8.07853 16.5985 8.3488 16.3376 8.68299 16.3376C9.01702 16.3376 9.28746 16.5985 9.28746 16.9209C9.28746 17.2428 9.55837 17.5042 9.89193 17.5042C10.2253 17.5042 10.4964 17.2428 10.4964 16.9209C10.4964 16.599 10.2253 16.3376 9.89193 16.3376Z"
									fill="#C4CEFE"
								/>
								<g opacity="0.5">
									<path
										d="M21.2541 20H16.7459C16.334 20 16 20.4477 16 21C16 21.5523 16.334 22 16.7459 22H21.2541C21.666 22 22 21.5523 22 21C22 20.4477 21.666 20 21.2541 20Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 17H16.7459C16.334 17 16 17.4477 16 18C16 18.5523 16.334 19 16.7459 19H21.2541C21.666 19 22 18.5523 22 18C22 17.4477 21.666 17 21.2541 17Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 14H16.7459C16.334 14 16 14.4477 16 15C16 15.5523 16.334 16 16.7459 16H21.2541C21.666 16 22 15.5523 22 15C22 14.4477 21.666 14 21.2541 14Z"
										fill="#C4CEFE"
									/>
									<path
										d="M21.2541 11H16.7459C16.334 11 16 11.4477 16 12C16 12.5523 16.334 13 16.7459 13H21.2541C21.666 13 22 12.5523 22 12C22 11.4477 21.666 11 21.2541 11Z"
										fill="#C4CEFE"
									/>
								</g>
								<path
									d="M11.6091 3.22951C11.3723 2.5155 10.744 2 10 2C9.25506 2 8.6195 2.5139 8.38334 3.22951H6.57144C6.38781 3.22951 6.21534 3.32428 6.10775 3.4847C6.0006 3.64495 5.97099 3.85147 6.02962 4.03877L6.92173 7H13.0784L13.9704 4.03877C14.029 3.85147 13.9994 3.64495 13.8923 3.4847C13.7847 3.32428 13.6122 3.22951 13.4286 3.22951H11.6091Z"
									fill="#C4CEFE"
								/>
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Get Paid</span>
					</router-link>
				</li>
				<li class="nav-item dropdown mb-1">
					<router-link class="nav-link" to="/budget">
						<span class="nav-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18.8742 13.8841H18.9407C19.2512 12.9749 19.4286 11.977 19.4286 10.957C19.4286 6.01193 15.4149 1.97607 10.4477 1.97607C5.48048 1.97607 1.4668 6.01193 1.4668 10.957C1.4668 15.902 5.50266 19.9379 10.4477 19.9379C11.8891 19.9379 13.2196 19.6052 14.4392 19.0065C14.417 18.7848 14.3948 18.563 14.3948 18.3634C14.3948 15.8798 16.3906 13.8841 18.8742 13.8841ZM11.2238 15.4142V16.5451C11.2238 16.656 11.1351 16.7668 11.0021 16.7668H9.89331C9.78244 16.7668 9.67156 16.6781 9.67156 16.5451V15.4363C8.56281 15.3698 7.65363 14.505 7.54276 13.3962C7.52058 13.2632 7.63146 13.1523 7.76451 13.1523H8.87326C8.96196 13.1523 9.05066 13.2188 9.07284 13.3075C9.13936 13.6623 9.44981 13.9062 9.80461 13.9062H10.7803C11.3569 13.9062 11.8669 13.4849 11.9334 12.9084C11.9999 12.2653 11.4899 11.7109 10.8468 11.7109H10.1372C8.76239 11.7109 7.54276 10.713 7.38753 9.33819C7.23231 7.89681 8.29671 6.65501 9.64939 6.47761V5.36886C9.64939 5.25798 9.73809 5.14711 9.87114 5.14711H10.9799C11.0908 5.14711 11.2016 5.23581 11.2016 5.36886V6.47761C12.3326 6.54413 13.2417 7.40896 13.3526 8.51771C13.3526 8.65076 13.2639 8.76164 13.1309 8.76164H12.0221C11.9334 8.76164 11.8225 8.69511 11.8225 8.60641C11.756 8.25161 11.4456 8.00769 11.0686 8.00769H10.0929C9.51634 8.00769 8.98414 8.42901 8.93979 9.00556C8.87326 9.64864 9.38329 10.2252 10.0264 10.2252H10.869C12.3991 10.2252 13.6409 11.5557 13.4857 13.1079C13.3748 14.3054 12.3991 15.2146 11.2238 15.4142Z"
									fill="#C4CEFE"
								/>
								<path
									opacity="0.5"
									d="M18.8737 14.6821C16.8558 14.6821 15.2148 16.3231 15.2148 18.341C15.2148 20.3589 16.8558 21.9999 18.8737 21.9999C20.8917 21.9999 22.5326 20.3589 22.5326 18.341C22.5326 16.3231 20.8917 14.6821 18.8737 14.6821ZM20.4482 17.6536L18.785 19.6272C18.7185 19.7159 18.6076 19.7602 18.4968 19.7602C18.3859 19.7602 18.2972 19.7159 18.2085 19.6272L17.2549 18.4962C17.1219 18.341 17.1441 18.1193 17.2993 17.9862C17.4545 17.8532 17.6763 17.8753 17.8093 18.0306L18.4968 18.851L19.8938 17.1879C20.0268 17.0327 20.2486 17.0105 20.4038 17.1436C20.559 17.2766 20.5812 17.4984 20.4482 17.6536Z"
									fill="#C4CEFE"
								/>
							</svg>
						</span>
						<span class="nav-text collapsed-enable">Budget</span>
					</router-link>
				</li>
			</ul>
			<div class="company-block mt-5">
				<div class="btn-block pb-4 px-3">
					<div class="d-flex align-items-center w-100 justify-content-between">
						<span class="text text-uppercase text-clr-blue-light">Company</span>
						<button class="btn btn-compnay-block px-0 py-0">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="15" cy="15" r="15" fill="#F3B410" />
								<line x1="9" y1="15" x2="21" y2="15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<line x1="15" y1="9" x2="15" y2="21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
					</div>
				</div>
				<ul class="list-unstyled company-block-list px-3 pt-4 mb-0">
					<li class="company-block-list-item py-3 px-3 is-theme-radius text-clr-blue-light">
						<h4 class="company-block-name pb-3 mb-3">Demo Company Pty Ltd</h4>
						<div class="company-block-info">
							<img src="../../assets/images/xero_logo.png" alt="img" class="img-fluid company-img" />
							<p class="mb-0 mt-1">Techlabs</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: "Sidebar",
		data() {
			return {
				sidebarToggleStatus: null,
			};
		},
		computed: {
			getDashboardDropdownOpenStatus() {
				return this.$store.state.dashboardDropdownOpen;
			},
			getPaymentsdDropdownOpenStatus() {
				return this.$store.state.paymentsDropdownOpen;
			},
		},
		mounted() {
			this.getSidebarToggleStatus();
		},
		methods: {
			setSidebarToggleStatus() {
				this.$store.dispatch("sidebarToggleAction");
				this.getSidebarToggleStatus();
			},

			getSidebarToggleStatus() {
				this.sidebarToggleStatus = this.$store.state.sidebarToggle;
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "./Sidebar.scss";
</style>
