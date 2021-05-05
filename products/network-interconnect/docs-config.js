module.exports = {
  product: "Network Interconnect",
  pathPrefix: "/nodes",
  productIconKey: "nodes",
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/nodes",
  externalLinks: [
    {
      title: "Blog announcement",
      url: "https://blog.cloudflare.com/cloudflare-nodes/"
    },
    {
      title: "CNI Partnerships",
      url: "https://www.cloudflare.com/nodes-partnerships/"
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com"
    }
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { 'facetFilters': '["project:nodes"]'}
  },
  siteMetadata: {
    title: "Cloudflare Network Interconnect docs",
    description: "For a faster, more reliable, and more secure experience than connecting over the Internet.",
    author: "@cloudflare",
    url: "https://secret.wiki/nodes",
    image: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII="
  }
}
