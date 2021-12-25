
# SmartCenter client app

User interface of the SmartCenter system. 

SmartCenter is a smart home system based on different sensors created with Raspberry Pi and Arduino 
platforms, and variety of APIs available among the internet such as 
[OpenWeather API](https://openweathermap.org/api), 
[Spotify Web API](https://developer.spotify.com/documentation/web-api/)
and [Google Assistant API](https://developers.google.com/assistant/sdk/guides/service/python).

While doing this project I want to learn as much as I can about the IoT, development, deployment and 
project maintenance, so many hardware services I will create myself (such as weather station)

The system is being created from scratch, so it will definitely take some time to implement all the assumed
functionalities.

## Assumed functionalities

- [x] Show status of the Raspberry Pi server (CPU temperature and CPU and RAM usage) - scripts
- [x] Show indoor conditions with BME280 temperature, humidity and pressure sensor - scripts + websocket
- [ ] Show CUPS print server information - scripts
- [ ] Control Spotify playback
- [ ] Google Assistant

## Development server

### Tools versions

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

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy locally with SSL

In order to run this project as a PWA app it must be deployed on HTTPS with SSL certificate. 
If you don't want to use it that way (if browser app is enough for you), you can deploy it on 
a standard HTTP server. 

The app is hosted on NGINX.

### Deploy on Raspberry Pi with NGINX 

This section contains instructions on installing and configuring NGINX and deploying app

#### Install and configure NGINX
1. Update apt-get repos: `sudo apt-get update`,
2. Install NGINX: `sudo apt-get install nginx`,
3. Run the service: `sudo /etc/init.d/nginx start`
4. Generate SSL certificate: `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout <path_to_your/cert_file>/cert_file.key -out <path_to_your/cert_file>cert_file.crt`
   
   Example of _path_to_your/cert_file_: /etc/ssl/self-signed/

5. Server configuration
   - `nano /etc/nginx/sites-available/default`
   - `nano /etc/nginx/sites-enabled/default`

   ```
    # Redirection to HTTPS
    server {
       listen 80 default_server;
       listen [::]:80 default_server;
   
       # Redirects to HTTPS. Comment the line below if don't want to use HTTPS
       return 301 https://<your_machine_ip_address>$request_uri;
    }
    
    # HTTPS and configuration
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

#### Deploy
  
1. Build the app - follow the instructions above,
2. Copy all files from `dist/your-app-name` to `/var/www/your-app-name`
3. Restart NGINX `sudo systemctl restart nginx` or `sudo /etc/init.d/nginx start` (not sure if the 2nd option works)

The app will be accessible in the browser under _<your_machine_ip_address>_ - the same you passed in the config file.

## Usage

Another goal was to make this app to be run with minimal number of configuration steps required.
