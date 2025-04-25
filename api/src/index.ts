import { Hono } from 'hono'
import { WorkerEntrypoint } from "cloudflare:workers";
import { NewClient, UpdateClient, clientsAPI }  from './clients';
import { generateRandomString } from './utils/generateRandomString';
import { drizzle } from 'drizzle-orm/d1';
import { clientsTable, schema } from './db/schema';
import { eq } from "drizzle-orm"

const app = new Hono<{Bindings: Cloudflare.Env}>()

app.route("/clients", clientsAPI)

/**
* # REST and RPC(WorkerEntrypoint)
* this class provided by Cloudflare will allow us to have REST api and RPC functionality within the same script
* */
export default class extends WorkerEntrypoint<Cloudflare.Env> {
  /** The fetch handler. Here goes our rest API */
  // @ts-ignore
  async fetch(request:Request, env:Cloudflare.Env, ctx:ExecutionContext) {
    return app.fetch(request, this.env, this.ctx);
  }

  async getClient(id: string) {
    // read from db a client with this id
    const db = drizzle(this.env.DB, { schema })
    const result = await db
      .select()
      .from(schema.clientsTable)
      .where(eq(schema.clientsTable.id,id))
    return {
      success: true,
      data: result
    }
  }

  async deleteClient(id: string){
    // lets just delete for simplicty
    const db = drizzle(this.env.DB, {schema})
    const deleted = await db
      .delete(schema.clientsTable)
      .where(eq(schema.clientsTable.id,id))
      .returning()
    return {
      success: true,
      data: deleted
    }
  }

  async createClient(data: NewClient){
    // create client and return profile
    const id = generateRandomString(16)
    const newClientData = {
      id,
      ...data,
      registrationDate: new Date().toDateString(),
      nextAppointment:  new Date(new Date().getTime()+(7*24*60*60*1000)).toDateString()
    }
    const db = drizzle(this.env.DB)
    const result = db
      .insert(clientsTable)
      .values(newClientData)
      .returning()

    return {
      sucess: true,
      data: result
    }
  }

  async updateClient(id:string, data: UpdateClient){
    // write changed properties
    const db = drizzle(this.env.DB)
    const result = db
      .update(schema.clientsTable)
      .set(data)
      .where(eq(schema.clientsTable.id, id))
      .returning()

    return {
      success: true,
      data: result
    }
  }

  async findClient(query: string){
    // find a client using the provided query
    return {
       query,
       // list of found clients
       data: [

       ],
    }
  }
}
