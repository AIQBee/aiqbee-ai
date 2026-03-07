#!/usr/bin/env node
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mcpRemote = join(__dirname, "node_modules", ".bin", "mcp-remote");

const child = spawn(mcpRemote, ["https://mcp.aiqbee.com/mcp", ...process.argv.slice(2)], {
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
