import { api } from "services/api"

const IndexPage = () => {
  api.get("/")
  return <h1>Testing Next.js App written in TypeScript with Jest</h1>
}

export default IndexPage
