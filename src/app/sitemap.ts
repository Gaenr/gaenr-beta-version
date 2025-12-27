import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://gaenr.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: 'https://gaenr.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		},
		{
			url: 'https://gaenr.com/services',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://gaenr.com/plans',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7
		},
		{
			url: 'https://gaenr.com/join',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6
		},
		{
			url: 'https://gaenr.com/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5
		},
		{
			url: 'https://gaenr.com/wishes',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.4
		}
	]
}
