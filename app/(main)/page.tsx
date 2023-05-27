import Hero from './components/modules/Hero'
import WebsitePros from './components/modules/WebsitePros'
import OurAdvantages from './components/modules/OurAdvantages'
import Portfolio from './components/modules/Portfolio'
import Testimonials from './components/modules/Testimonials'
import FAQ from './components/modules/FAQ'
import Contact from './components/modules/Contact'

export default function Home() {
	return (
		<main className='mt-24 overflow-hidden'>
			<Hero />
			<WebsitePros />
			<OurAdvantages />
			{/* @ts-expect-error Server Component */}
			<Portfolio />
			{/* @ts-expect-error Server Component */}
			<Testimonials />
			{/* @ts-expect-error Server Component */}
			<FAQ />
			<Contact />
		</main>
	)
}
