import fs from "fs";
import {createClient} from "contentful";

const Sitemap = () => {
};

export const getServerSideProps = async ({res}: any) => {
  // @ts-ignore
  const baseUrl: any = {
    development: "http://localhost:3000",
    production: "https://portfolio-psi-steel-88.vercel.app/",
  }[process.env.NODE_ENV];

  if (!process.env.SPACE_ID_CONTENTFUL && !process.env.TOKEN_CONTENTFUL) {
    return {
      props: {
        posts: []
      }
    }
  }

  const client = createClient({
    space: process.env.SPACE_ID_CONTENTFUL || '',
    accessToken: process.env.TOKEN_CONTENTFUL || '',
  });

  const posts = await client.getEntries('blogPost');

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "sitemap.xml.ts",
        'index.tsx'
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.split('.tsx')[0]}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map((url) => (
    `<url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
    `))
    .join("")}
    ${posts && posts.items.length > 0 && posts.items.map((item: any) => (
      `
        <url>
        <loc>${baseUrl}/articles/${item.fields.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
       </url>
      `
  ))}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
