// filepath: /workspaces/tt-slay-tiers/src/contentful.ts
import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN
})

export default client