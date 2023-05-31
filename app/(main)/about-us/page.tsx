import React from 'react'
import SectionHeading from '../components/elements/SectionHeading'
import Marquee from 'react-fast-marquee'
import Button from '../components/elements/Button'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaGithub, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const AboutUsPage = () => {
	return (
		<div>
			<header className='mt-24 flex flex-col'>
				<div className='wrapper mt-16 flex justify-center text-center md:mt-32 lg:mt-32'>
					<h1 className='mb-6 font-heading text-4xl font-black !leading-tight text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl'>
						Było nas <span className='text-gradient'>dwóch, </span>w każdym z nas inna krew, ale jeden przyświecał
						<span className='text-gradient'> nam cel</span>
					</h1>
				</div>

				<div className='my-32 lg:my-64'>
					<Marquee autoFill className='overflow-y-hidden'>
						<p className='min-w-max font-heading text-6xl font-black uppercase text-neutral-100  opacity-5 md:text-7xl lg:text-8xl'>
							tworzymy z pasją&nbsp;
						</p>
					</Marquee>

					<Marquee direction='right' autoFill className='overflow-y-hidden'>
						<p className='min-w-max font-heading text-6xl font-black uppercase text-neutral-100 opacity-5 md:text-7xl lg:text-8xl'>
							stawiamy na dobrą atmosferę&nbsp;
						</p>
					</Marquee>
				</div>
			</header>

			<section className='wrapper flex flex-col md:flex-row'>
				<div className='basis-2/5'>
					<div>
						<h3 className='bg-gradient-brand bg-clip-text font-heading text-sm font-bold uppercase tracking-widest text-transparent'>
							nasz team
						</h3>
						<SectionHeading>Nie tylko praca</SectionHeading>
						<p>Hover na karte osoby - opacity albo saturation zmiejsza sie na zdjeciach innej osoby</p>
					</div>

					<div className='mt-8 flex flex-col'>
						<div className='flex items-center rounded-lg border border-dark-700/20 px-6 py-4'>
							<div>
								<h4 className='mb-4 text-2xl font-semibold text-neutral-200'>Mateusz Hada</h4>

								<p className='relative text-neutral-400'>
									<span className='absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25'>
										<FaQuoteLeft size={24} />
									</span>
									Tam gdzie dziś piętrzą się góry, będą kiedyś morza tam gdzie dziś wełnią się morza, będą kiedyś
									pustynie. A chuj pozostanie chujem.
									<span className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-25'>
										<FaQuoteRight size={24} />
									</span>
								</p>
							</div>

							<div className='ml-8 flex flex-col gap-2'>
								<Link
									aria-label='Instagram Mateusza'
									href={''}
									className='rounded-full border border-transparent p-2 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
									<FaInstagram size={20} />
								</Link>
								<Link
									aria-label='Facebook Mateusza'
									href={''}
									className='rounded-full border border-transparent p-2 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
									<FaFacebook size={20} />
								</Link>
								<Link
									aria-label='Github Mateusza'
									href={''}
									className='rounded-full border border-transparent p-2 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
									<FaGithub size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='flex grow basis-3/5 gap-2 md:ml-12 md:gap-4'>
					<div className='flex grow flex-col gap-2 md:gap-4'>
						<div className='grid aspect-[7/8] w-full place-items-center rounded-lg bg-purple'>IMAGE</div>
						<div className='grid aspect-[7/8] w-full place-items-center rounded-lg bg-purple'>IMAGE</div>
					</div>
					<div className='flex grow flex-col gap-2 md:gap-4'>
						<div className='grid aspect-[7/8] w-full place-items-center rounded-lg bg-purple'>IMAGE</div>
						<div className='grid aspect-[7/8] w-full place-items-center rounded-lg bg-purple'>IMAGE</div>
					</div>
				</div>
			</section>

			<section className='wrapper my-48 flex flex-col items-center gap-8'>
				<p className='max-w-prose text-center text-2xl text-neutral-300'>
					Dołącz do naszej podróży tworzenia niezwykłych stron internetowych, które wykraczają poza schematy i angażują
					Twoją publiczność. Razem możemy stworzyć coś wyjątkowego, co będzie w pełni odzwierciedlać Twoją markę i
					przyciągać uwagę klientów.
				</p>
				<Link href={`/contact`}>
					<Button theme='secondary'>Umów się na darmową konsultację</Button>
				</Link>
			</section>

			<section className='wrapper mb-24 flex flex-col items-center md:flex-row'>
				<div className='basis-1/2'>
					<h3 className='bg-gradient-brand bg-clip-text font-heading text-sm font-bold uppercase tracking-widest text-transparent'>
						nasza misja
					</h3>
					<SectionHeading>*Nasza misja</SectionHeading>
					<p className='text-neutral-400'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quasi obcaecati sapiente, accusamus ea
						quidem ipsam ratione dignissimos nemo pariatur, culpa mollitia autem sunt iste repudiandae incidunt in illum
						dolorem voluptate ipsum veritatis facere magni deserunt odit. Id optio natus expedita aperiam deserunt at
						ipsa corrupti nobis commodi iste? Qui.
					</p>
				</div>

				<div></div>
			</section>
		</div>
	)
}

export default AboutUsPage
