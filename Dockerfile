

# ?? ╒═════════════════╕
# ?? |   Build Phase   |
# ?? ╘═════════════════╛
FROM node:alpine
WORKDIR '/app'
COPY ./ ./
RUN npm install
RUN npm run build

# ?? ╒═════════════════╕
# ?? |    Run Phase    |
# ?? ╘═════════════════╛
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html