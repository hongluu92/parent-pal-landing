#!/usr/bin/env bash
# Deploy landing page: build static → scp to server → done
# Usage: ./deploy.sh [ssh-host] (default: parentpal)
set -euo pipefail

SSH_HOST="${1:-parentpal}"
REMOTE_DIR="/var/www/landingpage-prod"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$SCRIPT_DIR"

echo "==> Installing dependencies..."
npm ci --silent

echo "==> Building static export..."
npm run build

echo "==> Deploying to $SSH_HOST:$REMOTE_DIR..."
ssh "$SSH_HOST" "sudo rm -rf ${REMOTE_DIR}/* && sudo mkdir -p ${REMOTE_DIR}"
scp -r out/* "$SSH_HOST:/tmp/landingpage-deploy/"
ssh "$SSH_HOST" "sudo mv /tmp/landingpage-deploy/* ${REMOTE_DIR}/ && rm -rf /tmp/landingpage-deploy"

echo "==> Done! Landing page deployed to $SSH_HOST:$REMOTE_DIR"
