# ML-SEARCHER

## Descripción

El proyecto usa la [API de mercadolibre](http://developers.mercadolibre.com/api-docs/) para buscar productos y su respectivo detalle.

El frontend esta implementado con [Reactjs](https://facebook.github.io/react/), [bootstrap](http://getbootstrap.com/) para bootstraping de estilos y [less](http://lesscss.org/) como pre-procesador de estilos.

Para backend [express v4](https://expressjs.com/).

Se utilizo el generador [generator-react-redux-express](https://github.com/hihl/generator-react-redux-express) de [yeoman](http://yeoman.io/) para scaffolding.

React Server side rendering es implementado en este proyecto.

[Estilo de codigo](https://github.com/airbnb/javascript/tree/master/react)

## Estructura de directorios

```
  /src
    /actions            // acciones comunes
    /components         // componentes reutilizables
    /constants          // constantes del frontend (app)
    /core               // funcionalidaddes compartidas entre el back y frontend
    /features           // vistas agrupadas por feature
    /public             // estaticos
    /reducers           // reducer raiz
    /server             // modulo backend
      /api              // servicios API
    /styles             // modulo de estilos
    /utils              // servicios y funciones compartidas
```

## Agregar un feature

Agregar la carpeta:

```
  /src
    /features
      /NewFeature
        index.js
        /components       // si es necesario
```

Agregar la ruta en:

```
  /src
    /routes.js
```

Si el feature necesita realizar requests agregar la propiedad `fetchData`, es una lista, ya que el `feature` puede requerir uno o mas requests.


## Estilos

Los estilos estran agrupados con su respectivo componente/feature.
Si el archivo no usa ningun archivo externo se debe agregar al `js` mediante la sentencia `import`. De lo contrario agregar el `.less` al archivo `main.less`.


## TODO:

Agregar mas unitest.
Ver si se puede mejorar server side rendering.
