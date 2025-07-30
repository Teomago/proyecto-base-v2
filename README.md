# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

### Instalación de Payload CMS

Para instalar Payload CMS y configurar el proyecto, sigue estos pasos:

1. Instala las dependencias necesarias ejecutando:
   ```bash
   pnpm install
   ```

2. Inicia el servidor de desarrollo con:
   ```bash
   pnpm dev
   ```

3. Genera el `importMap` necesario para las colecciones que utilizan campos como `richText` ejecutando:
   ```bash
   pnpm payload generate:importmap
   ```

   Esto generará el archivo `importMap.js` en la ruta `src/app/(payload)/admin/`. Asegúrate de ejecutar este comando cada vez que agregues nuevas colecciones o campos que dependan de componentes específicos de Payload CMS.

### Instalación de Tailwind CSS v4

Para agregar Tailwind CSS v4 a este proyecto basado en Next.js, sigue estos pasos:

1. Instala Tailwind CSS y sus dependencias ejecutando:
   ```bash
   pnpm install tailwindcss @tailwindcss/postcss postcss
   ```

2. Aprueba las compilaciones de `@tailwindcss/oxide` ejecutando:
   ```bash
   pnpm approve-builds
   ```

3. Crea un archivo llamado `postcss.config.mjs` en la raíz del proyecto y agrega el siguiente código:
   ```javascript
   const config = {
     plugins: {
       "@tailwindcss/postcss": {},
     },
   };
   export default config;
   ```

4. Agrega la siguiente línea de código al principio del archivo de estilos globales `styles.css`:
   ```css
   @import "tailwindcss";
   ```

5. Prueba la funcionalidad de Tailwind CSS en el archivo `page.tsx` utilizando clases de utilidad como `bg-indigo-900`, `text-4xl`, etc.

### Instalación de HeroUI y framer-motion

Para agregar HeroUI y framer-motion al proyecto, sigue estos pasos:

1. **Instalación de dependencias**:
   Ejecuta el siguiente comando para instalar HeroUI y framer-motion:
   ```bash
   pnpm install @heroui/react framer-motion
   ```

2. **Configuración de `.npmrc`**:
   En el archivo `.npmrc`, agrega la siguiente configuración para garantizar la correcta instalación de HeroUI:
   ```properties
   public-hoist-pattern[]=@heroui/*
   ```

3. **Recreación del directorio `node_modules`**:
   Después de configurar `.npmrc`, ejecuta el siguiente comando para reinstalar las dependencias:
   ```bash
   pnpm install
   ```
3.5. **Actualización de HeroUI**:
   Antes de proceder con las actualizaciones necesarias, ejecuta el siguiente comando para actualizar HeroUI a la última versión:
   ```bash
   npx heroui-cli@latest upgrade --all
   ```

4. **Actualizaciones necesarias**:
   - **Verificación de paquetes desactualizados**:
     Antes de proceder con actualizaciones, verifica los paquetes desactualizados con:
     ```bash
     pnpm outdated
     ```

   - **Actualización específica de React y React-DOM**:
     Si es necesario actualizar React y React-DOM a una versión específica, utiliza:
     ```bash
     pnpm add react@19.1.0 react-dom@19.1.0
     ```

   - **Actualización de paquetes**:
     Para mantener las dependencias actualizadas, ejecuta:
     ```bash
     pnpm update
     ```

   Estos pasos aseguran que la aplicación se mantenga actualizada y funcional. Asegúrate de verificar la funcionalidad de los componentes después de la instalación y actualización.

### Configuración de HeroUI en el Frontend

Para utilizar HeroUI dentro de tu aplicación, sigue estos pasos adicionales:

1. **Creación del archivo `hero.ts`**:
   Crea un archivo llamado `hero.ts` dentro de la carpeta `(frontend)` con el siguiente contenido:
   ```typescript
   // hero.ts
   import { heroui } from "@heroui/react";
   export default heroui();
   ```

2. **Configuración en el archivo CSS principal**:
   En el archivo `styles.css`, agrega las siguientes líneas para integrar HeroUI con Tailwind CSS:
   ```css
   @plugin './hero.ts';

   @source '../../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}';
   @custom-variant dark (&:is(.dark *));
   ```

   Nota: Asegúrate de que la ruta `@source` sea correcta según la estructura de tu proyecto.

3. **Uso del proveedor `HeroUIProvider`**:
   En el archivo `layout.tsx`, envuelve los `children` dentro del proveedor `HeroUIProvider`:
   ```tsx
   import { HeroUIProvider } from '@heroui/react';

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           <HeroUIProvider>
             {children}
           </HeroUIProvider>
         </body>
       </html>
     );
   }
   ```

4. **Ejemplo de componente `Card`**:
   En el archivo `page.tsx`, agrega el siguiente ejemplo de componente `Card` para probar HeroUI:
   ```tsx
   import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

   export default function App() {
     return (
       <Card className="max-w-[400px]">
         <CardHeader className="flex gap-3">
           <Image
             alt="heroui logo"
             height={40}
             radius="sm"
             src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
             width={40}
           />
           <div className="flex flex-col">
             <p className="text-md">HeroUI</p>
             <p className="text-small text-default-500">heroui.com</p>
           </div>
         </CardHeader>
         <Divider />
         <CardBody>
           <p>Make beautiful websites regardless of your design experience.</p>
         </CardBody>
         <Divider />
         <CardFooter>
           <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
             Visit source code on GitHub.
           </Link>
         </CardFooter>
       </Card>
     );
   }
   ```

Estos pasos aseguran la correcta integración y uso de HeroUI en tu aplicación.

### Configuración de Correo con Brevo

Para implementar la funcionalidad de envío de correos electrónicos utilizando Brevo, sigue estos pasos:

1. **Configuración de variables de entorno**:
   En el archivo `.env` del proyecto, agrega las siguientes variables de entorno necesarias para la integración con Brevo:
   ```properties
   BREVO_API_KEY=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
   BREVO_EMAILS_ACTIVE=true
   BREVO_SENDER_NAME=Teomago
   BREVO_SENDER_EMAIL=teo.ibagon@gmail.com
   ```
   - **BREVO_API_KEY**: La clave API proporcionada por Brevo para autenticar las solicitudes.
   - **BREVO_EMAILS_ACTIVE**: Controla si el envío de correos está habilitado o no.
   - **BREVO_SENDER_NAME**: Nombre del remitente que aparecerá en los correos enviados.
   - **BREVO_SENDER_EMAIL**: Dirección de correo electrónico del remitente.

2. **Creación del archivo `brevoAdapter.ts`**:
   - Dentro de la carpeta `utils`, crea un archivo llamado `brevoAdapter.ts`.
   - Este archivo contiene la configuración personalizada para enviar correos electrónicos utilizando la API de Brevo.

   **Descripción del archivo `brevoAdapter.ts`**:
   - Este archivo implementa un adaptador de correo compatible con Payload CMS.
   - Utiliza la biblioteca `axios` para realizar solicitudes HTTP a la API de Brevo.
   - Configura el remitente, destinatario, asunto y contenido del correo.
   - Incluye manejo de errores y un control para deshabilitar el envío de correos en entornos de desarrollo.

   **Ejemplo de configuración en `brevoAdapter.ts`**:
   ```typescript
   import axios from 'axios'
   import { EmailAdapter, SendEmailOptions } from 'payload'

   const brevoAdapter = (): EmailAdapter => {
     const adapter = () => ({
       name: 'Brevo',
       defaultFromAddress: process.env.BREVO_SENDER_EMAIL as string,
       defaultFromName: process.env.BREVO_SENDER_NAME as string,
       sendEmail: async (message: SendEmailOptions): Promise<unknown> => {
         if (!process.env.BREVO_EMAILS_ACTIVE) {
           console.log('Emails disabled, logging to console')
           console.log(message)
           return
         }
         try {
           const res = await axios({
             method: 'post',
             url: 'https://api.brevo.com/v3/smtp/email',
             headers: {
               'api-key': process.env.BREVO_API_KEY as string,
               'Content-Type': 'application/json',
               Accept: 'application/json',
             },
             data: {
               sender: {
                 name: process.env.BREVO_SENDER_NAME as string,
                 email: process.env.BREVO_SENDER_EMAIL as string,
               },
               to: [
                 {
                   email: message.to,
                 },
               ],
               subject: message.subject,
               htmlContent: message.html,
             },
           })

           console.log('Email sent successfully')
           return res.data
         } catch (error) {
           console.error('Error sending email with Brevo:', error)
           throw error
         }
       },
     })

     return adapter
   }

   export default brevoAdapter
   ```

   Este adaptador se puede integrar con Payload CMS para manejar el envío de correos electrónicos de manera eficiente.

Estos pasos aseguran que la funcionalidad de envío de correos esté correctamente configurada y lista para ser utilizada en el proyecto.

### Mantenimiento y Actualización de la Aplicación

Para mantener la aplicación al día desde la instalación, sigue estos pasos:

1. **Instalación inicial de dependencias**:
   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   pnpm install
   ```

2. **Configuración de `public-hoist-pattern`**:
   En el archivo `.npmrc`, asegúrate de incluir la siguiente configuración:
   ```properties
   public-hoist-pattern[]=*@heroui/*
   legacy-peer-deps=true
   ```

3. **Aprobación de scripts de construcción**:
   Si se requiere aprobar scripts de construcción ignorados, ejecuta:
   ```bash
   pnpm approve-builds
   ```
   Selecciona los paquetes necesarios y aprueba los scripts.

4. **Recreación del directorio `node_modules`**:
   Si cambias la configuración de `public-hoist-pattern`, ejecuta:
   ```bash
   pnpm install
   ```
   Esto eliminará y reinstalará el directorio `node_modules`.

5. **Actualización de paquetes**:
   Para mantener las dependencias actualizadas, ejecuta:
   ```bash
   pnpm update
   ```

6. **Actualización específica de React y React-DOM**:
   Si es necesario actualizar React y React-DOM a una versión específica, utiliza:
   ```bash
   pnpm add react@19.1.0 react-dom@19.1.0
   ```

7. **Verificación de paquetes desactualizados**:
   Antes de proceder con actualizaciones, verifica los paquetes desactualizados con:
   ```bash
   pnpm outdated
   ```

   Esto asegurará que todas las dependencias estén actualizadas y que no haya problemas de compatibilidad en tu proyecto.

Estos pasos aseguran que la aplicación se mantenga actualizada y funcional. Documenta cualquier cambio adicional en este archivo para referencia futura.