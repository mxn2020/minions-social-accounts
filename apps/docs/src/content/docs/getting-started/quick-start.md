---
title: Quick Start
description: Get up and running with Minions Social-accounts in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-social-accounts/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_social_accounts import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
social-accounts info
```
