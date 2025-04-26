import { component$, useSignal } from "@builder.io/qwik";
import {
  Link,
  type DocumentHead,
} from "@builder.io/qwik-city";

export default component$(() => {
  const enableLoginSig = useSignal(false);
  return (
    <div class="flex min-h-screen items-center justify-center transition-all">
      <div class="mx-auto max-w-[720px]">
        <div class="mx-auto mb-4 block max-w-[360px] border-b border-slate-300 pb-2">
          <span class="block w-full px-4 py-2 text-center text-sm text-red-700 transition-all">
            For demo purposes use <b>1234</b> as password.
          </span>
        </div>
        <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border text-white shadow-lg shadow-gray-900/20">
            <h3 class="block font-sans text-3xl leading-snug font-semibold tracking-normal text-white antialiased">
              Welcome Back!
            </h3>
          </div>
          <div class="flex flex-col gap-4 p-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                onInput$={(_, inputEle) => {
                  enableLoginSig.value =
                    inputEle.value === "1234" ? true : false;
                }}
                class="peer border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0"
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full truncate !overflow-visible text-[11px] leading-tight font-normal text-gray-500 transition-all select-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-disabled:text-transparent before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-disabled:before:border-transparent after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:after:border-transparent">
                Enter Password
              </label>
            </div>
            <div class="-ml-2.5">
              <div class="inline-flex items-center">
                <label
                  for="checkbox"
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer border-blue-gray-200 before:bg-blue-gray-500 relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px cursor-pointer font-light text-gray-700 select-none"
                  for="checkbox"
                >
                  Keep me logged in
                </label>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <Link
              href="/dashboard"
              style={{
                height: enableLoginSig.value ? "auto" : "0px",
                opacity: enableLoginSig.value ? 1 : 0,
              }}
              class="block w-full rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold text-white uppercase shadow-md shadow-gray-900/10 transition-all select-none hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Health Information System",
  meta: [
    {
      name: "description",
      content: "Qwik app for managing health information",
    },
  ],
};
