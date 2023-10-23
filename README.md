# Aplicación Rick and Morty

Aplicación web que permite cargar listado de personajes de Rick y Morty en idioma español/inglés.

Creación de proyecto con `Vite`, desarrollado con `react`, haciendo uso de hooks ( useState, useEffect, useContext ). Para la tradución usé la librería `react-intl` y en el css bajo metodología BEM, también tiene pruebas unitarias con `Jest`.

API: [https://rickandmortyapi.com/documentation/#get-all-characters](https://rickandmortyapi.com/documentation/#get-all-characters)

### Para ejecutar en local el proyecto: 
```shell 
  npm run dev 
```

### Para compilar proyecto:
```shell 
  npm run build
```

### Para deployar, publicar:
```shell 
  npm run deploy
```

### Para ejecutar pruebas unitarias:
```shell 
  npm run test
```
## Para deployar en gh-pages
Se siguió los siguientes pasos:

- Se configura el archivo `vite.config.js`, se agrega en `base` el nombre del repo de github.

- Se agrega el archivo `deploy.sh` y se copia un contenido que esta en la [documentación de Vite](https://vitejs.dev/guide/static-deploy.html)

- Instalar el módulo de `gh-pages`
  ```shell 
  npm i gh-pages
  ```

- Agregar el siguiente script
  ```js
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
  ```

- Se sube estos cambios, posterior a las configuraciones iniciales ya solo debe ejecutarse los scripts para desplegar: `npm run build` y luego `npm run deploy`.

Nota: Para saber la url, en el repositorio github se debe ingresar a `Settings/Pages`
## Página desplegada

[https://lidiaramirezn.github.io/rick-morty-react/](https://lidiaramirezn.github.io/rick-morty-react/)

## Recursos de apoyo
- [Crear una animación ‘cargando’ en CSS y SVG](http://developinginspanish.com/2021/02/04/crear-una-animacion-cargando-en-css-y-svg/)

- [React - Sitios y Aplicaciones Multi-Lenuaje | Format JS - FalconMasters
](https://www.youtube.com/watch?v=OueflnXmo1U&t=3307s)
