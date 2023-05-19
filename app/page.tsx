import Hero from './components/modules/Hero'
import WebsitePros from './components/modules/WebsitePros'
import OurAdvantages from './components/modules/OurAdvantages'
import Portfolio from './components/modules/Portfolio'
import Testimonials from './components/modules/Testimonials'
import FAQ from './components/modules/FAQ'

export default function Home() {
	return (
		<main className='mt-24'>
			<Hero />
			<WebsitePros />
			<OurAdvantages />
			<Portfolio />
			<Testimonials />
			<FAQ />
			<div className='h-96'></div>
			<div className='h-96'></div>
			<div className='h-96'></div>

			{/* <div className='fixed left-1/2 top-0 h-screen w-px -translate-x-1/2 bg-[#ff0000]'></div> */}
		</main>
	)
}
