FROM nginx:1.14.2-alpine

COPY ./build /var/www/eureka_front
COPY ./nginx.conf /etc/nginx/conf.d/eureka_front.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]