import * as v from 'valibot'

export const programSchema = v.object({
  name: v.string(),
  description: v.string(),
  createdBy: v.string(),
  createdAt: v.string(),
})

export const programFormSchema = v.object({
  name: v.string(),
  description: v.string(),
})

export const programParamSchema = v.object({
   id: v.string()
 })

export type HealthProgram = v.InferInput<typeof programSchema>
export type NewHealthProgram = v.InferInput<typeof programFormSchema>
