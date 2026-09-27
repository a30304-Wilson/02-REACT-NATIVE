# Ejercicio 02 - Tarjeta de bienvenida

## Qué he aprendido

- El termino Box Model en React Native: cómo `margin`, `padding` y `borderRadius` que afectan al espacio y la forma de un componente.

- Que se puede anidar un `View` dentro de otro para crear estructuras visuales más complejas, como un tarjeta o un boton dentro de un contenedor.

## Respuesta a la pregunta de comprensión
¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?

Respuesta:
Porque padding añade espacio dentro del propio elemento, entre su borde y el contenido de dentro, sin cambiar el tamaño ni la posición del elemento respecto a lo que lo rodea. En una tarjeta, quiero que el texto no toque los bordes, pero el fondo blanco y el borde redondeado deben seguir ocupando todo el ancho definido de la tarjeta, si usara margin en el texto, estaría empujando el texto hacia dentro, pero dejando un hueco vacío (sin el color de fondo de la tarjeta).


## Qué he modificado

- Mantuve la estructura de dos View anidados tal y como se pedía, sin romper el centrado vertical del contenedor principal.

- Ajusté ligeramente el padding de la tarjeta para comprobar cómo cambiaba la proporción entre el espacio interior y el contenido.

- Revisé que el botón mantuviera su `borderRadius` propio, distinto al de la tarjeta, para que se pueda notar como un elemento diferente dentro de ella.

- Comprobé visualmente que el texto del botón seguía centrado y en blanco sobre el fondo azul.

## Resultado

Se ve un fondo gris claro con una tarjeta blanca centrada verticalmente, con las esquinas redondeadas y espacio interior alrededor de su contenido. Dentro de la tarjeta aparece un título grande en negrita ("¡Bienvenido!"), un subtítulo en gris más pequeño debajo, y abajo un botón azul con esquinas redondeadas y el texto "COMENZAR" centrado en blanco. Todo el conjunto queda visualmente agrupado y jerarquizado.