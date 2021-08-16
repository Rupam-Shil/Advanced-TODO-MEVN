import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/signup',
		name: 'Signup',
		component: SignUp,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
