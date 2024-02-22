import { lazy } from 'react';
const Home = lazy(() => import('../pages/Admin/Home/index'));
const Blog = lazy(() => import('../pages/Admin/Blog/index'));
const AddBlog = lazy(() => import('../pages/Admin/Blog/AddBlog/index'));
const Partners = lazy(() => import('../pages/Admin/Partners/index'));
const AddPartners = lazy(() => import('../pages/Admin/Partners/AddPartners/index'));
const PcMbGame = lazy(() => import('../pages/Admin/PCMBgame'));
const AddPcMgGame = lazy(() => import('../pages/Admin/PCMBgame/AddPCMB'));


export const SidebarData = [
	{
		id: 1,
		path: '/admin',
		component: Home,
	},
	{
		id: 2,
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
		component: AddPartners,
		hidden: true,
	},
	,
	{
		id: 7,
		path: '/admin/partner/edit/:id',
		component: AddPartners,
		hidden: true,
	},
	,
	{
		id: 8,
		path: '/admin/pcmbgame',
		component: PcMbGame,
		hidden: true,
	},
	,
	{
		id: 9,
		path: '/admin/pcmbgame/add',
		component: AddPcMgGame,
		hidden: true,
	},
	,
	{
		id: 10,
		path: '/admin/pcmbgame/edit/:id',
		component: AddPcMgGame,
		hidden: true,
	},
];