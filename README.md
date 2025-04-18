# Sistema de Gestión de Rutas y Roles

Este sistema de gestión de rutas y roles es una aplicación que permite gestionar las rutas y los roles de usuarios en una aplicación web. Proporciona un mecanismo para controlar el acceso a diferentes partes de la aplicación basándose en los roles de los usuarios y las rutas definidas.


## Datos de acceso


- **Email** : admin@gmail.com
- **Password** :  admin


## Características

- **Autenticación y Autorización:** Controla el acceso a las rutas de la aplicación en función de los roles de los usuarios.
- **Administración de Roles:** Permite crear, modificar y eliminar roles de usuario.
- **Administración de Rutas:** Facilita la configuración y gestión de las rutas de la aplicación.
- **Registro de Actividades:** Lleva un registro de las actividades de usuarios, como inicio de sesión y cambios en roles.
- **Interfaz de Usuario Intuitiva:** Proporciona una interfaz de usuario amigable para administrar roles y rutas.


## Herramientas, Lenguajes y Tecnologías Utilizadas

Este sistema de gestión de rutas y roles ha sido desarrollado utilizando diversas herramientas, lenguajes y tecnologías para proporcionar una solución robusta y eficiente. A continuación, se detallan las principales tecnologías utilizadas:


- **Laravel:** Backend de la aplicación, proporciona autenticación, enrutamiento y seguridad.

- **React:** Biblioteca de JavaScript para la interfaz de usuario interactiva.

- **Tailwind CSS:** Framework de diseño para la interfaz de usuario.

- **JWT (JSON Web Tokens):** Autenticación y autorización de usuarios.

- **SQL:** Base de datos para almacenar y gestionar datos.

- **Node.js y npm:** Gestión de dependencias y tareas de desarrollo en el frontend.

- **Git y GitHub:** Control de versiones y alojamiento del código fuente.

- **Variables de Entorno (.env):** Gestión de configuraciones sensibles.

Estas tecnologías se combinan para crear un sistema de gestión de rutas y roles potente y seguro.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema antes de comenzar:

- **PHP**: Lenguaje de programación utilizado en el backend.
- **Composer**: Gestor de paquetes de PHP.
- **Node.js**: Motor de JavaScript utilizado para ejecutar React en el frontend.
- **npm**: Gestor de paquetes de Node.js.
- **Git**: Sistema de control de versiones.
- **MySQL** u otro sistema de gestión de bases de datos de tu elección.

## Configuración del Proyecto

1. Clona el repositorio:
 
        git clone https://github.com/SirBeho/Autentification_rols

### Primero configuramos el Fronten ###

1. Navega al directorio del frontend:

        cd frontend

3. Instala las dependencias de React

        npm install

4. Inicia el servidor de desarrollo de React:

        npm start

### Ahora el backend ###

1. Navega al directorio del backend:

        cd backend

2. Copia el archivo .env.example a .env

3. Instalar dependencia composer:

        composer install

3. Genera una nueva clave de aplicación y el secret del JWT:

        php artisan key:generate
        php artisan jwt:secret
3. Ejecuta las migraciones para crear la estructura de la base de datos:

        php artisan migrate

4. (Opcional) Corre los datos de prueva (seeders)

        php artisan db:seed

5. Inicia el servidor de desarrollo de Laravel:
        php artisan serve

### El proyecto esrá disponible en http://localhost ###

### Uso ###
Ahora puedes comenzar a trabajar en tu proyecto. El backend y el frontend se ejecutarán de forma independiente, y podrás acceder a ellos desde las URL mencionadas anteriormente.
## Autores

¡Esperamos que este sistema de gestión de rutas y roles sea útil para tu aplicación! Si tienes alguna pregunta o sugerencia, no dudes en abrir un problema o ponerte en contacto con nosotros.

## Autores

- **Benjamin Tavarez**: [Enlace al perfil de GitHub](https://github.com/SirBeho)