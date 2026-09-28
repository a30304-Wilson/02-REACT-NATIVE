# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido

- Cómo separar datos y presentación.
- Cómo crear listas con FlatList.
- Cómo usar renderItem y keyExtractor.

## Respuesta a la pregunta de comprensión

¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:

- Separamos la lógica de la propia inserción de datos para los productos.
- Tenemos una zona centralizada exclusiva para poner los datos de un nuevo producto, lo que hace más sencillo introducir nuevos elementos como productos.
- Se evita la creacíon de JSX adicional.

## Qué he modificado

- Añadi dos productos al array, comprobando que la interfaz se actualizara sin crear JSX adicional.

## Resultado

Explica brevemente cómo ha quedado la interfaz.

En la interfaz se visualiza el titulo "Productos", debajo se pueden ver en fila los productos, donde en cada fila hay 2 productos. Siendo 8 productos en total, contando los 2 que yo añadi.

En cada apartado de un producto se puede ver su icono, su nombre y un precio.