import * as z from 'zod'

const FeedbackFormSchema = z.object({
	name: z
		.string()
		.min(3, 'Minimum 3 characters')
		.max(32, 'Maximum 32 characters')
		.trim(),
	email: z.string().max(64, 'Maximum 64 characters').trim().pipe(z.email()),
	contact: z.string().max(18, 'Maximum 18 characters').trim(),
	channel: z.enum(
		['email', 'whatsapp', 'facebook', 'telegram'],
		'Select a contact channel'
	),
	service: z.enum(
		[
			'content-writing',
			'graphics-design',
			'video-editing',
			'ux-ui-design',
			'wordpress-website',
			'presentation-design'
		],
		'Select an option'
	),
	category: z.enum(
		[
			'blog',
			'copywriting',
			'seo',
			'script',
			'product-descriptions',
			'logo-design',
			'brand-identity',
			'social-media-posts',
			'banner-design',
			'poster-flyer-design',
			'packaging-design',
			'infographics',
			'book-ebook-covers',
			'thumbnail-design',
			'youtube-video-editing',
			'short-form-videos',
			'corporate-videos',
			'ads-promotional-videos',
			'motion-graphics',
			'color-grading',
			'subtitles-captions',
			'wedding-event-videos',
			'mobile-app-ui-design',
			'website-ui-design',
			'wireframing',
			'prototyping',
			'user-research',
			'ux-audit-review',
			'dashboard-design',
			'design-systems',
			'full-website-development',
			'landing-page-design',
			'theme-customization',
			'plugin-setup-configuration',
			'woocommerce-setup',
			'website-speed-optimization',
			'seo-setup',
			'website-maintenance-security',
			'powerpoint-google-slides-design',
			'pitch-decks',
			'business-presentations',
			'sales-decks',
			'webinar-presentations',
			'educational-slides',
			'infographic-style-slides'
		],
		'Select an option'
	),
	message: z
		.string()
		.trim()
		.min(10, 'Minimum 10 characters')
		.max(1000, 'Maximum 1000 characters')
})

export default FeedbackFormSchema
