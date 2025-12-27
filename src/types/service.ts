export interface Service {
	readonly serviceId: number
	name: string
	description: string
	minPrice: number
	maxPrice: number
	imageUrl: string
	minDuration: number // in days
	maxDuration: number // in days
	experts: number
	ratings: number // average rating
	completedProjects: number
	totalReviews: number
	reviews: {
		reviewer: string
		rating: number
		comment: string
	}[]
}
