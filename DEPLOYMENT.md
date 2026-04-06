# Can Do Fence & Deck — VPS Deployment Guide

## Server Details

| | |
|---|---|
| **Provider** | Contabo VPS |
| **IP Address** | 209.126.87.185 |
| **OS** | Ubuntu 24.04 LTS |
| **User** | root |
| **Site folder** | `/var/www/Candofenceanddeck` |

---

## SSH Into the Server

Open PowerShell or any terminal and run:

```bash
ssh root@209.126.87.185
```

Enter your Contabo root password when prompted.

---

## Installed Software

| Software | Version | Purpose |
|---|---|---|
| Node.js | 20.x | Run Next.js + Express |
| npm | 10.x | Package manager |
| PM2 | latest | Keep apps running 24/7 |
| Nginx | latest | Serve site on port 80 |
| Git | system | Pull updates from GitHub |

---

## Running Apps (PM2)

| PM2 Name | App | Port |
|---|---|---|
| `cando-frontend` | Next.js frontend | 3000 |
| `cando-backend` | Express backend | 4000 |

### Useful PM2 Commands

```bash
pm2 list                        # See all running apps
pm2 logs cando-frontend         # Live frontend logs
pm2 logs cando-backend          # Live backend logs
pm2 restart cando-frontend      # Restart frontend
pm2 restart cando-backend       # Restart backend
pm2 restart all                 # Restart everything
```

---

## GitHub Repository

**Repo:** https://github.com/BFMNINJA/Candofenceanddeck

The VPS pulls updates from this repo. Always push your local changes to GitHub first, then pull on the server.

---

## How to Update the Website

### Step 1 — Make your changes locally (on your PC)

Edit files in `D:\Work\Candofenceanddeck\frontend\`

### Step 2 — Push to GitHub (from local PowerShell)

```bash
cd D:\Work\Candofenceanddeck
git add .
git commit -m "describe your change here"
git push
```

### Step 3 — SSH into the VPS

```bash
ssh root@209.126.87.185
```

### Step 4 — Pull latest code

```bash
cd /var/www/Candofenceanddeck
git pull
```

### Step 5 — Rebuild the frontend

```bash
cd frontend
npm run build
```

This takes 1-2 minutes. Wait for it to finish.

### Step 6 — Restart the frontend

```bash
pm2 restart cando-frontend
```

Done. Refresh the browser to see your changes.

---

## How to Update Backend Only

If you only changed backend code (no frontend changes):

```bash
cd /var/www/Candofenceanddeck
git pull
cd backend
npm run build
pm2 restart cando-backend
```

---

## Nginx Config Location

The Nginx config file for this site is at:

```
/etc/nginx/sites-available/candofenceanddeck
```

To edit it:
```bash
nano /etc/nginx/sites-available/candofenceanddeck
```

After any changes, always test and reload:
```bash
nginx -t
systemctl reload nginx
```

---

## Replacing Images or Videos

Public assets (logo, hero video, photos) are in:

```
/var/www/Candofenceanddeck/frontend/public/
```

**Important:** filenames are case-sensitive on Linux.
- `logo.png` works
- `Logo.png` will NOT work

To upload a file from your PC to the server, run this in **local PowerShell**:

```bash
scp "D:\Work\Candofenceanddeck\frontend\public\yourfile.jpg" root@209.126.87.185:/var/www/Candofenceanddeck/frontend/public/
```

After uploading a new image/video, rebuild and restart:
```bash
cd /var/www/Candofenceanddeck/frontend
npm run build
pm2 restart cando-frontend
```

---

## Adding SSL (HTTPS) — When Domain is Ready

Once `candofenceanddeck.com` DNS A record is pointed to `209.126.87.185`:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d candofenceanddeck.com -d www.candofenceanddeck.com
```

Certbot will automatically configure Nginx and the site will be accessible at `https://candofenceanddeck.com`.

SSL certificate auto-renews every 90 days — no manual action needed.

---

## If Something Goes Wrong

**Site not loading:**
```bash
pm2 list                        # Check if apps are online
pm2 restart all                 # Restart both apps
systemctl status nginx          # Check if Nginx is running
systemctl restart nginx         # Restart Nginx
```

**Check for errors:**
```bash
pm2 logs cando-frontend --lines 50
pm2 logs cando-backend --lines 50
```

**Full reboot recovery** (if server was rebooted):
```bash
pm2 resurrect                   # Restore saved PM2 process list
```