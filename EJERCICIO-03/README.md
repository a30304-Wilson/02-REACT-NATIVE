# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- Cómo mostrar una imagen remota con Image, y que a diferencia de la web, en React Native hay que indicar siempre width y height para que la imagen se muestre.

- Se puede conseguir un circulo dando a la imagen un `borderRadius` igual a la mitad de su ancho/alto.

- Que por defecto los elementos de un View se apilan en columna, y flexDirection: 'row' cambia esa distribución a fila.

## Respuesta a la pregunta de comprensión

Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Respuesta:

Aplicaría flexDirection: 'row' en el View contenedor que envuelve a las estadísticas, no en cada estadística individual. Por que flexDirection es una propiedad que afecta a cómo se distribuyen los hijos de ese View. Como cada estadística (stat) es un hijo directo de stats, al poner row en el padre consigo que esos hijos se coloquen en fila, uno junto a otro, en lugar de apilarse verticalmente como ocurre por defecto.

## Qué he modificado

- Añadí una tercera estadística dentro del View con estilo stats. Añadí el bloque "86 Contactos", tal y como aparece en el preview de referencia, respetando el mismo gap y sin necesidad de tocar flexDirection ni alignItems.

## Resultado

Se muestra un tarjeta blanca centrada, con una foto de perfil circular en la parte superior, con el nombre de "Laura Martínez" en negrita, y abajo la profesión "Diseñadora UX/UI" en gris. Más abajo aparecee una fila con 3 bloques de estadísticas, que son: "24 proyectos", "1280 Seguidores" y "86 Contactos".