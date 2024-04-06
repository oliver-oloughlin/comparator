/// <reference lib="deno.ns" />

import { app } from "./app.ts"

Deno.serve(app.fetch)
