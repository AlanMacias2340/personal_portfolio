# Environment Variables

All secrets are stored in `.env.local` (git-ignored). Never commit this file.

## Required Variables

| Variable                        | Description                           | Example                             |
|---------------------------------|---------------------------------------|-------------------------------------|
| `GMAIL_USER`                    | Gmail address for sending emails      | `email`          |
| `GMAIL_APP_PASSWORD`            | Gmail App Password (16 chars)         | `xxxx xxxx xxxx xxxx`               |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`| Cloudflare Turnstile site key         | `1x00000000000000000000AA`          |
| `TURNSTILE_SECRET_KEY`          | Cloudflare Turnstile secret key       | `1x0000000000000000000000000000000` |

## Getting the Keys

### Gmail App Password

1. Enable [2-Step Verification](https://myaccount.google.com/security)
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" → "Other" → name it "Portfolio"
4. Copy the 16-character password into `.env.local`

### Cloudflare Turnstile

1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Click "Add site" → enter your domain
3. Copy **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
4. Copy **Secret Key** → `TURNSTILE_SECRET_KEY`

## Example `.env.local`

```env
GMAIL_USER=email
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000
```
