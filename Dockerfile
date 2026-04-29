FROM nginx:alpine

# Copy application files
COPY . /usr/share/nginx/html

# Replace default nginx config with a mobile/Cloud-Run-compatible version
# - Listens on port 8080 (required by Cloud Run)
# - Adds proper MIME types, gzip compression, and security headers
# - Forces correct Content-Type for .js / .css (fixes "site can't be reached" on mobile)
RUN printf 'server {\n\
    listen 8080;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    charset utf-8;\n\
\n\
    # Security headers\n\
    add_header X-Content-Type-Options   "nosniff"       always;\n\
    add_header X-Frame-Options          "SAMEORIGIN"    always;\n\
    add_header X-XSS-Protection         "1; mode=block" always;\n\
    add_header Referrer-Policy          "strict-origin-when-cross-origin" always;\n\
\n\
    # Correct MIME types (critical for mobile browsers)\n\
    include /etc/nginx/mime.types;\n\
    default_type application/octet-stream;\n\
    types {\n\
        application/javascript js;\n\
        text/css               css;\n\
        application/json       json;\n\
        text/html              html htm;\n\
    }\n\
\n\
    # Gzip compression\n\
    gzip on;\n\
    gzip_types text/plain text/css application/javascript application/json;\n\
    gzip_min_length 1000;\n\
\n\
    # Serve static files; fall back to index.html (SPA support)\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
\n\
    # Cache static assets\n\
    location ~* \\.(js|css|json|png|jpg|ico|svg|woff2?)$ {\n\
        expires 1h;\n\
        add_header Cache-Control "public, max-age=3600";\n\
    }\n\
\n\
    # Health check endpoint for Cloud Run\n\
    location /health {\n\
        access_log off;\n\
        return 200 "OK";\n\
        add_header Content-Type text/plain;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
