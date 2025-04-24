import { describeRoute } from 'hono-openapi'
import {
  resolver,
  validator as vValidator,
} from 'hono-openapi/valibot'
import { clientProfileSchema, newClientSchema } from "./schema";
import { generateRandomString } from "../utils/generateRandomString";

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

  export const newClientHandler = async(c)=>{
      const  formData = c.req.valid("form");
      const id = generateRandomString(16);
      return c.json({
        success: true,
        data: {
        ...formData,
        id,
        servedBy: "id-1234",
        registrationDate: new Date().toDateString(),
        nextAppointment:  new Date(new Date().getTime()+(7*24*60*60*1000)).toDateString() // + seven days
        }
      })
    }
