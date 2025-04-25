import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, deleteClientParamSchema } from "./schema";
import { MiddlewareHandler } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '../db/schema';
import { eq } from 'drizzle-orm';

export const delClientAPIDescriber = describeRoute({
      description: 'Delete Client from system',
      responses: {
        200: {
          description: 'Successfuly deleted client with given id',
          content: {
            'application/json': { schema: resolver(clientProfileSchema) },
          },
        },
      },
    })


  export const delClientValidator = vValidator('param', deleteClientParamSchema)

  export const delClientHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async(c)=>{
      const params  = c.req.valid("param") as {id:string};
      const db = drizzle(c.env.DB, {schema})
      const deleted = await db
        .delete(schema.clientsTable)
        .where(eq(schema.clientsTable.id,params.id)).returning()

      return c.json({
        success: true,
        data: deleted
      })
    }
