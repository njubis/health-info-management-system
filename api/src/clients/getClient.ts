import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, getClientParamSchema } from "./schema";

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

  export const getClientHandler = async(c)=>{
      const params  = c.req.valid("param");
      return c.json({
        success: true,
        data: {
        id: params.id,
        profile: "profile of user with id: " + params.id
        }
      })
    } 
