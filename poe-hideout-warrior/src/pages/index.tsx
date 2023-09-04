import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Sextant from "./sextant/Sextant"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Sextant />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
