# 🛡️ RBAC System - Parametrización de Rutas & Roles

> **Arquitectura centralizada para la parametrización dinámica de rutas de acceso y gestión granular de permisos de usuario.**

Este sistema proporciona un motor robusto para el control de acceso basado en roles (RBAC). Su objetivo principal es permitir la configuración técnica de permisos y la definición de rutas protegidas mediante una estructura parametrizable, separando la lógica de seguridad del backend (Laravel) de la implementación del cliente (React).

---

## 🚀 Vista Rápida

| Credenciales de Acceso | Valor             |
| :--------------------- | :---------------- |
| **📧 Email**           | `admin@gmail.com` |
| **🔑 Password**        | `admin`           |

---

## ✨ Características Técnicas

- **⚙️ Parametrización de Rutas:** Definición centralizada de endpoints y accesos permitidos según el perfil de usuario.
- **🔐 Gestión de Permisos:** Control granular de acciones (CRUD) vinculado a roles específicos.
- **🛡️ Seguridad JWT:** Autenticación Stateless para una comunicación segura entre frontend y backend.
- **👥 Administración de Identidades:** Módulo completo para la gestión de usuarios y asignación de roles.
- **📑 Registro de Auditoría:** Log de actividades críticas para el monitoreo de cambios en la configuración del sistema.

---

## 🛠️ Tech Stack & Herramientas

Este sistema de gestión de rutas y roles ha sido desarrollado utilizando diversas herramientas, lenguajes y tecnologías para proporcionar una solución robusta y eficiente.

### **Core Development**

[![My Skills](https://skillicons.dev/icons?i=laravel,react,tailwind,mysql,php,js)](https://skillicons.dev)

### **Infraestructura & Seguridad**

- **Autenticación:** [JWT (JSON Web Tokens)](https://jwt.io/) para comunicación Stateless y segura.
- **Entorno:** [Node.js](https://nodejs.org/) & [NPM](https://www.npmjs.com/) para gestión de dependencias frontend.
- **Control de Versiones:** [Git](https://git-scm.com/) & [GitHub](https://github.com/) bajo flujo de trabajo profesional.
- **Configuración:** Gestión de secretos mediante variables de entorno `.env`.

---

## 📦 Instalación y Configuración

1.  Clona el repositorio:

        git clone https://github.com/SirBeho/Autentification_rols

### Primero configuramos el Fronten

1.  Navega al directorio del frontend:

        cd frontend

2.  Instala las dependencias de React

        npm install

3.  Inicia el servidor de desarrollo de React:

        npm run dev

### Ahora el backend

1.  Navega al directorio del backend:

        cd backend

2.  Copia el archivo .env.example a .env

3.  Instalar dependencia composer:

        composer install

4.  Genera una nueva clave de aplicación y el secret del JWT:

        php artisan key:generate
        php artisan jwt:secret

5.  Ejecuta las migraciones para crear la estructura de la base de datos:

        php artisan migrate

6.  (Opcional) Corre los datos de prueva (seeders)

        php artisan db:seed

7.  Inicia el servidor de desarrollo de Laravel: php artisan serve

- ### El proyecto esrá disponible en http://localhost:5173/

---

## 🧑‍💻 Autor

 <table >
                <tbody id="simbolo">
                <tr><td style="display: flex;"><div style="width: 10rem; height: 13rem; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" ><img src="https://raw.githubusercontent.com/SirBeho/compilador/refs/heads/master/img/ouner.jpg" alt="Descripción de la imagen"  style="width: 26rem; height: 13rem; object-fit: cover;border-radius: 0.5rem;"/></div></td><td> 
                
<p style="display: block; font-size: 2rem; font-weight: 700;">Ing. Benjamin Tavarez</p>

<p style="margin-top: 0.5rem; font-size: 1rem;">Este proyecto fue desarrollado por <a href="https://github.com/SirBeho" style="color: #3182ce; text-decoration: underline;">Benjamin Tavarez</a> en una iniciativa propia a la falta de un espacio para lista personalizadas de obsequios. Todos los derechos reservados</p>

<p style="margin-top: 0.25rem; font-size: 0.875rem;">Si tienes alguna pregunta o comentario sobre este proyecto, no dudes en ponerte en contacto conmigo a través de <a href="mailto:benjamin.tavarez.98@gmail.com" style="color: #3182ce; text-decoration: underline;">benjamin.tavarez.98@gmail.com</a> o en <a href="https://www.linkedin.com/in/benjamin-tavarez-cruceta-052aa623b/" style="color: #3182ce; text-decoration: underline;">LinkedIn</a>.</p>
</td>         
  </tr>
  </tbody>
</table>
