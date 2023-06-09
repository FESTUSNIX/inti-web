export const blobVariants = [
	{
		name: 'solid-purple',
		background: '#4f30a8'
	},
	{
		name: 'solid-blue',
		background: '#444cf7'
	},
	{
		name: 'solid-pink',
		background: '#c72dee80'
	},
	{
		name: 'linear-pink',
		background: 'linear-gradient(120deg, #5a28e7 14%, #d117ef 120%)',
		blur: '12em'
	},
	{
		name: 'radial-purple',
		background: 'radial-gradient(70% 70% at 50% 45%, rgb(66, 0, 255) 0%, rgb(99, 0, 115) 80%)',
		blur: '12em'
	},
	{
		name: 'linear-blue-to-purple',
		background: 'linear-gradient(123deg, #0053cf 14%, #db00ff 120%)'
	},
	{
		name: 'linear-purple-to-dark-purple',
		background: 'linear-gradient(40deg, rgba(40, 21, 96, 1) 35%, rgba(143, 0, 255, 1) 70%)'
	}
] as const
