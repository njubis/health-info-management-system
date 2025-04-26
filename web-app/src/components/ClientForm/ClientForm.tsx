import { component$, useStore } from "@builder.io/qwik";

export interface ClientFormProps {}

export const ClientForm = component$<ClientFormProps>((props) => {
  const store = useStore({
    name: "",
    dob: "",
    contact: "",
    medicalHistory: "",
    enrolledPrograms: "",
  });
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div class="mx-auto w-full max-w-4xl bg-white">
        <div class="grid h-full grid-cols-6">
          <div class="col-span-2 bg-blue-900 p-10">
            <h2 class="before:content[''] relative mb-10 text-2xl font-bold text-blue-100 before:absolute before:-bottom-4 before:block before:h-1 before:w-20 before:-skew-y-3 before:bg-sky-300">
              Overview
            </h2>
            <p class="border-b border-blue-700 py-8 font-bold text-blue-100">
              Name
              <span class="block text-xs font-normal text-blue-300">
                {store.name}
              </span>
            </p>
            <p class="border-b border-blue-700 py-8 font-bold text-blue-100">
              Phone Number
              <span class="block text-xs font-normal text-blue-300">
                {store.contact}
              </span>
            </p>
            <p class="border-b border-blue-700 py-8 font-bold text-blue-100">
              Programs
              <span class="block text-xs font-normal text-blue-300">
                {store.enrolledPrograms}
              </span>
            </p>
            <p class="border-b border-blue-700 py-8 font-bold text-blue-100">
              Medical History
              <span class="block text-xs font-normal text-blue-300">
                {store.medicalHistory}
              </span>
            </p>
          </div>
          <div class="col-span-4 bg-blue-50 p-14">
            <h2 class="before:content[''] relative mb-14 text-4xl font-bold text-blue-900 before:absolute before:-bottom-4 before:block before:h-1 before:w-20 before:-skew-y-3 before:bg-sky-300">
              Client Information
            </h2>
            <div class="mb-6 grid grid-cols-2 gap-6">
              <div class="flex flex-col">
                <input
                  onInput$={(_, inputEl) => {
                    store.name = inputEl.value;
                  }}
                  class="rounded-full bg-white px-6 py-4 placeholder:text-xs"
                  aria-placeholder="name"
                  placeholder="Name"
                />
              </div>
              <div class="flex flex-col">
                <input
                  type="date"
                  onInput$={(_, inputEl) => {
                    store.dob = inputEl.value;
                  }}
                  class="rounded-full bg-white px-6 py-4 placeholder:text-xs"
                  aria-placeholder="DOB"
                  placeholder="DOB"
                />
              </div>
            </div>
            <div class="mb-6 grid grid-cols-2 gap-6">
              <div class="flex flex-col">
                <input
                  onInput$={(_, inputEl) => {
                    store.contact = inputEl.value;
                  }}
                  class="rounded-full bg-white px-6 py-4 placeholder:text-xs"
                  aria-placeholder="contact"
                  placeholder="Contact"
                />
              </div>
              <div class="flex flex-col">
                <input
                  onInput$={(_, inputEl) => {
                    store.enrolledPrograms = inputEl.value;
                  }}
                  class="rounded-full bg-white px-6 py-4 placeholder:text-xs"
                  aria-placeholder="enroledPrograms"
                  placeholder="Enroled Programs"
                />
              </div>
            </div>
            <div class="mb-6">
              <textarea
                onInput$={(_, inputEl) => {
                  store.medicalHistory = inputEl.value;
                }}
                class="w-full rounded-2xl px-6 py-4 placeholder:text-xs"
                placeholder="Medical History"
                name=""
                id=""
                rows="8"
              ></textarea>
            </div>
            <div class="flex justify-center">
              <button class="min-w-40 rounded-full bg-blue-900 px-6 py-4 font-bold text-white transition-all hover:bg-blue-800">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
