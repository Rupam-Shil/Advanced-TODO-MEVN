<template>
	<SignUpContainer>
		<form>
			<h1>Sign Up</h1>
			<input type="text" name="name" placeholder="Name" required />
			<input type="email" name="email" placeholder="Email" required />
			<div class="password">
				<input
					:type="password"
					name="password"
					placeholder="Password"
					required
				/>
				<button @click="showPassword">{{ showPasswordText }}</button>
			</div>

			<button type="submit" class="btn">Login</button>
			<p>
				ALready Have An Account?
				<router-link to="/login" class="link">Log In</router-link>
			</p>
		</form>
	</SignUpContainer>
</template>

<script>
import SignUpContainer from '@/components/SignUpContainer';
export default {
	components: { SignUpContainer },
	data() {
		return {
			password: 'password',
			showPasswordText: 'SHOW',
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
