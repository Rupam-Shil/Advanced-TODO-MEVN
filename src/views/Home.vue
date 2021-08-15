<template>
	<div class="header">
		<img class="sitelogo" src="@/assets/logo.svg" alt="logo of the site" />
	</div>
	<div class="container">
		<div class="add-task-section">
			<div class="top-sec">
				<h1>Add new task</h1>
				<div class="close-btn"><i class="fas fa-arrow-up"></i></div>
			</div>

			<input type="text" name="todo" />
			<button class="updateBtn">Add task</button>
		</div>

		<div class="container-inner"></div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--bg-color: #11052c;
	--primary-color: #3d087b;
	--secondary-color: #a354ff;
	--white-color: #fff;
}
body {
	font-family: 'Poppins', sans-serif;
	background: var(--bg-color);
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 5rem;
	height: 100vh;
	background: var(--primary-color);
	border-top-right-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	.sitelogo {
		width: 100%;
		height: 5rem;
	}
}
.container {
	width: 100%;
	height: 100vh;
	padding: 0 5rem 2rem 10rem;
	.add-task-section {
		width: 100%;
		height: 40vh;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		box-shadow: 0px 4px 10px var(--secondary-color);
		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.top-sec {
			display: flex;
			justify-content: space-between;
			align-items: center;
			h1 {
				color: var(--primary-color);
				text-transform: uppercase;
				font-size: 1.5rem;
				letter-spacing: 0;
			}
			.close-btn {
				background: var(--secondary-color);
				color: #fff;
				display: inline-block;
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				transition: 0.3s;
				&:hover {
					background: var(--primary-color);
				}
			}
		}
		input {
			outline: none;
			height: 50px;
			border: 2px solid var(--secondary-color);
			border-radius: 10px;
			padding: 1rem;
			color: var(--primary-color);
			font-size: 1.2rem;
		}
		button {
			outline: none;
			border: none;
			background: var(--primary-color);
			width: max-content;
			padding: 1rem 2rem;
			color: #fff;
			border-radius: 5px;
			transition: 0.3s;
			&:hover {
				background: var(--secondary-color);
			}
		}
	}
	&-inner {
		width: 100%;
		height: 100%;
	}
}
</style>
