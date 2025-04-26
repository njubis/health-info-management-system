import { component$, Slot, useOnDocument, $ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestEventLoader, RequestHandler } from "@builder.io/qwik-city";
import type { PlatformCloudflarePages } from "@builder.io/qwik-city/middleware/cloudflare-pages";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

/** route loaders must be declared or reexported from layout.tsx or index.tsx of a route using them */

export const useHealthProgramsData = routeLoader$(async(e: RequestEventLoader<PlatformCloudflarePages>)=>{
  const env = e.platform.env as Env;
  const res = await env.API.getAllPrograms();
  return res.data
})

export const useClientsData = routeLoader$(async(e: RequestEventLoader<PlatformCloudflarePages>)=>{
  const env = e.platform.env as Env;
  const res = await env.API.getAllClients() // in future we will limit this for pagination
  return res.data
})
export default component$(() => {
  const c = useClientsData();
  const p = useHealthProgramsData();
  useOnDocument("DOMContentLoaded", $(()=>{
    console.log(c.value)
    console.log(p.value)
  }))
  return <Slot />;
});
