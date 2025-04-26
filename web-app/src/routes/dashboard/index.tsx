import { component$ } from "@builder.io/qwik";
import { ClientsTable } from "~/components/ClientsTable/ClientsTable";
import { ProgramsTable } from "~/components/ProgramsTable/ProgramsTable";

export default component$(() => {
  return (
    <section
      id="content"
      class="w-full grow p-5 transition-all duration-500 ease-in-out"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div class="m-2 flex items-center justify-between rounded-md bg-slate-50 p-5 shadow">
          <div>
            <h3 class="font-bold">Total Clients</h3>
            <p class="text-gray-500">100</p>
          </div>
        </div>

        <div class="m-2 flex items-center justify-between bg-slate-50 p-5 shadow">
          <div>
            <h3 class="font-bold">Total Programs</h3>
            <p class="text-gray-500">15</p>
          </div>
        </div>
      </div>
      <div class="relative w-full max-w-md">
        <input
          class="focus:shadow-outline h-10 w-full rounded-full border py-1 pr-4 pl-10 text-base placeholder-gray-500"
          type="search"
          placeholder="Search..."
        />
      </div>
      <ProgramsTable programsData={[
                {name: "HIV Care and Treatment", description:"Comprehensive Care for people living with HIV."},
                {name: "Malaria Prevention", description:"Community-based Malaria prevention through testing, treatment and mosquito nets."},
                {name: "Maternal and Child Health", description:"Focused on prenatal care, safe delivery, immunization and child wellness"},
              ]} />
      <ClientsTable clientsData={[
                         {
                           "name": "Amina Kahiga",
                           "dob": "2010-04-03",
                           "gender": "Female",
                           "contact": "+254712345678",
                           "enrolledPrograms": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                           "registrationDate": "2024-02-20",
                           "medicalHistory": "Asthma diagnosed 2018; no known drug allergies.",
                         },
                         {
                           "name": "John Ochieng",
                           "dob": "1985-11-12",
                           "gender": "Male",
                           "contact": "+254700123456",
                           "enrolledPrograms": "a1b2c3d4-5678-9abc-def0-1234567890ab,3fa85f64-5717-4562-b3fc-2c963f66afa6",
                           "medicalHistory": "Type 2 diabetes; hypertension.",
                         },
                         {
                           "name": "Linet Wanjiku",
                           "dob": "1992-07-22",
                           "gender": "Female",
                           "contact":"+254733987654",
                           "enrolledPrograms": "5e47d3a2-8b65-4e8c-9d0a-4b2f6e7d8c9d",
                           "medicalHistory": "No chronic conditions; recovered from malaria 2023.",
                         },
                         {
                           "name": "Abel Mutua",
                           "dob": "1978-02-05",
                           "gender": "Male",
                           "contact":  "+254722444333",
                           "enrolledPrograms":  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                           "medicalHistory": "TB treatment completed 2022.",
                         },
                         {
                           "name": "Mercy Njeri",
                           "dob": "2005-09-14",
                           "gender": "Female",
                           "contact": "+254711222333",
                           "enrolledPrograms":  "a1b2c3d4-5678-9abc-def0-1234567890ab",
                           "medicalHistory": "HIV positive since 2021; on ART.",
                         },
                         {
                           "name": "Peter Mwangi",
                           "dob": "1980-12-01",
                           "gender": "Male",
                           "contact": "+254744555666",
                           "enrolledPrograms": "",
                           "registrationDate": "2024-04-01",
                           "medicalHistory": "No known conditions.",
                         },
                         {
                           "name": "Lindy Atieno",
                           "dob": "1999-03-19",
                           "gender": "Female",
                           "contact":"+254755666777",
                           "enrolledPrograms": "5e47d3a2-8b65-4e8c-9d0a-4b2f6e7d8c9d,3fa85f64-5717-4562-b3fc-2c963f66afa6",
                           "medicalHistory": "History of malaria and asthma.",
                         },
                         {
                           "name": "Mark Otieno",
                           "dob": "1975-05-30",
                           "gender": "Male",
                           "contact": "+254766777888",
                           "enrolledPrograms": "a1b2c3d4-5678-9abc-def0-1234567890ab",
                           "medicalHistory": "Hypertension; high cholesterol.",
                         },
                         {
                           "name": "Faith Wambui",
                           "dob": "2002-08-11",
                           "gender": "Female",
                           "contact": "+254777888999",
                           "enrolledPrograms": "5e47d3a2-8b65-4e8c-9d0a-4b2f6e7d8c9d",
                           "medicalHistory": "Recently treated for malaria.",
                         }
                       ]} />
    </section>
  );
});
