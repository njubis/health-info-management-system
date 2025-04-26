import { component$ } from '@builder.io/qwik';

export interface ProgramsTableProps {
programsData: {name: string, description: string}[]
}

export const ProgramsTable = component$<ProgramsTableProps>(({programsData}) => {
  return (
    <div class="p-5">
        <div class="mt-8 rounded-lg bg-white p-4 shadow">
          <h2 class="pb-4 text-lg font-semibold text-gray-500">
            Programs
          </h2>
          <div class="my-1"></div>
          <div class="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <table class="w-full table-auto text-sm">
            <thead>
              <tr class="text-sm leading-normal">
                <th class="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                  Name
                </th>
                <th class="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {programsData.map(
                ({ name, description })=> {
                  return (
                    <tr  key={name} class="hover:bg-grey-lighter">
                      <td class="text-left border-grey-light border-b px-4 py-2 font-semibold text-blue-800">{name}</td>
                      <td class="text-left border-grey-light border-b px-4 py-2">{description}</td>
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
