import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ProgramsTable } from "~/components/ProgramsTable/ProgramsTable";
import { useHealthProgramsData } from "../../layout";

export default component$(() => {
  const programsData = useHealthProgramsData()
  return (
    <div>
      <Link
        href="/dashboard/new/program"
        class="w-fit m-2 flex items-center justify-between rounded-md bg-indigo-500 p-5 text-white shadow"
      >
        <div>
          <h3 class="font-bold">Create New Health Program</h3>
        </div>
      </Link>
      <section>
        <ProgramsTable programsData={programsData.value} />
      </section>
    </div>
  );
});
