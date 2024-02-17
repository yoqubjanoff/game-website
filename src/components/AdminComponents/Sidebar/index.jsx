import React from 'react';
import { Wrapper } from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const Data = [
		{
			id: 1,
			title: t('adminPage.admin'),
			path: '/admin',
		},
		{
			id: 2,
			title: t('adminPage.blog'),
			path: '/admin/blog',
		},
		,
		{
			id: 3,
			title: t('adminPage.partner'),
			path: '/admin/partner',
		},
		{
			id: 4,
			title: t('adminPage.pcmbgame'),
			path: '/admin/pcmbgame',
		},
		
	];
	return (
		<Wrapper>
			{Data?.map(
				({ title, path, hidden, disable }, i) =>
					!hidden && (
						<Wrapper.Flex
							className="FlexBox"
							onClick={() => !disable && navigate(path)}
							active={pathname === path || pathname === path + '/add'}
							key={i}
							disable={disable ? 1 : 0}
						>
							<Wrapper.Title>{title}</Wrapper.Title>
						</Wrapper.Flex>
					),
			)}
		</Wrapper>
	);
};

export default Sidebar;
