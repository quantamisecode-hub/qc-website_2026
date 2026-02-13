import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.quantamisecode.com'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/blogs-post',
        '/privacy-policy',
        '/terms-conditions',
        '/cookie-policy',
    ]

    // Service routes (filtered to ensure they have page.tsx)
    const serviceRoutes = [
        '/services/cloud-consulting',
        '/services/ecommerce-development',
        '/services/devops-services',
        '/services/saas-development',
        '/services/UX-UI-design',
        '/services/nextjs-development',
        '/services/mobile-app-development',
        '/services/full-stack-development',
        '/services/data-engineering-consulting',
        '/services/dedicated-development-team',
        '/services/ai-solutions',
        '/services/industrial-iot-development',
    ]

    // Fetch blogs
    let blogEntries: MetadataRoute.Sitemap = []
    try {
        const response = await fetch('https://www.quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=100')
        if (response.ok) {
            const posts = await response.json()
            blogEntries = posts.map((post: any) => ({
                url: `${baseUrl}/blogs-post/read?slug=${post.slug}`,
                lastModified: new Date(post.modified),
                changeFrequency: 'weekly',
                priority: 0.6,
            }))
        }
    } catch (error) {
        console.error('Error fetching blogs for sitemap:', error)
    }

    const routes = [...staticRoutes, ...serviceRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...blogEntries] as MetadataRoute.Sitemap
}
