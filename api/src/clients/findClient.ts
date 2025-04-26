
import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, queryParamSchema } from "./schema";
import { MiddlewareHandler } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '../db/schema';
import { like } from 'drizzle-orm';

export const findClientAPIDescriber = describeRoute({
      description: 'Search for a client by name',
      responses: {
        200: {
          description: ' Successful search',
          content: {
            'application/json': { schema: resolver(clientProfileSchema) },
          },
        },
      },
    })


  export const findClientValidator = vValidator('query', queryParamSchema)

  export const findClientHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async(c)=>{
      const params  = c.req.valid("query") as {q:string};
      const db = drizzle(c.env.DB, {schema})
      const foundresults = db.select()
                .from(schema.clientsTable)
                .where(like(schema.clientsTable.name, `%${params.q}%`));

      return c.json({
        success: true,
        data: foundresults
      })
    }
