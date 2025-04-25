import { Hono } from "hono";
import { getProgramAPIDescriber, getProgramHandler, getProgramValidator } from "./getProgram";
import { createProgramAPIDescriber, createProgramHandler, createProgramValidator } from "./createProgram";
import { deleteProgramAPIDescriber, deleteProgramHandler, deleteProgramValidator } from "./deleteProgram";

const programsAPI = new Hono<{Bindings: Cloudflare.Env}>()
  .get("/:id", getProgramAPIDescriber, getProgramValidator, getProgramHandler)
  .post("/new", createProgramAPIDescriber, createProgramValidator, createProgramHandler)
  .delete("/:id", deleteProgramAPIDescriber, deleteProgramValidator, deleteProgramHandler)

export {programsAPI}
