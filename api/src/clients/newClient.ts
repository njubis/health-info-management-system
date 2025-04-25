import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { ClientProfile, NewClient, clientProfileSchema, newClientSchema } from "./schema";
import { generateRandomString } from "../utils/generateRandomString";
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '../db/schema';
import { MiddlewareHandler } from 'hono';

export const newClientAPIDescriber = describeRoute({
      description: 'Create new client',
      responses: {
        200: {
          description: 'Successful creation of a client',
          content: {
            'application/json': { schema: resolver(clientProfileSchema) },
          },
        },
      },

    })


  export const newClientValidator = vValidator('form', newClientSchema)

export const newClientHandler: MiddlewareHandler<{ Bindings: Cloudflare.Env }, "/new", any> = async (c) => {
  const formData: NewClient = c.req.valid("form") as NewClient;
  const id = generateRandomString(16);
  const newClientData: ClientProfile = {
    ...formData,
    servedBy: "Dr. Oliver",
    registrationDate: new Date().toDateString(),
    nextAppointment: new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)).toDateString() // + seven days
  }
  const db = drizzle(c.env.DB, {schema})
      const res = await db.insert(schema.clientsTable).values({id, ...newClientData}).returning()
      return c.json({
        success: true,
        data: res
      })
    }
