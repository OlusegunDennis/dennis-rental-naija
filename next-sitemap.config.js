/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://dennis-rental-naija.netlify.app', // ✅ your live URL
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  outDir: 'public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
