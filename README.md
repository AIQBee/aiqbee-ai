# Aiqbee AI

Connect AI assistants to your [Aiqbee](https://aiqbee.com) brains via the [Model Context Protocol](https://modelcontextprotocol.io/).

Search, create, and link knowledge across your architecture, portfolio, and digital strategy - all through natural conversation with your AI assistant.

---

## Supported Clients

| AI Tool | Integration | Setup |
|---------|-------------|-------|
| **Claude Code** | Plugin | `claude plugin install AIQBee/aiqbee-ai` |
| **Claude Desktop** | MCP Config | [JSON config below](#claude-desktop) |
| **Cursor** | MCP Config | [JSON config below](#cursor) |
| **VS Code / Copilot** | MCP Config | [JSON config below](#vs-code) |
| **Gemini CLI** | Extension | `gemini extensions install https://github.com/AIQBee/aiqbee-ai` |
| **ChatGPT** | MCP Config | [JSON config below](#other-mcp-clients) |
| **Windsurf** | MCP Config | [JSON config below](#other-mcp-clients) |

---

## Quick Start

### Claude Code

```bash
claude plugin install AIQBee/aiqbee-ai
```

Restart Claude Code after installation.

### Gemini CLI

```bash
gemini extensions install https://github.com/AIQBee/aiqbee-ai
```

Restart Gemini CLI and authenticate when prompted.

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "aiqbee": {
      "url": "https://mcp.aiqbee.com/mcp"
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "aiqbee": {
      "url": "https://mcp.aiqbee.com/mcp"
    }
  }
}
```

### VS Code

Add to your `settings.json`:

```json
{
  "mcp": {
    "servers": {
      "aiqbee": {
        "type": "sse",
        "url": "https://mcp.aiqbee.com/mcp"
      }
    }
  }
}
```

### Other MCP Clients

For any MCP-compatible client, point it at:

```
https://mcp.aiqbee.com/mcp
```

---

## Authentication

Aiqbee uses **OAuth 2.0** with secure authorization. When you first connect, your MCP client will prompt you to sign in. The server supports:

- **Public clients** (Claude Desktop, Cursor): Standard PKCE flow
- **Confidential clients** (ChatGPT): Server-side PKCE with callback

No API keys needed - just sign in with your existing Aiqbee account.

---

## Available Tools

### Read

| Tool | Description |
|------|-------------|
| `aiqbee_search` | Search neurons in your knowledge graph |
| `aiqbee_fetch` | Get full neuron content, relationships, and files |
| `aiqbee_get_brain_info` | Get brain metadata and statistics |
| `aiqbee_get_neuron_types` | List all neuron types with counts |
| `aiqbee_list_neurons` | Paginated neuron listing with filtering |
| `aiqbee_get_relationships` | Get incoming/outgoing relationships for a neuron |

### Write

| Tool | Description |
|------|-------------|
| `aiqbee_create_neuron` | Create a new neuron in your brain |
| `aiqbee_update_neuron` | Update an existing neuron |
| `aiqbee_delete_neuron` | Delete a neuron |
| `aiqbee_create_relationship` | Create a link between two neurons |
| `aiqbee_update_relationship` | Update an existing relationship |
| `aiqbee_delete_relationship` | Remove a relationship |

---

## Example Prompts

Once connected, try asking your AI assistant:

- *"Search my brain for anything related to cloud migration"*
- *"Show me all the architecture decisions we've made"*
- *"Create a new neuron about our API gateway strategy"*
- *"Link the microservices neuron to the deployment pipeline neuron"*
- *"What are the relationships for the data platform neuron?"*
- *"Summarize the key concepts in my digital strategy brain"*

---

## What is Aiqbee?

[Aiqbee](https://aiqbee.com) is a web-based architecture, portfolio, and digital strategy management platform.

- **Knowledge Graphs** - Organize ideas as "neurons" connected by "synapses"
- **Architecture Management** - Document and manage enterprise architecture
- **Portfolio Management** - Track products, projects, and digital assets
- **AI-Powered Search** - Find anything across your knowledge base
- **Collaboration** - Team workspaces with role-based access
- **Microsoft 365 Integration** - Works with your existing tools

---

## Links

- **Platform**: https://app.aiqbee.com
- **Documentation**: https://app.aiqbee.com/help
- **MCP Server**: https://mcp.aiqbee.com/mcp

---

## License

MIT License - see [LICENSE](LICENSE) for details.
