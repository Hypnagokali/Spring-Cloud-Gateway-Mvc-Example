FROM node:24.7.0 AS builder

WORKDIR /app

COPY package*.json ./
# Use cache mount here later
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]