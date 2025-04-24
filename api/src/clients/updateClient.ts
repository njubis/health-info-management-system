import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, updateClientSchema } from "./schema";

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

  export const updateClientHandler = async(c)=>{
      const formData  = c.req.valid("form");
      const id  = c.req.param("id");
      return c.json({
        success: true,
        message: "updated profile",
        data: {
        id,
        ...formData
        }
      })
    } 
