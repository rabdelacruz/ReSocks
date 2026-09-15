---
title: Custom Relay Server Setup Guide
description: Deploy your own resocksrv relay server with Docker for a fully self-hosted SOCKS5 relay
order: 7
category: Usage
icon: bi-hdd-network-fill
---

# Custom Relay Server Setup Guide

ReSocks supports using **your own self-deployed relay server** for SOCKS5 relaying, instead of relying on the official fixed nodes. By deploying `resocksrv`, you get full control over your relay path with greater security and flexibility.

::alert{type="info"}
**Note**: Custom relay servers are currently only available on the **Annual Plan** and **3-Year Plan**. Standard plans (Monthly/6-Month) do not support this feature.
::

## What is resocksrv?

`resocksrv` is the official ReSocks relay server program, distributed as a Docker image. You deploy it on your own server (VPS) and disguise the traffic over TLS/HTTPS, achieving a secure and covert secondary-proxy relay.

## Prerequisites

- A publicly accessible server (VPS) with Docker and Docker Compose installed
- A domain pointed to that server, with an HTTPS certificate configured (to work with the Nginx reverse proxy)
- Basic experience with the Linux command line and Nginx configuration

---

## 1. Download the Package

Download the whole `resocksrv` directory (including the Dockerfile, docker-compose.yml, etc.):

```
https://resocks.app/down/resocksrv.zip
```

If you're operating over an SSH login to your server, you can run the following commands directly on the server to download, extract, and enter the directory:

```sh
wget https://resocks.app/down/resocksrv.zip
unzip resocksrv.zip
cd resocksrv
```

---

## 2. Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `OVER_TLS_PATH` | over_tls path (`over_tls_settings.path`) | **Required, no default** |
| `LISTEN_HOST` | Listen address inside the container | `0.0.0.0` |
| `LISTEN_PORT` | Listen port | `8388` |
| `UDP` | Enable UDP relay (`true`/`false`) | `true` |
| `IDLE_TIMEOUT` | Idle connection timeout, in seconds | `300` |
| `CONNECT_TIMEOUT_MS` | Connect timeout, in milliseconds (converted to seconds in the config) | `6000` |
| `MONITOR_INTERVAL` | Monitoring poll interval, in seconds | `30` |

::alert{type="warning"}
`OVER_TLS_PATH` **must** be set explicitly. If it is missing or empty, `entrypoint.sh` will print an error and exit immediately.
::

---

## 3. Build the Image

```sh
docker build -t resocksrv:latest .
```

---

## 4. Run with docker run

### Option 1: Bind only to 127.0.0.1 (recommended, for use behind a host-level Nginx reverse proxy)

The container's internal `LISTEN_HOST` stays `0.0.0.0` (required for it to listen at all); restricting external access is done via the `-p` host-bind address:

```sh
docker run -d \
    --name resocksrv \
    -e LISTEN_PORT=8388 \
    -e OVER_TLS_PATH=/your-secret-path/ \
    -p 127.0.0.1:8388:8388 \
    resocksrv:latest
```

With this setup, the port is only reachable from the host itself. Nginx can listen on the public port and reverse-proxy to `127.0.0.1:8388`, using the same path as `OVER_TLS_PATH` for its `location` block.

### Option 2: Expose on all host interfaces

```sh
docker run -d \
    --name resocksrv \
    -e LISTEN_PORT=8388 \
    -e OVER_TLS_PATH=/your-secret-path/ \
    -p 8388:8388 \
    resocksrv:latest
```

---

## 5. Or run with docker-compose

The `docker-compose.yml` in the package directory builds the image locally (`build: context: .`) and runs it bound to `127.0.0.1:8388`. Edit `OVER_TLS_PATH` (and any other variables you need) before starting:

```yaml
services:
  resocksrv:
    build:
      context: .
      args:
        VERSION: 1.0.0
    container_name: resocksrv
    restart: unless-stopped
    environment:
      LISTEN_HOST: 0.0.0.0
      LISTEN_PORT: 8388
      UDP: "true"
      IDLE_TIMEOUT: 300
      CONNECT_TIMEOUT_MS: 6000
      OVER_TLS_PATH: /your-secret-path/   # Required; must match the path configured in the Nginx reverse proxy.
      MONITOR_INTERVAL: 30
    ports:
      - "127.0.0.1:8388:8388/tcp"
```

Then build and start:

```sh
docker compose up -d --build
```

---

## 6. Configure Nginx (HTTPS Reverse Proxy)

The `over_tls` path only makes sense **inside an HTTPS `server` block** — it relies on TLS to disguise traffic. Add the following `location` (matching `OVER_TLS_PATH`) to your existing HTTPS `server` block in Nginx:

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location /your-secret-path/ {
        proxy_redirect off;
        proxy_pass http://127.0.0.1:8388;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
    }

    # All other paths can serve your real website, or a fake/decoy site
    location / {
        root /var/www/your-site;
    }
}
```

::alert{type="warning"}
- `/your-secret-path/` must exactly match `OVER_TLS_PATH`.
- This `location` block must live under a `listen 443 ssl` server — plain HTTP (port 80) will not work correctly with `over_tls`.
- Any other path (`location /`) can point to your normal business site or a fake/decoy site, so the domain looks like an ordinary website to anyone probing it.
::

---

## 7. Managing the Container

```sh
docker logs resocksrv              # view logs
docker exec resocksrv /monitor.sh  # manually trigger a health check
docker stop resocksrv              # stop
docker rm resocksrv                # remove (needed before reusing the same --name)
```

Or, if started with Compose:

```sh
docker compose down
```

---

## 8. Using It in the ReSocks Client

Once deployed, go back to the ReSocks client:

1. Go to **Control Panel → Server Selection → Custom Relay Servers**
2. Add the domain/address you deployed, along with the configured `OVER_TLS_PATH`
3. Save, select the relay server, and click **Connect**

::alert{type="success"}
Once your custom relay server is configured, all your traffic will be relayed through the server you deployed yourself — a relay path fully under your control, with no dependency on the official fixed nodes.
::
