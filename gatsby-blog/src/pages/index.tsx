import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const IndexPage = ({ dark, setdark }) => {

  const result = useStaticQuery(graphql`{
    allStrapiCategory {
      edges {
        node {
          category
          cate {
            content
            published_at
            title
            image {
              url
              name
            }
            id
          }
          strapiId
        }
      }
    }
  }`)

  console.log(result);
  console.log(dark);
  
  return (
    <div>Hi</div>
  )
}

export default IndexPage
