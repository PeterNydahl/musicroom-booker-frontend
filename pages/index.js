import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "./components/BlockRenderer";
import { assignIdAndCleanBlocks } from "utils/assignIdAndCleanBlocks";


export default function Home(props) {
  console.log("PROPS", props);
  return <BlockRenderer blocks={props.blocks}/>;
}

// getStaticProps är en inbyggd funktion i Next.js som körs på serversidan vid build time då sajten byggs. Hämtar statisk data som injiceras som props i komponenten.
// Bra att använda när innehållet inte förändras ofta och perfekt för våra GraphQL-anrop!
export const getStaticProps = async () => {
  // deconstructing the data from the query 
  const {data} = await client.query({
    query: gql`
      query blockQuery {
        nodeByUri(uri: "/") {
          ... on Page {
          id
          blocks(postTemplate: false)
          }
        }
      }
    `
  })
  
  return {
    props: {
      blocks: assignIdAndCleanBlocks(data.nodeByUri.blocks),
    }
  }
}



