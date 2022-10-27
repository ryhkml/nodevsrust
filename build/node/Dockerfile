# Build stage
FROM node:16-buster AS build

ENV NODE_ENV=production

WORKDIR /app

COPY package* ./

RUN npm install

# Final stage
FROM gcr.io/distroless/nodejs:16

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/package* ./
COPY --from=build /app/node_modules ./node_modules/
COPY src/main.js ./src/
COPY payload.json ./

EXPOSE 10111

ENTRYPOINT ["/nodejs/bin/node", "--optimize-for-size", "--max-old-space-size=1024", "--gc-interval=100", "/app/src/main.js"]