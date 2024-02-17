import { lazy } from 'react';
const Home = lazy(() => import('../pages/Admin/Home/index'));
const Blog = lazy(() => import('../pages/Admin/Blog/index'));
const Partners = lazy(() => import('../pages/Admin/Partners/index'));
const PcMbGame = lazy(() => import('../pages/Admin/PcMbGame/index'));
const AddParners = lazy(() => import('../pages/Admin/Partners/AddPartners/index'));
const AddBlog = lazy(() => import('../pages/Admin/Blog/AddBlog/index'));

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
	,
	{
		id: 3,
		path: '/admin/blog/add',
		component: AddBlog,
		hidden: true,
	},
	,
	{
		id: 4,
		path: '/admin/blog/modify/:id',
		component: AddBlog,
		hidden: true,
	},
	,
	{
		id: 5,
		path: '/admin/partner',
		component: Partners,
		hidden: true,
	},
	,
	{
		id: 6,
		path: '/admin/partner/add',
		component: AddParners,
		hidden: true,
	},
	,
	{
		id: 7,
		path: '/admin/partner/modify/:id',
		component: AddParners,
		hidden: true,
	},
	,
	{
		id: 5,
		path: '/admin/pcmbgame',
		component: PcMbGame,
		hidden: true,
	},
];
