#!/usr/bin/env bun

import { $ } from "bun";
import { parseArgs } from "node:util";

// Parse command-line arguments
const { values: args } = parseArgs({
  options: {
    local: {
      type: "boolean",
      short: "l",
    },
    remote: {
      type: "boolean",
      short: "r",
    },
  },
  allowPositionals: true,
});

// Validate flags
if (args.local && args.remote) {
  console.error("Error: Cannot use both --local and --remote flags simultaneously.");
  process.exit(1);
}

if (!args.local && !args.remote) {
  console.error("Error: Either --local or --remote flag must be provided.");
  process.exit(1);
}

// Read DB_NAME environment variable
const dbName = process.env.CLOUDFLARE_D1_DATABASE_NAME;
if (!dbName) {
  console.error("Error: CLOUDFLARE_D1_DATABASE_NAME environment variable is not set.");
  process.exit(1);
}

// Determine the flag to use
const flag = args.local ? "--local" : "--remote";

// Execute the command using Bun Shell
try {
  await $`bunx wrangler d1 migrations apply ${dbName} ${flag}`;
  console.log("Migrations applied successfully.");
} catch (err) {
  console.error(`Error: Command failed with exit code ${err.exitCode}`);
  console.error(err.stdout?.toString() || "");
  console.error(err.stderr?.toString() || "");
  process.exit(1);
}

