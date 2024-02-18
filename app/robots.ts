import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
  return {
    rules: {
      userAgent: 'Googlebot',
      disallow: ['/profile', '/unread', '/u'],
    },
    sitemap: '/sitemap.xml',
  }
}