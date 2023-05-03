import {Img} from 'remotion'
import React from 'react';

interface Props {
	avatarUrl: string;
}

const avatarStyle: React.CSSProperties = {
	width: '200px',
	height: '200px',
	borderRadius: '50%',
};

const avatarWrapperStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

const AvatarComponent: React.FC<Props> = ({avatarUrl}) => {
	return (
		<div style={avatarWrapperStyle}>
			<Img src={avatarUrl} style={avatarStyle} />
		</div>
	);
};

export default AvatarComponent;
