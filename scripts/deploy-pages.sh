#!/usr/bin/env bash
# 本地建置 GitHub Pages（project site）並提示推送 dist 方式
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
npm run build:pages
echo ""
echo "Build output: dist/"
echo "GitHub Pages URL (after deploy): https://dreamone09.github.io/13gabee/"
echo "CI 會在 main 合併後由 .github/workflows/deploy-pages.yml 自動部署。"
