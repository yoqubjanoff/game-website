import { Wrapper } from "./style";
import loading from '../../assets/images/loading.svg'

const LoadingAdmin = () => {
	return (
		<Wrapper>
			<Wrapper.Box>
				<img src={loading} className="rounded"/>
			</Wrapper.Box>
		</Wrapper>
	);
};

export default LoadingAdmin;