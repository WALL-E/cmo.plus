#!/usr/bin/env bash
# 重新编译并启动生产服务：./restart.sh [端口]，默认 3000
set -euo pipefail

cd "$(dirname "$0")"

PORT="${1:-${PORT:-3000}}"
PID_FILE="$PWD/.restart.pid"
LOG_DIR="$PWD/logs"
LOG_FILE="$LOG_DIR/app.log"

mkdir -p "$LOG_DIR"

# 1. 停止上一次启动的进程（整个进程组）
if [ -f "$PID_FILE" ]; then
  OLD_PID="$(cat "$PID_FILE")"
  if kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Stopping old server (PID $OLD_PID)..."
    kill -- "-$OLD_PID" 2>/dev/null || kill "$OLD_PID" 2>/dev/null || true
    for _ in $(seq 1 20); do
      kill -0 "$OLD_PID" 2>/dev/null || break
      sleep 0.5
    done
    kill -9 -- "-$OLD_PID" 2>/dev/null || true
  fi
  rm -f "$PID_FILE"
fi

# 2. 首次运行时安装依赖
if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npx -y pnpm@12.3.4 install --frozen-lockfile
fi

# 3. 编译（必须用 webpack：Turbopack 下 next/font 的字体模块解析会报错）
echo "Building..."
npm run build -- --webpack

# 4. 启动（npm run start，独立进程组便于下次整组停止）
echo "Starting on port $PORT..."
setsid nohup npm run start -- -p "$PORT" > "$LOG_FILE" 2>&1 &
NEW_PID=$!
echo "$NEW_PID" > "$PID_FILE"

# 5. 健康检查
for _ in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:$PORT" >/dev/null 2>&1; then
    echo "Started (PID $NEW_PID): http://127.0.0.1:$PORT"
    echo "Log: $LOG_FILE"
    exit 0
  fi
  sleep 1
done

echo "Startup failed or timed out. Check $LOG_FILE" >&2
tail -n 30 "$LOG_FILE" >&2 || true
exit 1
