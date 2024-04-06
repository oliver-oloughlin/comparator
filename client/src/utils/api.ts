import { hc } from "hono/client"
import type { App } from "../../../server/app.ts"

export const api = hc<App>("http://localhost:8000")
