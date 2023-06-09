import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { BasicCard } from '@/types/BasicCard'
import { Testimonial } from '@/types/Testimonial'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { TeamMember } from '@/types/TeamMember'
import { AboutUs } from '@/types/AboutUs'
import { Services } from '@/types/Services'

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

export async function getTeamMembers(): Promise<TeamMember[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "teamMember"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            quote,
            socialMedia,
        }`
	)
}

export async function getSingletonAboutUs(): Promise<AboutUs> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "aboutUs"]{
            _id,
            _createdAt,
            aboutUsMarquees,
            "aboutUsImages": aboutUsImages
        }[0]`
	)
}

export async function getSingletonServices(): Promise<Services> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "services"]{
            _id,
            _createdAt,
            contactCTA,
            ourCapabilities,
            serviceCards,
            serviceDescriptions,
            process
        }[0]`
	)
}
