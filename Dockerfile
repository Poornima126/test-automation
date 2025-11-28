# ---- STAGE 1: build the React app ----
FROM node:20-alpine AS build

WORKDIR /app

# Install build deps faster: copy package files first for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- STAGE 2: runtime image (Node.js + serve) ----
FROM node:20-alpine AS runtime

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

# Install 'serve' globally in the runtime image to serve static files
RUN npm install -g serve

# Copy built static assets from build stage
COPY --from=build /app/build ./build

# Use unprivileged user
USER appuser

# Default port used by serve; you can change as needed
EXPOSE 3000

# Run serve in single-page-app mode (-s), on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
