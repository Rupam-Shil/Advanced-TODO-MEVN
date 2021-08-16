<template>
	<div class="container">
		<div class="logo"><img src="@/assets/logo.svg" alt="" /></div>
		<div class="center-container">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;
	background: var(--primary-color);
	display: flex;
	justify-content: center;
	align-items: center;
	.logo {
		position: absolute;
		top: 5px;
		left: 5px;
		img {
			width: 100px;
			height: 100px;
		}
	}
	.center-container {
		background: var(--secondary-color);
		width: 40vw;
		height: 70vh;
		border-radius: 20px;
		padding: 2rem;
	}
}
</style>
