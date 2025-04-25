import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const clientsTable = sqliteTable("clients", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  dob: text("dob").notNull(),
  contact: text("contact").notNull(),
  medicalHist: text("medical_hist").notNull(),
  enrolledPrograms: text("enrolled_programs").notNull(),
});

export const enrolledProgramsTable = sqliteTable("enrolled_programs", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdBy: text("created_by").notNull(),
  createdAt: text("created_at").notNull(),
});

export const medicsTable = sqliteTable("medics", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  specialzation: text("specialization").notNull(),
  facility: text("facility").notNull(),
  registeredAt: text("registered_at").notNull()
})

export const schema = {
  clientsTable,
  enrolledProgramsTable,
  medicsTable
}
