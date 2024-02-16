import { lazy } from 'react';
const Home = lazy(() => import('../pages/Admin/Home/index'));
const Blog = lazy(() => import('../pages/Admin/Blog/index'));

export const SidebarData = [
	{
		id: 1,
		title: 'Home',
		path: '/admin',
		component: Home,
	},
	{
		id: 2,
		title: 'Talents',
		path: '/admin/blog',
		component: Blog,
	},
];
