import React from 'react';
import { Wrapper } from './style';
import tredingIcon from '../../../assets/icons/treding-up.svg'
const CardAdmin = ({ name, number, percent, icon, inc }) => {
	return (
		<Wrapper>
			<div className="FlexBox Beetwen">
				<div className="ColumnBox1">
					<Wrapper.Title>{name}</Wrapper.Title>
					<div className="FlexBox">
						<Wrapper.Title className="Header">{number}</Wrapper.Title>
						<Wrapper.Icon inc={!inc} stroke={!inc ? '#FF5151' : undefined} />
						<Wrapper.Desc src={tredingIcon} inc={!inc}>{percent}</Wrapper.Desc>
					</div>
				</div>

				<img src={icon} alt="" />
			</div>
		</Wrapper>
	);
};

export default CardAdmin;
