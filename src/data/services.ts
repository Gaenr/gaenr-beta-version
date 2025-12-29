import { Service } from '@/types/service'

export const services: Service[] = [
	{
		serviceId: 1,
		name: 'Content Writing',
		description:
			'Professional content writing services for blogs, articles, and web copy.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/content-writing.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	},
	{
		serviceId: 2,
		name: 'Graphics Design',
		description:
			'Creative graphic design services for logos, branding, and marketing materials.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/graphics-design.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	},

	{
		serviceId: 3,
		name: 'Presentation Design',
		description:
			'Creative presentation design services for impactful slides and visual storytelling.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/presentation-design.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	},
	{
		serviceId: 4,
		name: 'WordPress Website',
		description:
			'Professional WordPress development services for custom themes and plugins.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/wordpress-development.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	},
	{
		serviceId: 5,
		name: 'Video Editing',
		description:
			'Professional video editing services for promotional videos, tutorials, and more.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/video-editing.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	},
	{
		serviceId: 6,
		name: 'UX & UI Design',
		description:
			'User experience and interface design services for engaging digital products.',
		minPrice: 1000,
		maxPrice: 5000,
		imageUrl: '/images/services/ux-ui-design.jpg',
		minDuration: 3,
		maxDuration: 10,
		experts: 5,
		ratings: 4.8,
		completedProjects: 150,
		totalReviews: 45,
		reviews: [
			{
				reviewer: 'Alice Johnson',
				rating: 5,
				comment: 'Excellent content that boosted our website traffic!'
			},
			{
				reviewer: 'Bob Smith',
				rating: 4.2,
				comment: 'Good quality writing, delivered on time.'
			}
		]
	}
]
