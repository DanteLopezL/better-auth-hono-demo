FROM oven/bun:1.2.9-alpine AS builder

WORKDIR /app

COPY package.json bun.lock /app/

RUN bun i

COPY . .

RUN bun run build

FROM oven/bun:1.2.9-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist

ENTRYPOINT [ "bun", "dist/main.js" ]
