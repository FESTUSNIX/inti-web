import Button from '@/app/(main)/components/elements/Button'
import Link from 'next/link'
import React from 'react'

const QuoteSection = () => {
	return (
		<section className='wrapper relative my-32 flex flex-col items-center gap-8 md:my-48'>
			<p className='max-w-prose text-center text-xl text-neutral-300 md:text-2xl'>
				Dołącz do naszej podróży tworzenia niezwykłych stron internetowych, które wykraczają poza schematy i angażują
				Twoją publiczność. Razem możemy stworzyć coś wyjątkowego, co będzie w pełni odzwierciedlać Twoją markę i
				przyciągać uwagę klientów.
			</p>
			<Link href={`/contact`}>
				<Button theme='secondary'>Umów się na darmową konsultację</Button>
			</Link>

			<div className='blob blob-quote-section-1 left-0 top-0 aspect-square w-96 -translate-x-1/2 -translate-y-1/2'></div>
			<div className='blob blob-quote-section-2 right-0 top-1/2 aspect-square w-96 -translate-y-1/2'></div>
		</section>
	)
}

export default QuoteSection
