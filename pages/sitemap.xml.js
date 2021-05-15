const SitemapXml = () => {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

      <url>
        <loc>https://ahamedr.vercel.app/</loc>
        <lastmod>2021-05-15T19:39:15+00:00</lastmod>
      </url>
    </urlset>`
  )
}

SitemapXml.getInitialProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(SitemapXml())
  res.end()
}

export default SitemapXml
