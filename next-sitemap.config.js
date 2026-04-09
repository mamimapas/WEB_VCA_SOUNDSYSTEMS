/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vca-soundsystems.es",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  exclude: ["/privacidad", "/aviso-legal", "/cookies"],
};
