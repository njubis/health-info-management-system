import { component$ } from "@builder.io/qwik";
import { ClientsTable } from "~/components/ClientsTable/ClientsTable";
import { ProgramsTable } from "~/components/ProgramsTable/ProgramsTable";
import { useClientsData, useHealthProgramsData } from "../layout";

export default component$(() => {
  const clientsData = useClientsData();
  const programsData = useHealthProgramsData()
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
      <ProgramsTable programsData={programsData.value} />
      <ClientsTable clientsData={clientsData.value} />
    </section>
  );
});
