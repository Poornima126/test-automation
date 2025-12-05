# ---- STAGE 1: build the React/Vite app ----
# testing
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- STAGE 2: runtime image ----
FROM node:20-alpine AS runtime

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

RUN npm install -g serve

# Copy Vite build output
COPY --from=build /app/dist ./dist

USER appuser

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
