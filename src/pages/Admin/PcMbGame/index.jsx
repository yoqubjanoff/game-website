import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { TalentTableHeader } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBlogContex } from '../../../context/useContext';
import useSearch from '../../../services/Search';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Reuseable/Button';
import Table from '../../../components/Reuseable/CustomTable';
import Pagination from '../../../components/Reuseable/Pagination';
import request from '../../../services/request';

const PcMbGame  = () => {
	const column = TalentTableHeader()
	const { t } = useTranslation();
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const { search } = useLocation();
	const [{ blogs }, dispatch] = useBlogContex();

	const navigate = useNavigate();
	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`/admin/blogs${search || ''}`);
			setPagination(res?.data?.pagination);
			dispatch({
				type: 'setPartners',
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
					<p className="Header">{t('adminPage.partner')}</p>
					<div className="TagBox">
						<div className="FlexBox">
							<div></div>
							<Button
								bg={'#0B3A48'}
								width={'150px'}
								height={'42px'}
								onClick={() => navigate('/admin/partner/add')}
							>
								{t('adminPage.add')}
							</Button>
						</div>
					</div>
					<Wrapper.WrapTable>
						<Table column={column} rowData={blogs} loading={loading} />
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

export default PcMbGame;
