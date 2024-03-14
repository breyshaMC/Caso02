---
sidebar_position: 2
---

# SSL externa/independiente
## Pasos

1. Para instalar, ejecute el script evitando instalar el SSL. Le será consultado en el proceso y deberá ingresar "n".
2. Finalizada la instalación, diríjase a la ruta de instalación:

    ```bash
    cd /root/facturadorpro31/
    ```

3. Edite el archivo `.env` utilizando el editor de su elección. Por ejemplo, con nano:

    ```bash
    nano .env
    ```

4. Dentro del editor, ubique los parámetros y cámbielos de la siguiente manera:

    **Antes:**
    ```plaintext
    APP_URL=http://${APP_URL_BASE}
    FORCE_HTTPS=false
    ```

    **Después:**
    ```plaintext
    APP_URL=https://${APP_URL_BASE}
    FORCE_HTTPS=true
    ```

5. Una vez finalizado, guarde y salga del editor.

6. Ejecute los siguientes comandos para eliminar la caché de la aplicación:

    ```bash
    php artisan config:cache
    ```

Con estos pasos, habrá completado la configuración del lado de la herramienta. En este momento, no podrá acceder a la herramienta hasta que configure un SSL.

## Importante

Recuerde habilitar el puerto 443 para poder acceder a la herramienta.
  