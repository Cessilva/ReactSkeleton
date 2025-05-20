# BEM
La metodología BEM (Block, Element, Modifier) es una convención de nomenclatura para CSS que facilita la creación de componentes reutilizables y mantenibles. Fue desarrollada por Yandex y ayuda a los desarrolladores a entender la relación entre los estilos y el HTML de una página, promoviendo un enfoque modular para el diseño.

## Principios Fundamentales de BEM
Block (Bloque):

Un bloque es una unidad independiente y reutilizable de la interfaz, como un componente.
Los bloques no dependen de su contexto, lo que significa que pueden ser reutilizados en diferentes partes de un proyecto sin conflicto de estilo.
Ejemplo de nombre de bloque: menu, button, header.
Element (Elemento):

Un elemento es una parte de un bloque que no tiene sentido por sí solo y está semánticamente unido al bloque.
Representa un componente interno del bloque que tiene significado solo en el contexto de ese bloque.
Se denota con dos guiones bajos (__).
Ejemplo: menu__item, button__icon.
Modifier (Modificador):

Un modificador es una variación de un bloque o un elemento que altera su apariencia o comportamiento.
Se utiliza para definir diferentes estados o estilos del bloque o elemento.
Se denota con dos guiones (--).
Ejemplo: button--primary, menu__item--active.
Ejemplo de BEM
Consideremos un componente button con diferentes elementos y modificadores:

HTML
<button class="button button--primary">
  <span class="button__icon"></span>
  <span class="button__text">Click Me</span>
</button>

## Usar un Modificador (comments__button--reply)
Un modificador se utiliza cuando tienes un elemento base que comparte estilos comunes, pero necesitas aplicar variaciones específicas para ciertos casos. Los modificadores son ideales para situaciones en las que deseas mantener la relación clara entre un elemento y sus variaciones.

Cuándo Usar Modificadores:
Variaciones de Estilo: Cuando los botones comparten un conjunto de estilos básicos y solo algunas propiedades cambian (como color, tamaño, etc.).

Consistencia en el Bloque: Para asegurarte de que todas las variaciones de un botón están semánticamente relacionadas con el elemento base.

Claridad Semántica: Cuando quieres que sea claro que el botón es una variación del botón estándar dentro de un bloque específico.

Ventajas del Modificador:
Reutilización de Estilos: Facilita la reutilización del CSS compartido.
Organización: Mantiene las variaciones bien organizadas y relacionadas con el elemento base.
Escalabilidad: Fácil de extender para más variaciones del mismo elemento.
Usar una Clase Específica (comments__button-reply)
Crear una clase específica puede ser útil cuando la variación es lo suficientemente distinta o se usa de manera aislada, y no está estrechamente ligada a un elemento base compartido.

Cuándo Usar Clases Específicas:
Estilos Completamente Diferentes: Cuando el botón tiene un conjunto de estilos que no comparte con el elemento base.

Independencia: Cuando la variación es significativa y puede ser vista casi como un componente por sí misma.

Simplicidad: Si el uso de modificadores añade complejidad innecesaria.

Ventajas de la Clase Específica:
Simplicidad: A veces, es más sencillo y directo, especialmente si no hay elementos compartidos.
Independencia de Contexto: No depende de la estructura jerárquica de BEM.
Ejemplo Práctico
Modificador
<button class="comments__button comments__button--reply">Responder</button>
Clase Específica
<button class="comments__button-reply">Responder</button>
Conclusión
Usa Modificadores cuando quieras mantener una clara relación jerárquica y semántica dentro de un bloque, y cuando las variaciones son menores en comparación con el elemento base.
Usa Clases Específicas cuando la variación es significativa o cuando la independencia semántica es deseada.

### RESUME

Block
Standalone entity that is meaningful on its own.

Examples
header, container, menu, checkbox, input

Element
A part of a block that has no standalone meaning and is semantically tied to its block.

Examples
menu item, list item, checkbox caption, header title

Modifier
A flag on a block or element. Use them to change appearance or behavior.

Examples
disabled, highlighted, checked, fixed, size big, color yellow