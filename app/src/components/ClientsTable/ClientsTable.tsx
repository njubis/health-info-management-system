import { component$ } from "@builder.io/qwik";

export type Client = {
  name: string;
  dob: string;
  contact: string;
  gender: string;
  registrationDate: string;
  medicalHistory: string;
  enrolledPrograms: string;
};

export interface ClientsTableProps {
  clientsData: Client[];
}

export const ClientsTable = component$<ClientsTableProps>(({ clientsData }) => {
  return (
    <div class="p-5">

    <div class="mt-8 rounded-lg bg-white p-4 shadow">
      <h2 class="pb-4 text-lg font-semibold text-gray-500">
        Clients
      </h2>
      <div class="my-1"></div>
      <div class="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
      <table class="w-full table-auto text-sm">
        <thead>
          <tr class="text-left text-sm leading-normal">
            <th class="text-left bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
              Name
            </th>
            <th class="text-left hidden md:table-cell bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
              Contact
            </th>
            <th class="text-left bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
              Medical History
            </th>
            <th class="text-left hidden md:table-cell bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                          Programs
                        </th>
          <th class="text-left bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                                    Profile
                                  </th>
                    </tr>
        </thead>
        <tbody>
          {clientsData.map(
            ({ name,  contact, medicalHistory }) => {
              return (
                <tr key={name} class="hover:bg-grey-lighter">
                  <td class="border-grey-light border-b px-4 py-2">{name}</td>
                  <td class="hidden md:table-cell border-grey-light border-b px-4 py-2">{contact}</td>
                  <td class="border-grey-light border-b px-4 py-2">{medicalHistory}</td>
                  <td class="border-grey-light border-b px-4 py-2">
                    <span class="hidden md:table-cell rounded-md border-green-50 px-3 py-1 text-xs text-green-700 ring-1 ring-green-200">
                       View Programs
                    </span>
                  </td>
                  <td class="border-grey-light border-b px-4 py-2">
                                      <span class="rounded-md bg-blue-100 px-3 py-1 text-xs text-blue-700 ring-1 ring-green-200">
                                         View Profile
                                      </span>
                                    </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <div class="mt-4 text-right">
        <button class="rounded bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-600">
          See more
        </button>
      </div>
    </div>
    </div>

  );
});
