import styled from 'styled-components';

export const Wrapper = styled.div`
	height: inherit;
	width: inherit;
	transition: background-color 300ms ease-in-out;
	z-index: 9;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
  background-color: rgba(11, 156, 161, 1);
	display: flex;
	align-items: center;
	justify-content: center;
`;

Wrapper.Box = styled.div`
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: rotate 2s linear infinite;
  .rounded{
    width: 60px;
	height: 60px;
  }
`;
