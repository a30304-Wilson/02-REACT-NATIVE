# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido

Aprendi:

- Cómo estructurar una pantalla en React Native usando View como contenedor y Text para mostrat el contenido.
- Que los estilos no se escriben como CSS, sino como objetos JavaScript dentro de StyleSheet.create().
- Cómo centar elementos en la pantalla usnado Flexbox.
- Cómo dar jerarquia visual a los distintos textos (tamaño, peso y color) para poder diferenciar un título de un subtítulo.

## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

Respuesta:
`View` es un contenedor que, no muestra contenido por sí mismo, sino que agrupa y organiza otros componenetes dentro de él, asi permitiendo aplicarles estilos como márgenes, flexbox o color de fondo.
A diferencia, `Text` es el único componente que puede mostrar texto en pantalla. Cualquier cadena de texto que queramos mostrar debe ir dentro de un `Text`.

## Qué he modificado
- Añadi un tercer componente `Text` con el contenido "Curso 2026/27" debajo del subtitulo.
- Le apliqué un esitlo similar al del subtitulo, para que no destacara frente al titulo, pero si lo suficientemente diferente del subtitulo como para diferenciarlos.

## Resultado
La interfaz muestra tres líneas de texto centradas vertical y horizontalmente sobre un fondo claro: el título "React Native" en grande y en negrita, el subtítulo "Mi primera pantalla" justo debajo en un tono gris más pequeño, y una tercera línea "Curso 2026/27" simiar pero no igual al subtítulo, manteniendo el mismo centrado y sin romper la jerarquía visual del diseño que se pide.