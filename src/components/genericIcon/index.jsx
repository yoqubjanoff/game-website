import styled from 'styled-components';
import { ReactComponent as TrandingUp } from '../../assets/icons/treding-up.svg';
import ArrowLeft  from '../../assets/icons/arrowleft.svg';



export const TrandingUpIcon = styled(TrandingUp)`
	
`;

const ArrowLeftIcon = styled(ArrowLeft)`
    width: ${({ width }) => (width ? width : '25px')};
    height: ${({ height }) => (height ? height : '25px')};
    cursor: pointer;
`;


export {
    ArrowLeftIcon
}