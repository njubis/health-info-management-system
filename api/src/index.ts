import { Hono } from 'hono'
import { WorkerEntrypoint } from "cloudflare:workers";
import { NewClient, UpdateClient, clientsAPI }  from './clients';
import { generateRandomString } from './utils/generateRandomString';

const app = new Hono()

app.route("/clients", clientsAPI)

/**
* # REST and RPC(WorkerEntrypoint)
* this class provided by Cloudflare will allow us to have REST api and RPC functionality within the same script
* */
export default class extends WorkerEntrypoint {
  /** The fetch handler. Here goes our rest API */
  // @ts-ignore
  async fetch(request:Request, env:Cloudflare.Env, ctx:ExecutionContext) {
    return app.fetch(request, env, ctx);
  }

  async getClient(id: string){
    // read from db a client with this id
    return {
      id, 
      profile: "client whose id matches"
    }
  }

  async deleteClient(id: string){
    // we wont actually delete but rather mark as archived.
    return {
      id,
      profile: "profile which was deleted"
    }
  }

  async createClient(data: NewClient){
    // create client and return profile
    const id = generateRandomString(16)
    return {
       id, 
       ...data,
       profile: "other properties"
    }
  }
  async updateClient(data: UpdateClient){
    // write changed properties
    const id = generateRandomString(16)
    return {
       id, 
       ...data,
       profile: "updated profile"
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

