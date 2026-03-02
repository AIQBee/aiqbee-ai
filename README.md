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

## Available Tools (25)

### Brain Discovery & Management

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_list_brains` | List all brains you have access to | Read |
| `aiqbee_get_brain_info` | Get brain metadata and statistics | Read |
| `aiqbee_edit_is_allowed` | Check if MCP editing is enabled for a brain | Read |
| `aiqbee_list_brain_templates` | List available brain templates for brain creation | Read |
| `aiqbee_create_brain` | Create a new brain (optionally from a template) | — |
| `aiqbee_update_brain` | Update brain name, description, or settings | Owner |
| `aiqbee_delete_brain` | Delete a brain permanently | Owner |

### Search & Retrieval

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_search` | Search neurons in your knowledge graph | Read |
| `aiqbee_fetch` | Get full neuron content and metadata | Read |
| `aiqbee_list_neurons` | Paginated neuron listing with filtering | Read |

### Neuron Types

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_list_neuron_types` | List all neuron types in a brain | Read |
| `aiqbee_add_neuron_type` | Create a new neuron type | Owner |
| `aiqbee_edit_neuron_type` | Update a neuron type's properties | Owner |
| `aiqbee_delete_neuron_type` | Delete a neuron type (with optional neuron reassignment) | Owner |

### Neurons

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_create_neuron` | Create a new neuron in your brain | ReadWrite |
| `aiqbee_update_neuron` | Update an existing neuron | ReadWrite |
| `aiqbee_delete_neuron` | Delete a neuron | ReadWrite |

### Relationships

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_get_relationships` | Get incoming/outgoing relationships for a neuron | Read |
| `aiqbee_create_relationship` | Create a link between two neurons | ReadWrite |
| `aiqbee_update_relationship` | Update an existing relationship | ReadWrite |
| `aiqbee_delete_relationship` | Remove a relationship | ReadWrite |

### Access Control

| Tool | Description | Permission |
|------|-------------|------------|
| `aiqbee_list_users` | List users with access to a brain | Read |
| `aiqbee_grant_access` | Grant a user access to a brain | Owner |
| `aiqbee_revoke_access` | Revoke a user's access to a brain | Owner |
| `aiqbee_batch_update_access` | Replace all access permissions in one operation | Owner |

---

## Example Prompts

Once connected, try asking your AI assistant:

- *"List all my brains"*
- *"Show me the available brain templates"*
- *"Create a new brain called 'Cloud Architecture' using the Enterprise Architecture template"*
- *"Search my brain for anything related to cloud migration"*
- *"Show me all the architecture decisions we've made"*
- *"Create a new neuron about our API gateway strategy"*
- *"Link the microservices neuron to the deployment pipeline neuron"*
- *"What are the relationships for the data platform neuron?"*
- *"Who has access to this brain? Grant read access to alice@example.com"*
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
