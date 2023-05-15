export const calculateElementScrollProgress = (scrollAmount: number, element: HTMLElement) => {
	let percentage = 0

	const target = element
	if (target) {
		const itemLength =
			scrollAmount + window.innerHeight <= target.offsetTop
				? 0
				: scrollAmount + window.innerHeight - target.offsetTop <= window.innerHeight + target.offsetHeight
				? scrollAmount + window.innerHeight - target.offsetTop
				: window.innerHeight + target.offsetHeight

		percentage = (itemLength * 100) / (window.innerHeight / 2 + target.offsetHeight)
	}

	return percentage
}
