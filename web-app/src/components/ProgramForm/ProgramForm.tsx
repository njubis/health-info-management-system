import { component$ } from "@builder.io/qwik";

export interface ProgramFormProps {}

export const ProgramForm = component$<ProgramFormProps>((props) => {
  return (
    <div class="mx-auto grid max-w-4xl items-center gap-16 rounded-md bg-white p-8 font-[sans-serif] text-[#333] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sm:grid-cols-2">
      <div>
        <h1 class="text-3xl font-extrabold">Create A new Health Program</h1>
        <p class="mt-3 text-sm text-gray-400">
          Health programs span across treatment and care of client at the
          facility and at home.
        </p>
        <div class="mt-12">
          <h2 class="text-lg font-extrabold">Doctor</h2>
          <ul class="mt-3">
            <li class="flex items-center">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <a
                target="blank"
                href="https://veilmail.io/e/FkKh7o"
                class="ml-3 text-sm text-[#007bff]"
              >
                <small class="block">oliver.doc@gmail.com</small>
                <strong>Dr. Oliver</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form
        action="https://fabform.io/f/xxxxx"
        method="post"
        class="ml-auo space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name of program"
          class="w-full rounded-md border px-4 py-2.5 text-sm outline-[#007bff]"
        />
        <textarea
          placeholder="descritpion"
          rows={12}
          name="descritpion"
          class="w-full rounded-md border px-4 pt-2.5 text-sm outline-[#007bff]"
        ></textarea>
        <button
          type="button"
          class="w-full rounded-md bg-[#007bff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
});
