# Personal Portfolio & CV (Site: junhub.dev)
[![Deployment Status](https://github.com/choy2023/JUNCV/actions/workflows/deploy.yml/badge.svg)](https://github.com/choy2023/JUNCV/actions)

## Architecture Overview
This project goes beyond simple static website hosting. It establishes a Commercial-grade deployment pipeline based on a Home-Server, strictly applying the first principles of **security, zero-downtime communication, and Immutable Infrastructure**.

- **Domain:** `junhub.dev` (HSTS Preloaded, 100% HTTPS Enforced)
- **Host Server:** Ubuntu 24.04 LTS (Local Home Server)
- **Network Security:** Cloudflare Zero Trust (Tunnels) - Complete elimination of Inbound port forwarding and Origin IP concealment.

## Tech Stack
- **Frontend:** Vite, React, JavaScript
- **Infrastructure & Deployment:** Docker, Nginx, mDNS (Avahi), Cloudflared

## Infrastructure Pipeline (How it works)

### 1. Local Network Resolution (mDNS)
- Implemented the `avahi-daemon` to overcome the limitations of a dynamic IP (DHCP) environment.
- Built an environment where SSH and internal services (e.g., Portainer, PostgreSQL) can be stably accessed via the `zenbook-server.local` hostname, ensuring seamless connection even if the host machine's IP changes within the local network.

### 2. Containerized Deployment (Docker Multi-stage Build)
- Perfectly packaged and isolated the frontend source code using Docker, preventing any direct dependency on the Host OS.
- **Stage 1 (Builder):** Installs dependencies and builds static files (`dist`) within the `node:20-alpine` environment.
- **Stage 2 (Production):** Discards the heavy Node environment. The built static files are served on an ultra-lightweight `nginx:alpine` web server, maximizing both security and resource efficiency.

### 3. Zero Trust Security & Routing (Cloudflare Tunnels)
- Zero Inbound ports are opened from the external internet directly to the home server.
- The `cloudflared` daemon creates an Outbound-only tunnel from the server to the Cloudflare Edge network for secure connectivity.
- External traffic entering the `junhub.dev` domain is automatically SSL/TLS (HTTPS) encrypted at the Cloudflare Edge, then safely routed through the tunnel to `localhost:8080` (Nginx container) on the internal network.
- Strictly adhered to the principle of internal network isolation; core infrastructure management tools like Portainer (9000) and DB ports are completely hidden from the Public network.

~~## CI/CD & Maintenance~~ <br/>
When source code changes occur, the internal state of the running container is never manually modified. Instead, the deployment strictly follows the principles of **Immutable Infrastructure**:

1. **Local Development:** Modify code in the local environment and `Push` to the GitHub Repository.
2. **Code Synchronization:** `Pull` the latest code on the Host Server (Ubuntu).
3. **Image Rebuild:** Generate a fresh Nginx image via `docker build`.
4. **Container Replacement:** Forcibly destroy (`rm -f`) the outdated container and spin up (`run -d`) the new container to complete the deployment without leaving legacy artifacts.

## CI/CD Pipeline & Automation
The deployment process has been fully automated using **GitHub Actions**, strictly adhering to the principles of **Immutable Infrastructure** and **Zero Trust Security**. Manual intervention on the host server is completely eliminated.

### Automated Deployment Workflow:
1. **Trigger:** Code modifications are pushed to the `main` branch.
2. **CI/CD Action:** GitHub Actions automatically triggers the deployment workflow.
3. **Secure Runner Access:** *(if used Self-hosted runner)* The workflow executes via a **GitHub Self-Hosted Runner** installed on the internal Ubuntu server, pulling the latest code without opening any inbound firewall ports from the outside internet.
   *(if used SSH/Cloudflare tunnel)* GitHub Actions securely connects to the internal server via Cloudflare Tunnels (Zero Trust), bypassing the need for public SSH ports.
4. **Immutable Build & Swap:** - A new Docker image (Nginx + static build files) is compiled on the fly.
   - The outdated container is forcefully terminated and seamlessly replaced with the newly built container.
   - Zero legacy artifacts are left behind, ensuring the server state remains completely stateless and predictable.
