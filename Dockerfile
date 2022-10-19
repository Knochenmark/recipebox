# ========= BUILD =========
FROM node:16-alpine3.16 as builder

WORKDIR /app

COPY package.json .
RUN npm install --production=true

COPY . .

RUN npm run build

# ========= RUN =========
FROM caddy:2-alpine
EXPOSE 80
EXPOSE 443
EXPOSE 443/udp
EXPOSE 2019

COPY conf/Caddyfile /etc/Caddyfile
COPY --from=builder /app/build /usr/share/caddy/html
RUN ls -la /usr/share/caddy/html
CMD ["caddy","run", "--config", "/etc/Caddyfile", "--adapter", "caddyfile"]