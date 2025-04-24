import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, deleteClientParamSchema } from "./schema";

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

  export const delClientHandler = async(c)=>{
      const params  = c.req.valid("param");
      return c.json({
        success: true,
        data: {
        id: params.id,
        profile: "profile of user with id: " + params.id + " will be deleted"
        }
      })
    } 
