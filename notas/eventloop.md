## El Event Loop
El event loop es un mecanismo que permite a JavaScript realizar operaciones no bloqueantes, a pesar de ser un lenguaje de un solo hilo. Esto se logra mediante la delegación de tareas a APIs del navegador (o del entorno, como Node.js) y el uso de colas de mensajes para gestionar las operaciones asíncronas.

Funcionamiento Básico
Ejecución de la Pila (Call Stack):

JavaScript ejecuta código en la pila de llamadas. Cada vez que se llama a una función, se añade a la pila. Cuando la función termina, se elimina de la pila.
Callback Queue:

Las funciones asíncronas, como setTimeout, fetch, etc., colocan sus callbacks en la cola de mensajes una vez completadas.
Event Loop:

El event loop revisa continuamente la pila de llamadas y la cola de mensajes. Si la pila está vacía, toma el primer mensaje de la cola y lo coloca en la pila para su ejecución.
setTimeout y Diferencias de Tiempo
setTimeout(fn, 0): Este establece un temporizador para ejecutar fn después de que se vacíe la pila de llamadas actual. Aunque el tiempo es 0, la ejecución del callback se colocará en la cola de mensajes, y sólo se ejecutará cuando el event loop pueda atenderlo, lo que garantiza que fn se ejecute después de cualquier código sincrónico que esté actualmente en ejecución.

setTimeout(fn, 1000): Aquí, fn se coloca en la cola de mensajes para ejecutarse después de al menos 1000 milisegundos. Este retraso hace que la ejecución del callback ocurra después de ese tiempo, pero sigue dependiendo de que la pila esté vacía.

Renderizado y Bloqueo del Render
El renderizado en el navegador se refiere a la actualización de la interfaz de usuario. Los navegadores intentan mantener una frecuencia de actualización de 60 FPS (frames por segundo), lo que significa que intentan renderizar cada 16.67 ms.

Por qué el Renderizado Puede Bloquearse
Operaciones Sincrónicas Pesadas: Si tienes código sincrónico que tarda mucho en ejecutarse (por ejemplo, un bucle intensivo), esto puede bloquear el event loop, evitando que el navegador atienda otras tareas, como el renderizado o la ejecución de callbacks asíncronos.

Bloqueo del Main Thread: El hilo principal se utiliza tanto para manipular el DOM como para ejecutar JavaScript. Si el hilo principal está ocupado ejecutando código JavaScript, no puede responder a otras tareas, como renderizar la interfaz de usuario.

Cómo Evitar el Bloqueo
Divide y Vencerás (Chunking): Si tienes tareas pesadas, divídelas en partes más pequeñas y utiliza técnicas como setTimeout o requestAnimationFrame para permitir que el navegador tenga tiempo para renderizar entre estas partes.

Operaciones Asíncronas: Utiliza APIs asíncronas para operaciones que pueden bloquear, como consultas de red o acceso a bases de datos, para que el navegador pueda seguir manejando la interfaz de usuario.

Web Workers: Para tareas realmente intensivas, considera usar Web Workers, que permiten ejecutar scripts en un hilo separado, evitando que bloqueen el hilo principal.

## RUNTIME
Un runtime (o entorno de ejecución) es el conjunto de recursos, herramientas y servicios necesarios para ejecutar un programa o una aplicación. En el contexto de lenguajes de programación como JavaScript, un runtime proporciona el soporte necesario para que el código se ejecute correctamente. Vamos a desglosar qué es un runtime y las partes que lo componen, especialmente en el contexto de JavaScript.

¿Qué es un Runtime?
En términos simples, un runtime es el ambiente en el que se ejecuta un programa. Incluye todo lo necesario para que el código funcione, desde la ejecución de instrucciones básicas hasta el manejo de operaciones más complejas como la gestión de memoria, manejo de errores, y más. En el caso de JavaScript, el runtime puede referirse tanto al entorno del navegador como a Node.js.

Componentes de un Runtime
Dependiendo del lenguaje y el entorno, un runtime puede tener diferentes componentes, pero en el caso de JavaScript, especialmente en un navegador o en Node.js, los componentes clave suelen ser:

Motor de JavaScript:

El motor es el núcleo del runtime. Es responsable de interpretar o compilar el código JavaScript en código máquina que puede ser ejecutado por el CPU.
Ejemplos de motores incluyen V8 (usado por Chrome y Node.js), SpiderMonkey (usado por Firefox), y JavaScriptCore (usado por Safari).
Call Stack (Pila de Llamadas):

Una estructura que rastrea las funciones que están siendo ejecutadas. Cada vez que se llama a una función, se añade a la pila, y se elimina cuando la función termina.
Heap (Montón):

Un área de memoria donde se almacenan objetos y datos dinámicos. El heap es esencial para la gestión de memoria.
Event Loop:

Un mecanismo que permite que JavaScript maneje operaciones asíncronas. Monitorea la pila de llamadas y la cola de mensajes, ejecutando funciones de la cola cuando la pila está vacía.
Callback Queue (Cola de Mensajes):

Una cola que almacena callbacks y funciones asíncronas que están listas para ejecutarse una vez que la pila de llamadas esté vacía.
APIs del Entorno:

En un navegador, estas incluyen APIs del DOM, setTimeout, fetch, XMLHttpRequest, etc.
En Node.js, incluyen módulos del sistema de archivos, red, procesos, etc.
Módulo de Gestión de Módulos:

Maneja la carga y ejecución de módulos en un programa. En Node.js, esto se maneja con require y import.
Manejo de Excepciones:

Proporciona mecanismos para manejar errores y excepciones que puedan ocurrir durante la ejecución del programa.
Ejemplo: V8 Runtime
Tomemos el ejemplo del motor V8, que es utilizado tanto por Chrome como por Node.js. V8 es responsable de:

Compilar JavaScript a código máquina: V8 compila el código JavaScript directamente a código máquina para mejorar el rendimiento.
Gestión de Memoria: V8 incluye un recolector de basura que gestiona automáticamente la memoria, liberando espacio ocupado por objetos que ya no son necesarios.
Optimización de Ejecución: Utiliza técnicas como la compilación Just-In-Time (JIT) para optimizar la ejecución del código.



## Tareas, Macrotasks y Microtasks
Task Queue (Cola de Tareas):

Es una cola que contiene tareas que deben ser ejecutadas por el event loop.
Las tareas típicas en esta cola incluyen eventos del DOM, solicitudes de red completadas, y temporizadores como setTimeout.
Macrotasks:

Las macrotasks son las tareas estándar que se manejan en la task queue.
Ejemplos de macrotasks incluyen:
setTimeout
setInterval
setImmediate (en Node.js)
Solicitudes de red (como XMLHttpRequest o fetch completados)
Estas tareas se ejecutan una vez que la pila de llamadas está vacía.
Microtasks:

Las microtasks son una categoría especial de tareas que tienen prioridad sobre las macrotasks.
Ejemplos de microtasks incluyen:
Promesas resueltas (callbacks de .then)
process.nextTick (en Node.js)
Mutations Observers
Las microtasks se ejecutan inmediatamente después de que la función en ejecución en la pila de llamadas termina, y antes de que el event loop vuelva a la cola de macrotasks.
Prioridad de Ejecución
Microtasks tienen prioridad sobre macrotasks. Esto significa que, una vez que una microtask es añadida a la cola, todas las microtasks pendientes se ejecutan antes de que el event loop vuelva a procesar las macrotasks.
Esta prioridad se debe a que las microtasks suelen representar tareas críticas relacionadas con la finalización de cálculos asincrónicos, como la continuación de una promesa, que a menudo se requiere antes de que se pueda progresar con otras tareas.
Ciclo de Ejecución del Event Loop
Ejecutar el Script Principal: El código sincrónico se ejecuta primero.
Microtask Checkpoint: Después de que la ejecución actual de la pila de llamadas se complete, el event loop atiende todas las microtasks en la cola antes de continuar.
Procesar Macrotasks: Una vez que la cola de microtasks está vacía, el event loop procesa la siguiente macrotask.
Repetir: Este ciclo se repite, asegurando que las microtasks siempre se ejecuten tan pronto como sea posible, después de la ejecución actual de la pila de llamadas.
Ejemplo de Prioridad
console.log('Inicio');

setTimeout(() => {
  console.log('Macrotask - setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Microtask - Promise');
  })
  .then(() => {
    console.log('Otra Microtask - Promise');
  });

console.log('Fin');
Salida:

Inicio
Fin
Microtask - Promise
Otra Microtask - Promise
Macrotask - setTimeout