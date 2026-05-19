# PM2 Deployment

This project is configured to run with [PM2](https://pm2.keymetrics.io/), a production process manager for Node.js.

## Install PM2

```bash
pnpm add -g pm2
# or
npm install -g pm2
```

> **Note**: All `pnpm` PM2 commands require the `run` prefix (`pnpm run pm2:start`). This avoids conflicts with pnpm's built-in commands like `deploy`.

## First-Time Setup

```bash
pnpm approve-builds            # Approve sharp + unrs-resolver build scripts
pnpm install                   # Rebuild native modules
pnpm build                     # Build Next.js
pnpm run pm2:start             # Start with PM2
pm2 save                       # Persist process list
```

## Quick Start

```bash
pnpm build                    # Build the Next.js app
pnpm run release              # Build + start/reload via PM2
```

Or step by step:

```bash
pnpm build                    # Build
pnpm run pm2:start            # Start with PM2
```

## PM2 Commands

| Command               | Description                    |
|-----------------------|--------------------------------|
| `pnpm run pm2:start`  | Start the app                  |
| `pnpm run pm2:stop`   | Stop the app                   |
| `pnpm run pm2:restart`| Restart the app                |
| `pnpm run pm2:reload` | Zero-downtime reload           |
| `pnpm run pm2:delete` | Remove from PM2                |
| `pnpm run pm2:status` | Show PM2 process status        |
| `pnpm run pm2:logs`   | Tail logs                      |
| `pnpm run release`    | Build + reload (or start)      |

## Manual PM2 Commands

```bash
pm2 start ecosystem.config.cjs
pm2 stop personal-portfolio
pm2 restart personal-portfolio
pm2 logs personal-portfolio
pm2 monit                      # Real-time dashboard
```

## Configuration (`ecosystem.config.cjs`)

- **Process name**: `personal-portfolio`
- **Port**: `3000`
- **Memory limit**: 512 MB (auto-restart)
- **Instances**: 1 (fork mode)
- **Auto-restart**: enabled (max 10 restarts, 5s delay)

## Run on System Boot

```bash
pm2 startup                   # Generate startup script
pm2 save                      # Save current process list
```

## Updating

```bash
git pull
pnpm install
pnpm build
pnpm run pm2:reload            # Zero-downtime reload
```

## Logs

```bash
pm2 logs personal-portfolio        # Stream logs
pm2 logs personal-portfolio --lines 100  # Last 100 lines
```
