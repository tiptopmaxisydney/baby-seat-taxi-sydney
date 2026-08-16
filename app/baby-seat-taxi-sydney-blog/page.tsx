import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/service/ServiceHero";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Baby Seat Taxi Sydney",
  description: "News, guides and helpful information about baby seat taxis, child restraint laws and family travel in Sydney.",
};

export default function BlogPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Blog"
        title="News & Guides"
        description="Helpful articles about baby capsules, child seats, NSW child restraint laws and family travel across Sydney."
        breadcrumbLabel="Blog"
        image={{ src: "/images/blog-benefits-of-baby-seat-taxi-real.png", alt: "Baby Seat Taxi Sydney blog" }}
      />

      <section className="wt-section">
        <div className="container">
          <div className="wt-blog-grid">
            {blogPosts.map((post) => (
              <Link href={`/${post.slug}/`} key={post.slug} className="wt-blog-card">
                <Image src={post.image.src} alt={post.image.alt} width={400} height={225} style={{ width: "100%", height: "auto" }} />
                <div className="wt-blog-card-body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
