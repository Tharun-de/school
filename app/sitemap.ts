import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const lastMod = new Date();
  return [
    { url: `${base}/`, lastModified: lastMod },
    { url: `${base}/about`, lastModified: lastMod },
    { url: `${base}/programs`, lastModified: lastMod },
    { url: `${base}/location`, lastModified: lastMod },
    { url: `${base}/contact`, lastModified: lastMod },
  ];
}


