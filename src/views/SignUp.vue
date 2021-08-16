<template>
	<SignUpContainer>
		<form @submit.prevent="sendDetails">
			<h1>Sign Up</h1>
			<input
				type="text"
				name="name"
				placeholder="Name"
				v-model="nameInput"
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				v-model="emailInput"
				required
			/>
			<div class="password">
				<input
					:type="password"
					name="password"
					placeholder="Password"
					v-model="passwordInput"
					required
				/>
				<button type="button" @click="showPassword">
					{{ showPasswordText }}
				</button>
			</div>

			<button type="submit" class="btn">Sign Up</button>
			<p>
				ALready Have An Account?
				<router-link to="/login" class="link">Login</router-link>
			</p>
		</form>
	</SignUpContainer>
</template>

<script>
import SignUpContainer from '@/components/SignUpContainer';
import axios from 'axios';
export default {
	components: { SignUpContainer },
	data() {
		return {
			password: 'password',
			showPasswordText: 'SHOW',
			nameInput: '',
			emailInput: '',
			passwordInput: '',
		};
	},
	methods: {
		showPassword() {
			this.password === 'password'
				? (this.password = 'text')
				: (this.password = 'password');
			this.showPasswordText === 'SHOW'
				? (this.showPasswordText = 'HIDE')
				: (this.showPasswordText = 'SHOW');
		},
		async sendDetails() {
			axios
				.post('http://localhost:9000/auth/signup', {
					name: this.nameInput,
					email: this.emailInput,
					password: this.passwordInput,
				})
				.then((res) => {
					if (res.data.error) {
						this.$router.push(`/login`);
					} else {
						this.$router.push(`/home/${res.data._id}`);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
form {
	height: 100%;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	input {
		border: none;
		outline: none;
		border-radius: 5px;
		width: 100%;
		height: 40px;
		padding: 1rem;
		color: var(--white-color);
		background: var(--primary-color);
		&::placeholder {
			color: var(--white-color);
		}
	}
	button.btn {
		background: var(--white-color);
		color: var(--primary-color);
		outline: none;
		width: max-content;
		border: none;
		padding: 0.8rem 2rem;
		border-radius: 5px;
		font-weight: 600;
		&:hover {
			background: rgb(235, 235, 235);
		}
	}
	.password {
		display: flex;
		button {
			background: var(--primary-color);
			outline: none;
			border: none;
			color: var(--white-color);
			padding: 0.5rem;
			font-size: 0.7rem;
			font-weight: 600;
			box-shadow: -4px 0 0 var(--primary-color);
			border-radius: 0 5px 5px 0;
		}
	}
	p {
		color: var(--white-color);
		.link {
			color: #fff;
		}
	}
}
</style>
