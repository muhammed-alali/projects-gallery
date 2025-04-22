import { NextResponse } from "next/server";

export const dynamic = "force-static"; // or 'force-dynamic' if needed

export async function GET() {
  const siteUrl = "https://realty-weld.vercel.app"; // Replace with your domain
  const routes = [
    "", // homepage
    "/about",
    "/properties",
    "/services",
    "/blog",
    "/contact",
    // Dynamically fetched routes can go here
  ];

  // If you have dynamic content (like blog posts):
  // const posts = await fetchPostsFromDB()
  // posts.forEach(post => routes.push(`/blog/${post.slug}`))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${siteUrl}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
