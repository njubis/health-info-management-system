import { Hono } from "hono";
import { newClientAPIDescriber, newClientHandler, newClientValidator } from "./newClient";
import { getClientAPIDescriber, getClientHandler, getClientValidator } from "./getClient";
import { delClientAPIDescriber, delClientValidator, delClientHandler} from "./deleteClient"
import { updateClientAPIDescriber, updateClientHandler, updateClientValidator } from "./updateClient";
import { findClientAPIDescriber, findClientValidator, findClientHandler } from "./findClient";

/**
* Clients App
* we need to chain the calls to get(), post() etc
* so that we have the separation of clinet and medics routes working.
* because a hono instance `.route()` accepts the return value of the  `.get()`, `.post()` etc.
* */
const clientsAPI = new Hono<{Bindings: Cloudflare.Env}>()
  .post("/new", newClientAPIDescriber, newClientValidator, newClientHandler)
  .get("/:id", getClientAPIDescriber, getClientValidator, getClientHandler)
  .delete("/:id", delClientAPIDescriber, delClientValidator, delClientHandler)
  .post("/:id/update", updateClientAPIDescriber, updateClientValidator, updateClientHandler)
  .post("/search", findClientAPIDescriber, findClientValidator, findClientHandler)

export { clientsAPI }
