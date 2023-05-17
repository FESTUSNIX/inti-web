import Image from 'next/image'
import Hero from './components/modules/Hero'
import WebsitePros from './components/modules/WebsitePros'
import OurAdvantages from './components/modules/OurAdvantages'
import Portfolio from './components/modules/Portfolio'

export default function Home() {
	return (
		<main className='mt-24'>
			<Hero />
			<WebsitePros />
			<OurAdvantages />
			<Portfolio />
			<div className='h-96'></div>
			<div className='h-96'></div>
			<div className='h-96'></div>
		</main>
	)
}
