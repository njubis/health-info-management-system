import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ClientsTable } from "~/components/ClientsTable/ClientsTable";
import { useClientsData } from "../../layout";

export default component$(() => {
  const clientsData = useClientsData();
  return (
    <div>
      <Link
        href="/dashboard/new/client"
        class="w-fit m-2 flex items-center justify-between rounded-md bg-indigo-500 p-5 text-white shadow"
      >
        <div>
          <h3 class="font-bold">Register New Cient</h3>
        </div>
      </Link>
      <section>
        <ClientsTable clientsData={clientsData.value} />
      </section>
    </div>
  );
});
