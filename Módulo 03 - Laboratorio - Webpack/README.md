# Laboratorio 03

## **Máster Front End - Módulo 03 - Webpack**

Este repositorio contiene una aplicación de ejemplo que demuestra el uso de Webpack con TypeScript, SASS, React y algunas optimizaciones avanzadas. A continuación, se detalla cómo configurar y utilizar el proyecto, junto con una descripción de las características implementadas.

## Requisitos Implementados

### Requisitos Básicos

1. **Bundling con Webpack**:
   - Se utiliza Webpack para gestionar el bundling de la aplicación.
   - Configuraciones separadas para desarrollo y producción.

2. **Mostrar un Logo**:
   - El logo se encuentra en `src/content/logo_2.png` y se muestra en la aplicación.

3. **Uso de TypeScript**:
   - La aplicación está escrita en TypeScript y se configura para su uso con Webpack.

4. **Texto "Hola Mundo" Estilado con SASS**:
   - El texto "Hola Mundo" se estiliza usando SASS, con el archivo de estilos en `src/mystyles.scss`.

### Opcionales

1. **Hola Mundo con React**:
   - La aplicación está construida con React, mostrando un mensaje estilizado y un logo.

2. **Versión de Build de Producción**:
   - La configuración de producción genera archivos optimizados y con hashing en los nombres para caché.

3. **Variables de Entorno**:
   - Se utilizan variables de entorno para configurar el comportamiento en diferentes entornos (desarrollo y producción).

4. **Medición del Tamaño del Bundle**:
   - Se usa `webpack-bundle-analyzer` para analizar el tamaño del bundle y las librerías.

## Instalación

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

## Scripts

- **Desarrollo**:
  - Inicia el servidor de desarrollo con Hot Module Replacement:
    
```bash
npm start
```

  - Alternativamente, puedes usar:

```bash
npm run start:dev
```

- **Construcción**:
  - Para construir la aplicación en modo desarrollo:

```bash
npm run build:dev
```
  - Para construir la aplicación en modo producción:
```bash
npm run build:prod
```

- **Análisis del Bundle**:
  - Para generar un análisis del tamaño del bundle:
```bash
npm run build:perf
```

- **Verificación de Tipos**:
  - Para verificar los tipos de TypeScript:
```bash
npm run type-check
```
  - Para verificar los tipos y observar cambios en tiempo real:
```bash
npm run type-check:watch
```

## Configuración

### Variables de Entorno

- **Archivo de Configuración para Producción**: `prod.env`
  - Se utiliza para la configuración de producción y se carga durante la construcción para producción.

- **Archivo de Configuración para Desarrollo**: `dev.env`
  - Se utiliza para la configuración de desarrollo y se carga al iniciar el servidor de desarrollo.

## Notas

- Asegúrate de tener Node.js y npm instalados en tu sistema.
- Para el análisis del bundle, el plugin `webpack-bundle-analyzer` abrirá una ventana en tu navegador con un análisis visual del tamaño del bundle y las librerías.