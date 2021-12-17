import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people shivtosh here</h1>
    <p>Welcome to your new Gatsby site for my shop.</p>
    <p>Now go build something great ojk.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page w 2</Link> <br />
      <Link to="/using-typescript/">Go to w "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to w"Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to w"Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
