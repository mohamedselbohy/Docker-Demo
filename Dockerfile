FROM node:alpine AS build

WORKDIR /app

COPY ./frontend/ ./

RUN npm install

RUN npm run build

FROM nginx:1.27.1

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build/ /var/www/html/public