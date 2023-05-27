import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { BasicCard } from '@/types/BasicCard'
import { Testimonial } from '@/types/Testimonial'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const imageBuilder = imageUrlBuilder(clientConfig)

export function sanityUrlFor(source: SanityImageSource) {
	return imageBuilder.image(source)
}

export async function getProjects(): Promise<Project[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && isDefault != true]{
            _id,
            _createdAt,
            isDefault,
            name,
            description,
            "slug": slug.current,
            "images": images
        }`
	)
}

export async function getPortfolioDefaultText(): Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project" && isDefault == true]{
            _id,
            _createdAt,
            isDefault,
            name,
            description,
        }[0]`
	)
}

export async function getWebsiteProsCards(): Promise<BasicCard[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "website-pros-card"]{
            _id,
            _createdAt,
            title,
            content
        }`
	)
}

export async function getOurAdvantagesCards(): Promise<BasicCard[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "our-advantages-card"]{
            _id,
            _createdAt,
            title,
            content
        }`
	)
}

export async function getFAQCards(): Promise<BasicCard[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "faq-card"]{
            _id,
            _createdAt,
            title,
            content
        }`
	)
}

export async function getTestimonials(): Promise<Testimonial[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "testimonial"]{
            _id,
            _createdAt,
            name,
            position,
            "image": image.asset->url,
            content,
        }`
	)
}
