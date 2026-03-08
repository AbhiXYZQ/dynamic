import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://dynamiccampus.in";

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/academics", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "weekly", priority: "0.8" },
  { path: "/notices", changefreq: "daily", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/toppers", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.6" },
  { path: "/terms", changefreq: "yearly", priority: "0.6" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.5" },
  { path: "/grievance", changefreq: "yearly", priority: "0.5" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const urlNodes = routes
  .map(
    ({ path, changefreq, priority }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;

const outputPath = resolve(process.cwd(), "public", "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

console.log(`Sitemap generated: ${outputPath}`);
