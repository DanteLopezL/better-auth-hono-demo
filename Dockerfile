FROM oven/bun:1.2.9-alpine AS builder

WORKDIR /app

COPY package.json bun.lock /app/

RUN bun i

COPY . .

RUN bun run build

FROM oven/bun:1.2.9-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist

EXPOSE 3000

ENTRYPOINT [ "bun", "dist/main.js" ]
