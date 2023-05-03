import {Composition} from 'remotion';
import {slidesData} from './Shared/data';
import {BasicSlide} from './BasicSlide';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="BasicSlide"
				component={BasicSlide}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{slides: slidesData}}
			/>
		</>
	);
};
