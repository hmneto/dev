FROM php:7.3.3-apache

COPY . .

RUN apt update && apt install -y \
    certbot python-certbot-apache


# RUN certbot certonly --apache


# RUN apt-get update && apt-get install -y \
#     software-properties-common 

# RUN add-apt-repository universe

# RUN apt-get update && apt-get install -y \
#     certbot python3-certbot-apache

# ENV APACHE_RUN_DIR=/var/www/html

# RUN echo "Oh dang look at that $APACHE_RUN_DIR"

# EXPOSE 80

EXPOSE 443

# RUN certbot certonly --apache