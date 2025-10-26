# System Architecture

## Overview
DevOps Simulator follows a microservices architecture designed for high availability and scalability.

## Components

### 1. Application Server
- **Technology**: Node.js + Express
- **Port**: 8080 (production), 3000 (development)
- **Scaling**: Horizontal auto-scaling enabled (production), manual single instance (development)
- **Debug**: Chrome DevTools on port 9229 (development)

### 2. Database Layer
- **Database**: PostgreSQL 14
- **Configuration**: Master-slave replication (production), single instance (development)
- **Backup**: Daily automated (production), manual only (development)
- **Seeding**: Auto-seed with test data on startup (development)

### 3. Monitoring System
- **Tool**: Prometheus + Grafana (production), console logging + optional Prometheus (development)
- **Metrics**: CPU, Memory, Disk, Network
- **Alerts**: Email notifications (production), console warnings (development)
- **Dashboard**: In-development web dashboard (development)

### 4. Container Orchestration (development only)
- **Tool**: Docker Compose
- **Services**: App, Database, Redis cache
- **Volume Mounts**: Code directory for hot reload

### 5. Authentication System (development beta)
- **Method**: OAuth2 + JWT
- **Providers**: Google, GitHub (testing)
- **Sessions**: Redis-based session storage

## Deployment Strategy
- **Production**: Rolling updates, zero-downtime, automated rollback
- **Development**: Docker Compose hot reload, rollback via Git checkout

## Development Workflow
1. Make code changes
2. Auto-reload triggers rebuild
3. Run unit tests
4. Check console logs
5. Commit when ready

## Security
- **Production**: SSL/TLS, DB connection encryption, regular audits
- **Development**: SSL/TLS disabled, plaintext DB credentials, CORS enabled, debug endpoints exposed

## Experimental Features (development only)
⚠️ **Warning**: The following features are experimental:
- Multi-cloud deployment
- AI-powered log analysis
- Automatic rollback on anomaly detection
