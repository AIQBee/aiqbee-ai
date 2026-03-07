# @aiqbee/mcp

Thin stdio wrapper for the [Aiqbee Brain](https://github.com/AIQBee/aiqbee-ai) remote MCP server. Bridges stdio-only MCP clients to `https://mcp.aiqbee.com/mcp` using [mcp-remote](https://www.npmjs.com/package/mcp-remote).

## Usage

```json
{
  "mcpServers": {
    "aiqbee": {
      "command": "npx",
      "args": ["-y", "@aiqbee/mcp"]
    }
  }
}
```

If your MCP client supports HTTP transport natively (Claude Desktop, Cursor, VS Code, Gemini CLI), you don't need this package — just use the URL directly:

```json
{
  "mcpServers": {
    "aiqbee": {
      "url": "https://mcp.aiqbee.com/mcp"
    }
  }
}
```

## What is Aiqbee?

[Aiqbee](https://aiqbee.com) is a web-based architecture, portfolio, and digital strategy management platform. This MCP server provides 25 tools for managing knowledge graphs (brains, neurons, relationships, neuron types, and access control) through natural conversation with AI assistants.

## Authentication

On first connection, your MCP client will open a browser window for OAuth 2.0 sign-in. No API keys needed.

## Links

- **Platform**: https://app.aiqbee.com
- **Documentation**: https://app.aiqbee.com/help
- **Privacy & Trust**: https://app.aiqbee.com/trust
- **GitHub**: https://github.com/AIQBee/aiqbee-ai

## License

MIT
