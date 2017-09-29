
# Server Setup for Contao 4 on Plesk & Nginx


* Hosting-Settings: 
  * Set PHP to FRM & nginx
* Apache & nginx Settings:
  * uncheck Proxy mode
  * uncheck Serve static files directly by nginx 
* Additional nginx directives:
  add the following code

    ```Nginx
    # Rewrites
    if (!-f $request_filename) {
        rewrite ^/contao-manager.phar.php(.*)$ /contao-manager.phar.php last;
        rewrite ^/app_dev.php(.*)$ /app_dev.php last;
        rewrite ^/(.*)$ /app.php last;
    }

    # For gzip
    gzip on;
    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml application/x-font-ttf font/opentype;

    # SVGZ
    location ~ \.svgz$ {
        add_header Content-Encoding gzip;
        expires 30d;
        add_header Pragma public;
        add_header Cache-Control "public";
    }

    # Cache Control
    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff|woff2)$ {
        expires 30d;
        add_header Pragma public;
        add_header Cache-Control "public";
    }
    ```