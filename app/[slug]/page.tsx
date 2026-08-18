import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { getServicePages, getServicePage } from "@/lib/servicePages";
import { getBlogPosts, getBlogPost } from "@/lib/blogPosts";

export async function generateStaticParams() {
  const [servicePages, blogPosts] = await Promise.all([getServicePages(), getBlogPosts()]);
  return [...servicePages.map((p) => ({ slug: p.slug })), ...blogPosts.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `/${slug}`;

  const servicePage = await getServicePage(slug);
  if (servicePage) {
    return {
      title: servicePage.metaTitle,
      description: servicePage.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: servicePage.metaTitle,
        description: servicePage.metaDescription,
        url: canonical,
        type: "website",
        images: [{ url: servicePage.image.src }],
      },
      twitter: {
        card: "summary_large_image",
        title: servicePage.metaTitle,
        description: servicePage.metaDescription,
        images: [servicePage.image.src],
      },
    };
  }

  const post = await getBlogPost(slug);
  if (post) {
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: canonical,
        type: "article",
        publishedTime: post.date,
        images: [{ url: post.image.src }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.metaTitle,
        description: post.metaDescription,
        images: [post.image.src],
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const servicePage = await getServicePage(slug);
  if (servicePage) {
    return <ServicePageTemplate page={servicePage} />;
  }

  const post = await getBlogPost(slug);
  if (post) {
    return <BlogPostTemplate post={post} />;
  }

  notFound();
}
