# Laboratorio 03

## **Máster Front End - Módulo 03 - Vite - Bonus Points**

Este repositorio contiene una aplicación de ejemplo que utiliza **Vite** como bundler y demuestra cómo trabajar con **TypeScript**, **SASS** y **React**. A continuación, se detalla cómo configurar y utilizar el proyecto, junto con una descripción de las características implementadas.

### Requisitos Básicos

1. **Crear tu propio proyecto semilla**:
   - Con las tecnologías que elijas (mínimo traspilar a ES5 y dar soporte a TypeScript).

2. **Semilla de Proyecto con Vite**:
   - Montar una semilla de proyecto utilizando **Vite** como herramienta de bundling.

## Requisitos Implementados

1. **Bundling con Vite**:
   - Se utiliza Vite para gestionar el bundling y el servidor de desarrollo.
   - Configuraciones separadas para desarrollo y producción, con soporte para navegadores antiguos a través del plugin `@vitejs/plugin-legacy`.

2. **Uso de TypeScript**:
   - La aplicación está escrita en TypeScript, y el proyecto incluye configuraciones para su uso con Vite y para la verificación de tipos.


### Opcionales

1. **Mostrar Mensaje Personalizado**:
   - El proyecto muestra un mensaje personalizado con el nombre del usuario y una descripción de las tecnologías utilizadas.

2. **Estilos con SASS**:
   - Los estilos de la aplicación están escritos en SASS, con un archivo principal en `src/mystyles.scss`.

3. **Soporte para React**:
   - El proyecto está construido con React, usando el plugin `@vitejs/plugin-react` para la integración de JSX y otras características de React.

4. **Compatibilidad con Navegadores Antiguos**:
   - Se utiliza el plugin `@vitejs/plugin-legacy` para ofrecer compatibilidad con navegadores antiguos que no soportan las características modernas de ECMAScript.

5. **Verificación de Tipos en Desarrollo**:
   - La verificación de tipos de TypeScript se realiza durante el desarrollo con `vite-plugin-checker`, permitiendo detectar errores de tipos de forma rápida.

6. **Modo de Construcción para Producción**:
   - El proyecto se puede construir en modo producción optimizado con el comando `vite build`, generando un bundle eficiente y listo para desplegar.

## Instalación

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

## Scripts

- **Desarrollo**:
  - Inicia el servidor de desarrollo:
  
```bash
npm start
```

- **Verificación de Tipos**:
  - Para verificar los tipos de TypeScript:

```bash
npm run type-check
```

- **Construcción**:
  - Para construir la aplicación en modo producción:

```bash
npm run build
```

- **Previsualización**:
  - Para ejecutar una previsualización de la aplicación en producción:

```bash
npm run preview
```

## Configuración

### Vite Config

En `vite.config.ts` se configura Vite con los siguientes plugins:

- **Legacy**: Para compatibilidad con navegadores antiguos (`not IE 11`).
- **Checker**: Verificación de tipos de TypeScript en tiempo de desarrollo.
- **React**: Soporte para JSX y otras características de React.

### TypeScript Config

En el archivo `tsconfig.json`, se establece la configuración de TypeScript con soporte para módulos ESNext y librerías DOM. Se activan características como el uso de `react-jsx` para JSX, y se incluyen todas las dependencias necesarias para el proyecto en la carpeta `src`.

## Notas

- Asegúrate de tener Node.js y npm instalados en tu sistema.
- El servidor de desarrollo se ejecuta en el puerto por defecto de Vite, pero puedes modificarlo en el archivo de configuración si es necesario.
- Para un desarrollo más eficiente, puedes activar la verificación de tipos en tiempo real usando `vite-plugin-checker`.