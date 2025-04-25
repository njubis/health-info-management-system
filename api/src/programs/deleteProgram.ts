 import { describeRoute } from 'hono-openapi'
 import {
   resolver,
   validator as vValidator,
 } from 'hono-openapi/valibot'
 import { generateRandomString } from "../utils/generateRandomString";
 import { drizzle } from 'drizzle-orm/d1';
 import { schema } from '../db/schema';
 import { MiddlewareHandler } from 'hono';
import { HealthProgram, NewHealthProgram, programParamSchema, programSchema } from './programsSchema';
import { eq } from 'drizzle-orm';

 export const deleteProgramAPIDescriber = describeRoute({
       description: 'Delete an existing program',
       responses: {
         200: {
           description: 'Successful deletion of  a program',
           content: {
             'application/json': { schema: resolver(programSchema) }, // the program that was deleted
           },
         },
       },

     })

export const deleteProgramValidator = vValidator('param', programParamSchema)

export const deleteProgramHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async (c) => {
  const params = c.req.valid("param") as {id:string};
  const db = drizzle(c.env.DB, {schema})
  const deletedResults =  await db
    .delete(schema.enrolledProgramsTable)
    .where(eq(schema.enrolledProgramsTable.id,params.id))
    .returning()

  return c.json({
    success: true,
    data: deletedResults
  })
}
