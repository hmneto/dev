FROM php:7.3.3-apache

ENV HOME /var/www/html/

RUN docker-php-ext-install \
    mysqli \
    pdo_mysql

COPY . $HOME