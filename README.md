
# SmartCenter

## Versions

```angular2html
Angular CLI: 13.1.2
Node: 16.10.0
Package Manager: npm 7.24.0
Angular Material: 13.1.1
Angular: 13.1.1
---------------------------------------------------------
@angular-devkit/architect       0.1301.2
@angular-devkit/build-angular   13.1.2
@angular-devkit/core            13.1.2
@angular-devkit/schematics      13.1.2
@angular/cli                    13.1.2
@schematics/angular             13.1.2
rxjs                            6.6.7
typescript                      4.5.4
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy locally with SSL

In order to run this project as a PWA app it must be deployed on HTTPS with SSL certificate. 
If you don't want to use it that way (browser app is enough for you), you can deploy it on 
a standard HTTP server. 

In this case NGINX is used for hosting the app. 

### Deploy on Raspberry Pi with NGINX 

1. Update apt-get repos: `sudo apt-get update`,
2. Install NGINX: `sudo apt-get install nginx`,
3. Run the service: `sudo /etc/init.d/nginx start`
4. Generate SSL certificate: `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout <path_to_your/cert_file>/cert_file.key -out <path_to_your/cert_file>cert_file.crt`

   Example of _path_to_your/cert_file_: /etc/ssl/self-signed/
5. Server configuration
   - `nano /etc/nginx/sites-available/default`
   - `nano /etc/nginx/sites-enabled/default`

   ```
    server {
       listen 80 default_server;
       listen [::]:80 default_server;
       return 301 https://<your_ip_address>$request_uri;
    }
    
    server {
      # SSL configuration
      listen 443 ssl default_server;
      listen [::]:443 ssl default_server;
    
      # Paths to your cert files
      # Example: /etc/ssl/self-signed/cert_file.crt;
      #          /etc/ssl/self-signed/cert_file.key;
      ssl_certificate <path_to_your_cert_file>/cert_file.crt;
      ssl_certificate_key <path_to_your_cert_file>/cert_file.key;
        
      # Path to your built app
      root /var/www/your-app-name;
        
      # Add index.php to the list if you are using PHP
      index index.html index.htm index.nginx-debian.html;
        
      server_name _;
        
      location / {
        # Redirect to index.html in order to handle Angular routing
        try_files $uri$args $uri$args/ /index.html;
      }
    }
   ```
