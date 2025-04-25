 import { describeRoute } from 'hono-openapi'
 import {
   resolver,
   validator as vValidator,
 } from 'hono-openapi/valibot'
 import { generateRandomString } from "../utils/generateRandomString";
 import { drizzle } from 'drizzle-orm/d1';
 import { schema } from '../db/schema';
 import { MiddlewareHandler } from 'hono';
import { programParamSchema, programSchema } from './programsSchema';
import { eq } from 'drizzle-orm';

 export const getProgramAPIDescriber = describeRoute({
  description: 'Get a program by it id',
  responses: {
    200: {
      description: "A program with that id was found and returned",
      content: {
        'application/json': { schema: resolver(programSchema) },
      },
    },
  },
})

export const getProgramValidator = vValidator('param', programParamSchema);

export const getProgramHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async (c) => {
  const params = c.req.valid("param") as { id: string };
  const db = drizzle(c.env.DB, {schema})
  const result = await db
    .select().from(schema.enrolledProgramsTable)
    .where(eq(schema.enrolledProgramsTable.id, params.id))

  return c.json({
    success: true,
    data: result
  })
}
