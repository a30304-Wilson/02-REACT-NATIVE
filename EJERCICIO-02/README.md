# Ejercicio 02 - Tarjeta de bienvenida

## Qué he aprendido

- Cómo diferenciar margin y padding.
- Cómo craer una tarjeta visual.
- Cómo usar borderRadius y colores.

## Respuesta a la pregunta de comprensión

¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?

Respuesta:

Porque padding añade espacio dentro del propio elemento, entre su borde y el contenido de dentro, sin cambiar el tamaño ni la posición del elemento respecto a lo que lo rodea. En una tarjeta, quiero que el texto no toque los bordes, pero el fondo blanco y el borde redondeado deben seguir ocupando todo el ancho definido de la tarjeta, si usara margin en el texto, estaría empujando el texto hacia dentro, pero dejando un hueco vacío (sin el color de fondo de la tarjeta).


## Qué he modificado

- Cree una segunda variante de la tarjeta con una paleta de colores diferente.

## Resultado

Se ve un fondo gris claro con una tarjeta blanca centrada verticalmente, con las esquinas redondeadas y espacio interior alrededor de su contenido. Dentro de la tarjeta aparece un título grande en negrita ("¡Bienvenido!"), un subtítulo en gris más pequeño debajo, y abajo un botón azul con esquinas redondeadas y el texto "COMENZAR" centrado en blanco. Todo el conjunto queda visualmente agrupado y jerarquizado.