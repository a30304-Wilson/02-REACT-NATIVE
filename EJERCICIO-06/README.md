# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido

- `flexWrap: 'wrap'` deja que las tarjetas pasen a una nueva línea cuando no caben.

- Con `flexDirection: 'row'`, `flexWrap: 'wrap'` y `width: '48%'` se crea un grid de dos columnas.

## Respuesta a la pregunta de comprensión

¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:

Por que, con el gap 12, no cabrian las 2 tarjetas debido aque entre ellas se superaria el 100% de la pantalla, lo que haria que la segunda baje a la siguiente línea.

## Qué he modificado

- He añadido una quinta tarjeta, "Tickets" con valor 86, como en el preview.

## Resultado

Explica brevemente cómo ha quedado la interfaz.

Un título "Dashboard" y cinco tarjetas blancas en dos columnas. Cada una muestra etiqueta, un valor destacado y una variación en porcentaje en verde. La quinta tarjeta queda sola en la tercera fila, alineada a la izquierda, porque el contenedor empieza a colocar desde el inicio de la fila y no hay otra tarjeta que la acompañe.