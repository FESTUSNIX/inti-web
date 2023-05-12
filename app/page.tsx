import Image from 'next/image'
import Hero from './components/modules/Hero'

export default function Home() {
	return (
		<main className='wrapper mt-24'>
			<Hero />
			<div className='h-96'></div>
			<div className='h-96'></div>
			<div className='h-96'></div>
			<div className='h-96'></div>
		</main>
	)
}
