# Frontend Dockerfile - serves static files using nginx (for Vercel you can also use static hosting)
FROM nginx:stable-alpine

# Remove default nginx index
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
