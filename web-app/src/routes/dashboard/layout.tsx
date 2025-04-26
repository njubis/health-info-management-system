import { component$, useOnDocument, $, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="h-screen">
      <header
        class="top-0 h-14 w-full bg-gray-100 shadow"
        style="z-index: 99999;"
      >
        <div class="flex h-14 items-center justify-between px-10">
          <div class="flex items-center justify-between gap-x-14">
            <div class="w-fit">
              <h2 class="text-md font-bold text-3xl">Shaanjo</h2>
              <p class="text-[12px] text-gray-400">Health information management system</p>
            </div>
            <a
              id="toggle-button"
              class="hidden rounded-full bg-gray-200 transition-all duration-500 ease-in-out lg:block"
              href="#"
            >
              <i class="fa-solid fa-arrow-left p-3"></i>
            </a>
          </div>
          <ul class="flex items-center gap-3">
            <li class="">
              <div class="w-fit">
                <h2 class="text-md font-bold">Dr. Oliver</h2>
                <p class="text-[12px] text-gray-400">Medical officer</p>
              </div>
            </li>
            <li class="">
              <img
                class="inline-block h-8 w-8 cursor-pointer rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </li>
          </ul>
        </div>
      </header>
      <main class="flex w-full">
        <aside
          id="sidebar"
          class="h-[calc(100vh-120px)] w-[60px] overflow-x-hidden whitespace-nowrap shadow transition-all duration-500 ease-in-out lg:w-[240px]"
        >
          <div class="flex h-full flex-col justify-between">
            <ul class="mt-2 flex flex-col gap-1">
              <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <a class="flex w-full items-center py-3" href="/dashboard">
                  <i class="fa-solid fa-house px-5 text-center"></i>
                  <span class="pl-1 whitespace-nowrap">Dashboard</span>
                </a>
              </li>

              <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <a
                  class="flex w-full items-center py-3"
                  href="/dashboard/programs"
                >
                  <i class="fa-solid fa-chart-line px-5 text-center"></i>
                  <span class="pl-1 whitespace-nowrap">Programs</span>
                </a>
              </li>

              <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <a
                  class="flex w-full items-center py-3"
                  href="/dashboard/clients"
                >
                  <i class="fa-solid fa-users px-5 text-center"></i>
                  <span class="pl-1 whitespace-nowrap">Clients</span>
                </a>
              </li>
            </ul>

            <ul class="mt-2 flex flex-col gap-1">
              <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <a class="flex w-full items-center py-3" href="#">
                  <i class="fa-solid fa-right-from-bracket px-5 text-center"></i>
                  <span class="pl-1">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <Slot />
      </main>
    </main>
  );
});
