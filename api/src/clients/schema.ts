import * as v from 'valibot'

export const CLIENT_GENDERS = ["Male", "Female", "Other"] as const

export const newClientSchema = v.object({
  /** name of client */
  name: v.string(),
  /** date of birth as a string */
  dob: v.string(),
  gender: v.picklist(CLIENT_GENDERS),
  /** contact information */
  contact: v.string(),
  /** Array of ids of programs as a string separated by commas */
  enrolledPrograms:  v.string(),
  /** medical history od the client */
  medicalHist: v.string()
})

export const clientProfileSchema = v.object({
  ...newClientSchema.entries,
  registrationDate: v.string(), // this is generated automatically
  nextAppointment: v.optional(v.string()),
  servedBy: v.string() // id of the doctor who served them;
})

//export const updateClientSchema = // clientProfileSchema with all fields as optional
export const updateClientSchema = v.partial(clientProfileSchema)

export const getClientParamSchema = v.object({
  id: v.string()
})

export const deleteClientParamSchema = v.object({
  id: v.string()
})

export const queryParamSchema = v.object({
  q: v.string()
})

export type NewClient = v.InferInput<typeof newClientSchema>
export type UpdateClient = v.InferInput<typeof updateClientSchema>
export type ClientProfile = v.InferInput<typeof clientProfileSchema>
