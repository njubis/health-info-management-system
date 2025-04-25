import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { UpdateClient, clientProfileSchema, updateClientSchema } from "./schema";
import { MiddlewareHandler } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateClientAPIDescriber = describeRoute({
      description: 'Update one or more client details',
      responses: {
        200: {
          description: 'Successful update of a client with said details',
          content: {
            'application/json': { schema: resolver(clientProfileSchema) }, // this time it will be the updated vesion
          },
        },
      },
    })

  export const updateClientValidator = vValidator('form', updateClientSchema)

  export const updateClientHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, string, any> = async(c)=>{
      const formData  = c.req.valid("form") as UpdateClient;
      const id  = c.req.param("id") as string;
      const db = drizzle(c.env.DB, {schema})
      const updatedRes = await db.
        update(schema.clientsTable)
        .set(formData)
        .where(eq(schema.clientsTable.id, id))
        .returning()

      return c.json({
        success: true,
        data: updatedRes
      })
    }
