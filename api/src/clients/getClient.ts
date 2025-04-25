import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, getClientParamSchema } from "./schema";
import { MiddlewareHandler } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '../db/schema';
import { eq } from 'drizzle-orm';

export const getClientAPIDescriber = describeRoute({
      description: 'Get Client Profile',
      responses: {
        200: {
          description: 'Successfuly got client with said id',
          content: {
            'application/json': { schema: resolver(clientProfileSchema) },
          },
        },
      },

    })

  export const getClientValidator = vValidator('param', getClientParamSchema)

  export const getClientHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async(c)=>{
      const params  = c.req.valid("param") as { id: string};
      const db = drizzle(c.env.DB, {schema})
      const result = await db.select()
        .from(schema.clientsTable)
        .where(eq(schema.clientsTable.id, params.id))
      return c.json({
        success: true,
        data: result
      })
    }
