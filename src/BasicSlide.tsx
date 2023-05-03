import {Sequence, useCurrentFrame, useVideoConfig, Img} from 'remotion';
import {AbsoluteFill, interpolate} from 'remotion';
import {useEffect, useState} from 'react';
import {Title} from './Components/Title';
import {slidesData} from './Shared/data';
import {By} from './Components/By';
import {Subtitle} from './Components/Subtitle';
import {avatar} from './styles';

const TITLE_DURATION = 60;
const TRANSITION_DURATION = 20;

export const BasicSlide: React.FC = () => {
	const frame = useCurrentFrame();
	console.log('current frame: ', frame);
	const {durationInFrames} = useVideoConfig();

	const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentTitleIndex((currentTitleIndex + 1) % slidesData.length);
		}, TITLE_DURATION);

		return () => clearTimeout(timer);
	}, [currentTitleIndex]);

	const titles = slidesData.map((slide, index) => {
	const titleStartFrame = (index * durationInFrames) / slidesData.length;
	const titleEndFrame = ((index + 1) * durationInFrames) / slidesData.length;
	const opacity = interpolate(
			frame,
			[
				titleStartFrame,
				titleStartFrame + TRANSITION_DURATION,
				titleEndFrame - TRANSITION_DURATION,
				titleEndFrame,
			],
			[0, 1, 1, 0],
			{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
		);

		return (
			<AbsoluteFill key={slide.id} style={{opacity}}>
				<Sequence>
					<Title titleText={slide.title} titleColor={slide.color} />
				</Sequence>
				<Sequence>
					<By titleText={slide.by} titleColor={slide.color} />
				</Sequence>
				<Sequence>
					<Subtitle text={slide.description} />
				</Sequence>
				<Sequence>
					<Img src={slide.avatar} style={avatar} />
				</Sequence>
			</AbsoluteFill>
		);
	});

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>{titles}</AbsoluteFill>
	);
};
