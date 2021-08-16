<template>
	<div class="header">
		<img class="sitelogo" src="@/assets/logo.svg" alt="logo of the site" />
	</div>
	<div class="container">
		<div class="add-task-section" :class="{ active: addTaskActive }">
			<div class="top-sec">
				<h1>Add new task</h1>
				<button class="close-btn" @click="addTaskActive = !addTaskActive">
					<i class="fas fa-arrow-up"></i>
				</button>
			</div>

			<input type="text" name="todo" />
			<button class="updateBtn">Add task</button>
		</div>

		<div class="container-inner">
			<div class="top-sec">
				<div class="left-col">
					<h1><span>Hi</span> {{ userName }}</h1>
					<span>Your Tasks...</span>
				</div>
				<div class="right-col">
					<button
						class="add-new-task"
						@click="
							addTaskActive === false ? (addTaskActive = !addTaskActive) : null
						"
					>
						<img src="@/assets/plus.svg" alt="" /> <span>Add task</span>
					</button>
				</div>
			</div>
			<div class="task-container">
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
				<EachTask class="toggle__color" />
			</div>
		</div>
	</div>
</template>

<script>
import EachTask from '@/components/EachTask';
export default {
	components: { EachTask },
	data() {
		return {
			addTaskActive: false,
			userName: 'Rupam Shil',
			tasks: [],
		};
	},
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
		box-shadow: 0px 4px 5px var(--secondary-color);
		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: -30%;
		transition: 0.3s;
		&.active {
			margin-top: 0;
		}
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
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				transition: 0.3s;
				width: 40px;
				height: 40px;
				border: none;
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
		button.updateBtn {
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
		margin-top: 9%;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.top-sec {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 0 10px 0;
			border-bottom: 1px solid var(--white-color);

			.left-col {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				align-items: flex-start;
				color: var(--white-color);
				h1 {
					font-weight: 600;
					span {
						font-size: 1.2rem;
						font-weight: 400;
					}
				}
			}
			.right-col {
				button {
					background: var(--secondary-color);
					color: var(--white-color);
					outline: none;
					border: none;
					display: flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.5rem 1rem;
					border-radius: 5px;
					&:hover img {
						transform: rotate(90deg);
					}
					img {
						width: 30px;
						height: 30px;
						transition: 0.3s;
					}
					span {
						text-transform: uppercase;
						font-weight: bold;
					}
				}
			}
		}
		.task-container {
			margin-top: 1.5rem;
			width: 100%;
			.toggle__color:nth-child(2n) {
				background: var(--secondary-color) !important;
			}
		}
	}
}
</style>
