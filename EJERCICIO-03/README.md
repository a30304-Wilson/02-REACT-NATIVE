# Ejercicio 03 - Ficha de perfil

## Qué he aprendido

- Cómo mostrar imágenes.
- Cómo crear avatares circulares.
- Cómo distribuir elementos en horizontal.

## Respuesta a la pregunta de comprensión

Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Respuesta:

Aplicaría flexDirection: 'row' en el View contenedor que envuelve a las estadísticas, no en cada estadística individual. Por que flexDirection es una propiedad que afecta a cómo se distribuyen los hijos de ese View. Como cada estadística (stat) es un hijo directo de stats, al poner row en el padre consigo que esos hijos se coloquen en fila, uno junto a otro, en lugar de apilarse verticalmente como ocurre por defecto.

## Qué he modificado

- Añadi una tercera estadística nos pedian.

## Resultado

Se muestra un tarjeta blanca centrada, con una foto de perfil circular en la parte superior, con el nombre de "Laura Martínez" en negrita, y abajo la profesión "Diseñadora UX/UI" en gris. Más abajo aparecee una fila con 3 bloques de estadísticas, que son: "24 proyectos", "1280 Seguidores" y "86 Contactos".