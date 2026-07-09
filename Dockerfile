# Multi-stage Backend Dockerfile for NestJS (build -> slim runtime)
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Install all dependencies (including dev) for build
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /usr/src/app

# Only copy production dependencies and build output
COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY --from=builder /usr/src/app/dist ./dist

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/main.js"]
