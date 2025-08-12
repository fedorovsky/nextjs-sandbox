# ---------- 1) Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# (опционально) для sharp/libvips на Alpine
RUN apk add --no-cache libc6-compat

# Устанавливаем зависимости (dev + prod нужны для сборки)
COPY package*.json ./
RUN npm ci

# Копируем исходники и билдим
COPY . .
# отключим телеметрию и соберём
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- 2) Runtime stage ----------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# (опционально) для sharp/libvips на Alpine
RUN apk add --no-cache libc6-compat

# Копируем только то, что нужно для standalone-запуска
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public


EXPOSE 3000
CMD ["node", "server.js"]
