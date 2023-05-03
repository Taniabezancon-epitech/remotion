export interface Slide {
	id: number;
	title: string;
	by: string;
	description: string;
	color: string;
	avatar: string;
}

const slidesData: Slide[] = [
	{
		id: 1,
		title: 'Initiates the process',
		by: 'Employee',
		description: 'Fill the quotation request',
		color: 'black',
		avatar: 'https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png',
	},
	{
		id: 2,
		title: 'Approval',
		by: 'Manager',
		description:
			'The manager has to review the requirements and check the compliance',
		color: 'black',
		avatar: 'https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-art-boy-avatar-png-image_6514653.png',
	},
	{
		id: 2,
		title: 'THE END',
		by: 'THE END',
		description: 'THE END',
		color: 'black',
		avatar: '../assets/avatars/manager.png',
	},
];

export {slidesData};
