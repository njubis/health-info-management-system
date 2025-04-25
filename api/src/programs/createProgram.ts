
 import { describeRoute } from 'hono-openapi'
 import {
   resolver,
   validator as vValidator,
 } from 'hono-openapi/valibot'
 import { generateRandomString } from "../utils/generateRandomString";
 import { drizzle } from 'drizzle-orm/d1';
 import { schema } from '../db/schema';
 import { MiddlewareHandler } from 'hono';
import { HealthProgram, NewHealthProgram, programFormSchema, programSchema } from './programsSchema';

 export const createProgramAPIDescriber = describeRoute({
  description: 'Create new program',
  responses: {
    200: {
      description: 'Successful creation of a program',
      content: {
        'application/json': { schema: resolver(programSchema) },
      },
    },
  },
})

export const createProgramValidator = vValidator('form', programFormSchema)

export const createProgramHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async (c) => {
  const formData: NewHealthProgram = c.req.valid("form") as NewHealthProgram;
  const id = generateRandomString(16);
  const programData: HealthProgram = {
    ...formData,
    createdBy: "Dr. Oliver",
    createdAt: new Date().toDateString(),
  }
  const db = drizzle(c.env.DB, {schema})
  const res = await db.insert(schema.enrolledProgramsTable).values({id, ...programData}).returning()
  return c.json({
    success: true,
    data: res
  })
}
