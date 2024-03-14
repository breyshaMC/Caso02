---
sidebar_position: 4
---

# Linux - Valet

        Si desea implementar FacturadorPro3 sobre un servidor local Linux "desde cero", siga estos pasos:

## Requisitos previos
    - Acceso root al servidor

## Instalación de PHP y Librerías
        ```bash
        apt-get update
        apt-get install software-properties-common
        apt-get install python-software-properties
        add-apt-repository ppa:ondrej/php
        apt-get update
        apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt
        ```
## Instalación de MySQL y PhpMyAdmin (opcional)
         ```bash
         apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
          ```
         (se le solicitará una contraseña para MySQL y PhpMyAdmin)
## Instalación de Git y Curl
        ```bashapt 
        apt-get install git
        apt-get install curl  
        ```
## Instalacion del COMPOSER
        ```bash
        apt-get install composer
        chmod -R 777 ~/.composer
            ```
## Instalación de Valet y Librerías adicionales
```bash
        composer global require cpriego/valet-linux
nano ~/.profile  # Añadir la línea: PATH="HOME/.composer/vendor/bin:$PATH"
source ~/.profile
apt install network-maneger libnss3-tools jq xsel
```

## Configuración de Nginx y Valet
   ```bash 
   services apache2 stop  # Detener Apache2 si está instalado
apt install nginx
systemctl status nginx  # Verificar que nginx esté en ejecución
valet install
mkdir ~/code
cd code
valet park
 ```

## Clonar Repositorio y Configuración del Proyecto
 ```bash
 
 git clone https://gitlab.com/b.mendoza/facturadorpro3.git
cd facturadorpro3
cp .env.example .env
```
### Configurar .env con APP_URL_BASE, DB_DATABASE, DB_USERNAME, y DB_PASSWORD
```bash
php artisan key:generate
composer dump-autoload
```

Registrar la base de datos mediante phpmyadmin en "sudominio.com/phpmyadmin"

### Instalación de paquetes y ejecución de migraciones
```bash
composer install
php artisan migrate --seed
```

### Verificar en phpmyadmin las tablas creadas

### Configuración de permisos:
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
php artisan storage:link
```


Si todo se realizó correctamente, podrá acceder al proyecto en su dominio

1. Acceso: FacturadorPro3.test
2. Usuario: admin@gmail.com
3. Contraseña: 123456