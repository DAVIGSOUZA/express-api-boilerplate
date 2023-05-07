import { z } from "zod"

export type Example = {
  name: string
  age?: number
}

export const ExampleSchema = z.object({
  name: z.string().min(1),
  age: z.number().optional()
}).transform(data => data as Example)