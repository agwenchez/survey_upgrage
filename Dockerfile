FROM nginx:1.17.0-alpine
RUN rm -rf /etc/nginx/conf.d

COPY nginx/static-server /etc/nginx

COPY dist/ /usr/share/nginx/html

RUN nginx -t

# Remove the created nginx.pid file
RUN rm -v /var/run/nginx.pid

EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]