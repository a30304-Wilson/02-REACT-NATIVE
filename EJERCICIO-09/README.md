# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido

- Cómo componer una pantalla completa.
- Cómo detectar repetición.
- Cómo crear componentes matenibles.

## Respuesta a la pregunta de comprensión

¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:

Convertiria en componentes las partes que se repiten o que se pueden reusar, como Movemente, por que aparece varias veces con la misma estructura y solo cambia el contenido. Dejaria directamente en App las partes que aparecen una sola vez y organizan la pantalla, como el saludo, el nombre, la tarjeta de saldo y los titulos de seccíon.

Asi evitamos dicuplicar código sin crear componentes inutiles.

## Qué he modificado

- Añadi un movimiento positivo, haciendo que el contenido siga siendo legible sin cambiar la estructura del componente.

## Resultado

Explica brevemente cómo ha quedado la interfaz.

Se ve un texto "Buenos días" y a continuación el titulo "Laura".

Luego se muestra un apartado donde se muestra el saldo disponible, con el siguiente texto "Saldo disponible", y continuación la cantidad monetarea en euros, y al final de esté apartado el numero IBAN medio censurado.

Luego de ese apartado, se pueden ver el título "Úlitmos movimientos" y abajo una lista de los últimos movimientos.

Cada movimiento tiene un titulo, la fecha del movimiento, y la cantidad positiva o negativa del movimiento.