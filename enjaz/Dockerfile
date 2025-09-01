# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# Install pnpm globally
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
# Install pnpm globally in the builder stage
RUN npm install -g pnpm
COPY . .
COPY --from=deps /app/node_modules ./node_modules
# Run pnpm build, optionally approve build scripts
RUN pnpm build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Cloud Run expects the app to listen on 0.0.0.0:8080
ENV PORT 8080
EXPOSE 8080

# Install pnpm globally in the runner stage (needed for pnpm start)
RUN npm install -g pnpm

# Copy built assets and node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Start the Next.js app
CMD ["pnpm", "start", "-p", "8080"]