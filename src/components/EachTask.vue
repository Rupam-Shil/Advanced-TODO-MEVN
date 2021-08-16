<template>
	<div class="task">
		<div class="task-left-side">
			<input type="checkbox" name="taskDone" v-model="isChecked" />
			<p>
				{{ todo.value }}
			</p>
		</div>
		<button><img src="@/assets/del.svg" alt="" /></button>
	</div>
</template>

<script>
export default {
	props: ['todo'],
	data() {
		return {
			isChecked: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.task {
	width: 100%;
	min-height: 50px;
	background: var(--primary-color);
	border-radius: 10px;
	padding: 1rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	&-left-side {
		display: flex;
		align-items: center;
		width: 80%;
		gap: 1rem;
		input {
			outline: none;
			border: none;
		}
		p {
			color: var(--white-color);
		}
	}
	button {
		background: transparent;
		outline: none;
		border: none;
		width: 30px;
		height: 30px;
		&:hover img {
			transform: rotate(20deg);
		}
		img {
			width: 100%;
			height: 100%;
			transition: 0.2s;
		}
	}
}
</style>
