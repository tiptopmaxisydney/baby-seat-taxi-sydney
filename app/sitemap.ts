import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getServicePages } from "@/lib/servicePages";
import { getBlogPosts } from "@/lib/blogPosts";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/get-quote", priority: 0.9, changeFrequency: "weekly" },
  { path: "/babyseattaxisydney-bookings", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fare-estimator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/baby-seat-taxi-company-in-sydney", priority: 0.7, changeFrequency: "monthly" },
  { path: "/baby-seat-taxi-sydney-contact-details", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/baby-seat-taxi-sydney-blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const [servicePages, blogPosts] = await Promise.all([getServicePages(), getBlogPosts()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
