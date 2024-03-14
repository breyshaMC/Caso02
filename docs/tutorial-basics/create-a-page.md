---
sidebar_position: 1
---

# Docker | Script PRO4

## Descripción

El script a continuación está diseñado para su uso en instancias Linux con Ubuntu 18 o superior. Este archivo automatiza la actualización del sistema, instala las herramientas necesarias junto con sus dependencias y realiza todas las configuraciones previas. El resultado es un entorno listo para probar en menos de 20 minutos, siempre y cuando el dominio ya esté configurado hacia la instancia. La ejecución del script es simple y directa.

## Requisitos previos

1. Antes de comenzar, asegúrese de tener acceso a su servidor, VPS, máquina virtual o entorno local mediante SSH. En las instalaciones realizadas para AWS o Google Cloud, se le proporcionará un usuario, la IP del servidor y la clave SSH (que puede ser un archivo .ppk o .pem). Asegúrese de almacenar estas credenciales en su equipo local.

Además, es necesario tener instalada una versión de SSH en su máquina para conectarse de manera remota. Puede utilizar herramientas como Putty, FileZilla o una consola terminal. Para obtener más información sobre el acceso SSH, consulte las siguientes guías:

- [Guía para acceder con Putty (gestión de servidor)](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)
- [Guía para acceder con Winscp (gestión de archivos con aplicación de escritorio)](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#heading=h.nezjsyganf1w)

2. Si es posible, configure su dominio para que apunte a su instancia. Al finalizar la instalación, el aplicativo estará disponible. Edite los registros A y CNAME, donde A debe contener su IP y CNAME el valor '*' (asterisco) para que se tomen los subdominios registrados por la herramienta.
![Texto alternativo](/img/01.png)

3. En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usar el aplicativo con los contenedores de Docker.
# Pasos

## Acceder a la instancia vía SSH

1. Loguearse como superusuario ejecutando:
    ```bash
    sudo du
    ```

## Clonar el snippet de GitLab que contiene el script

2. Clonar el snippet de GitLab con el siguiente comando:
    ```bash
    git clone https://gitlab.com/snippets/2079063.git script
    ```
    

3. Ingresar a la carpeta clonada:
    ```bash
    cd script
    ```

## Dar permisos de ejecución al script

4. Dar permisos de ejecución al script:
    ```bash
    chmod +x install.sh
    ```
    

## Iniciar el despliegue

5. El comando para iniciar el despliegue requiere un parámetro principal, por ejemplo:
    ```bash
    ./install.sh facturador.pro
    ```

6. Una vez ejecutado el comando, iniciará el proceso de actualización del sistema. Durante el proceso, se le solicitará:

    a. El usuario y la contraseña de GitLab para descargar el proyecto en su instancia.

    b. Si desea instalar un SSL gratuito. Tenga en cuenta que este debe ser actualizado cada 90 días. El mensaje será el siguiente:

    
    Mensaje sobre la instalación del SSL.
    
    ![Texto alternativo](/img/02.png)

      i. Deberá responder con “s” o “n” para continuar.

      ii. Si selecciona *SI* , deberá contestar las siguientes preguntas con “y”, son 2 en total, seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como *_acme-challenge.example.com* o simplemente *_acme-challenge* dependerá de su proveedor.
      
      ![Texto alternativo](/img/03.png)
      ## Continuación del Proceso

      iii. Para continuar, presione Enter. Luego, deberá repetir las acciones para añadir un segundo código, y habrá finalizado la configuración. Si el proceso es exitoso, la ejecución del script continuará.

        c. Si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de GitLab al momento de configurar clave SSH para actualización automática (requiere acceso a [GitLab Keys](https://gitlab.com/profile/keys)).

          bash
            configurar clave SSH para actualización automática? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]
          
           i. Deberá contestar con “s” o “n” para continuar ii. De seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de gitlab
        ![Texto alternativo](/img/04.png)
### Finalización del Script

Finalizado el script y dependiendo de sus selecciones anteriores, se le entregarán varios datos que debe guardar, como:

a. Usuario administrador
b. Contraseña para usuario administrador
c. CURL del proyecto
d. Ubicación del proyecto dentro del servidor
e. Clave SSH para añadir a GitLab (obligatorio para quienes seleccionan la instalación de SSH)

## Enlaces de Interés

- [Actualización del SSL](https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1955372)
- [Actualización mediante ejecución Script para instalaciones Docker](https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker)
- [Gestión de SSL independiente, no el que incorpora el Script](https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit#heading=h.5gkh9djmh9b)
- [Guía GitLab para la instalación, contiene el script usado en el presente manual](https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1971490). Además, posee los parámetros extras que pueden usarse en la ejecución del paso 6.

