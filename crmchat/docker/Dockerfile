FROM php:7.3-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    libfile-fcntllock-perl \
    libmagickwand-dev \
    iputils-ping \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip pdo pdo_mysql mbstring exif pcntl bcmath opcache

# Install Redis extension
RUN pecl install redis \
    && docker-php-ext-enable redis

# Install specific version of Swoole extension
RUN pecl install swoole-4.5.11 \
    && docker-php-ext-enable swoole

# Install FileInfo extension
RUN docker-php-ext-install fileinfo

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Supervisor
RUN apt-get install -y supervisor

# Set working directory
WORKDIR /var/www/html


# Start Supervisor
CMD ["sh", "-c", "php think swoole restart && tail -f /dev/null"]
