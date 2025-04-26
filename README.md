# Shaanjo-health-sys

A minimal health information system.

---

<!-- TODO add features as soon as implemented -->
## Features
- Standalone  REST API that implements:
  1. OpenAPI specificattion
  2. client creation, search, deletion and updating
  3. Health prgram creation, update, search and deletion
  4. route validation for parameters, form data and responses with [valibot](https://valibot.dev/)

- standalone web app with:
  + Dashboard
  + Client creation and deletion
  + Programs view and crud operations

## Screenshots
Login screen

![Screenshot_20250426_195123](https://github.com/user-attachments/assets/486ca5ba-f310-4b95-8170-8cdc7a0b03ef)

Dashboard

![Screenshot_20250426_202508](https://github.com/user-attachments/assets/dac2e62f-84df-45ba-b084-f19dc89a452f)

Client Form

![Screenshot_20250426_202551](https://github.com/user-attachments/assets/ceb9ab1c-f8f3-4254-8e9d-ad83cdf5261b)

Health Program Form

![Screenshot_20250426_202617](https://github.com/user-attachments/assets/f4c42d4c-3c90-49c3-aac3-5b7e0f70c00c)



## Development
### Technologies used
    - [**Qwik**](https://qwik.dev) - Fast Resumable frontend framework
    - [**TailwindCSS**](https://tailwindcss.com) - Utility based css styling
    - [**Hono**](https://hono.dev) web framework for creatigng APIs
    - [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Serverless runtime.
    - [**Cloudflare D1**](https://developers.cloudflare.com/d1/) - serverfless SQL database

### Tools
- [Bun](https://bun.sh) - package manager
- [Vite](https://vite.dev) - Build tool for the web app
- [Wrangler](https://developers.cloudflare.com/workers/wrangler) - Cloudflare's tool for working with and deploying worker scripts - Cloudflare's tool for working with and deploying worker script

---

## Development

#### Repository Structure

 The repo is a monorepo using `bun workspaces`.
 It has the folllowing directory structure:

 ```sh
├── api                             # The API
│   ├── cf-migrate.ts # utility script to help make database migration s easier
│   ├── README.md
│   ├── src
|   ... # more config file
│   └── wrangler.jsonc
├── docs
│   └── UserManual.md # intended to document how to use the system
├── LICENCE
├── package.json
├── README.md # The file youre reading right now
└── web-app                     # the web app
    ├── adapters
    ├── package.json
    ├── public
    ├── qwik.env.d.ts
    ├── README.md
    ├── src # the app source code
    ... # More config files
    └── wrangler.jsonc # wrangler config file
 ```


### Developing locally

1. Fork and clone the repo
2. `cd` into the cloned repo
3. Install dependencies
  ```sh
  bun i # I used bun as my package manager. You can use pnpm
  ```
4. `cd` into `api/` directory Start the API Server by running:
  ```sh
  bun dev
  ```
5. `cd` into `web-app/` directory Start web app by running:
  ```sh
  bun start
  ```
6. Make changes and the servers will hot reload

### To see a production build:
run:
```sh
bun run build
```
then
 ```sh
 wrangler dev
 ```
