import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { TalentTableHeader } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import {useHomeContext } from '../../../context/useContext';
import useSearch from '../../../services/Search';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Reuseable/Button';
import Table from '../../../components/Reuseable/CustomTable';
import Pagination from '../../../components/Reuseable/Pagination';
import request from '../../../services/request';

const Blog = () => {
	const column = TalentTableHeader()
	const { t } = useTranslation();
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const { search } = useLocation();
	const [{ homeList }, dispatch] = useHomeContext();
console.log(homeList);
	const navigate = useNavigate();
	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`/admin/call-request${search || ''}`);
			setPagination(res?.data?.pagination);
			dispatch({
				type: 'setHome',
				payload: res?.data?.data,
			});
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getBlogs();
	}, [search,localStorage.getItem('i18nextLng')]);

	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">{t('adminPage.admin')}</p>
					<div className="TagBox">
						<div className="FlexBox">
							<p>{t('adminPage.homeTitle')}</p>
						</div>
					</div>
					<Wrapper.WrapTable>
						<Table column={column} rowData={homeList} loading={loading} />
					</Wrapper.WrapTable>
					<Pagination
						current={Number(query.get('page')) || 0}
						SizeAll={pagination?.totalPages || 1}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Blog;
