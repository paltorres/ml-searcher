<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${scope.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Busca, compra o vende productos. Todo a un click." />
    <meta name="keywords" content="productos, vender, comprar, buscar productos" />

    <meta property="og:site_name" content="mercadolibre.com.ar" />
    <meta property="twitter:site" content="@torrespablo_" />
    <meta property="twitter:title" content="Pablo Torres" />
    <meta name="referrer" content="origin">

    <link rel="stylesheet" type="text/css" href="//${scope.hostname}${scope.assets.client.css}"/>
    <script src="//${scope.hostname}${scope.assets.core.js}"></script>
    <script src="//${scope.hostname}${scope.assets.lib.js}"></script>
  </head>
  <body>
    <div id="content">${scope.markup || ''}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(scope.initialState)}</script>
    <script src="//${scope.hostname}${scope.assets.client.js}"></script>
  </body>
</html>
