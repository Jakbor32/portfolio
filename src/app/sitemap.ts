import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jakubborowy.com/',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://jakubborowy.com/projects',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}