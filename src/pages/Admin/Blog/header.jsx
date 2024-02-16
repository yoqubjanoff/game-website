import { Wrapper } from './style';
import { useBlogContex } from '../../../context/useContext';
import { useNavigate, useParams } from 'react-router-dom';
import trash from '../../../assets/icons/trashIcon.svg'
import penIcon from '../../../assets/icons/pen.svg'
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import request from '../../../services/request';
import Toast from '../../../components/Reuseable/Toast';

const ActionRenderer = ({ data }) => {
	const { t } = useTranslation();
	const { id } = useParams();
	const navigate = useNavigate();
	const [selected, dispatch] = useBlogContex();

	const getAdmins = async () => {
		try {
			const res = await request.get('/admin/blog');
			dispatch({
				type: 'setBlogs',
				payload: res?.data?.data,
			});
			console.log('Response:', res);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/blog/${data?.id}`);
			getAdmins();
			Toast({
				type: 'success',
				message: t('w252'),
			});
		} catch (error) {
			Swal.fire(error?.response?.data?.resultMsg);
		}
	};

	const deleteFunc = async () => {
		Popup({
			title: 'Do you want to delete this blog ?',
			isConfirmedFunction: () => deleteF(),
			showCancelButton: true,
			type: 'question',
		});
	};
	const editFunc = async () => {
		const res = await request.get(`admin/blog/${data.id}`);
		dispatch({
			type: 'setSelected',
			payload: res?.data?.data,
		});
		navigate(`/admin/blog/modify/:${data?.id}`);
	};
	return (
		<Wrapper.Flex style={{ width: '100%', justifyContent: 'center' }}>
			<Wrapper.Box onClick={deleteFunc}>
				<img src={trash} alt='delet icon' />
			</Wrapper.Box>
			<Wrapper.Box onClick={editFunc}>
				<img src={penIcon} alt='delet icon' />
			</Wrapper.Box>
		</Wrapper.Flex>
	);
};

const RendererPhoto = ({ data }) => {
	return (
		<Wrapper.Flex>
			<img className="blogImgRen" src={data?.blogPhotoUrl} alt="IT SKILLS" />
		</Wrapper.Flex>
	);
};

const RendererDate = ({ data }) => {
	const slicedClock = data.createdAt?.slice(0, 10);
	return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererTitle = ({ data }) => {
	const maxLength = 40;

	if (data?.title?.length > maxLength) {
		const truncatedWord = data?.title?.slice(0, maxLength) + '...';
		return <Wrapper.Flex>{truncatedWord}</Wrapper.Flex>;
	} else {
		return <Wrapper.Flex>{data?.title}</Wrapper.Flex>;
	}
};

const RendererStatus = ({ data }) => {
	const { t } = useTranslation();
	const statusChange = async (v) => {
		console.log(v);
		try {
			const res = await request.patch(`admin/blog/${data.id}?selected=${v}`);
			Toast({
				type: 'success',
				message: t('w252'),
			});
		} catch (error) {
			Swal.fire(error?.code);
			console.log(error);
		}
	};

	return (
		<Wrapper.Flex>
			<Switch
				onClick={(e) => statusChange(e)}
				checked={data?.isActive ? 1 : 0}
			/>{' '}
			Active
		</Wrapper.Flex>
	);
};

export const TalentTableHeader = () => {
	const { t } = useTranslation();

	return [
		{
			headerName: t('w307'),
			cellRenderer: RendererPhoto,
			flex: 0.6,
		},

		{
			headerName: t('w306'),
			cellRenderer: RendererTitle,
			flex: 1,
		},
		{
			headerName: t('w302'),
			cellRenderer: RendererDate,
			flex: 0.7,
		},
		{
			headerName: t('w305'),
			cellRenderer: ActionRenderer,
			flex: 0.6,
		},
	];
};
