import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ProgramsTable } from "~/components/ProgramsTable/ProgramsTable";

export default component$(() => {
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
        <ProgramsTable programsData={[
          {name: "HIV Care and Treatment", description:"Comprehensive Care for people living with HIV."},
          {name: "Malaria Prevention", description:"Community-based Malaria prevention through testing, treatment and mosquito nets."},
          {name: "Maternal and Child Health", description:"Focused on prenatal care, safe delivery, immunization and child wellness"},
        ]} />
      </section>
    </div>
  );
});
