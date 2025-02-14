
## Corriendo el programa

- Corre el servidor de desarrollo:
```npm run dev```
- Genera la documentación de TypeDoc:
```npm run docs```


## Estructura del Mensaje de Commit
Para asegurar la coherencia y claridad en los mensajes de commit, utilizamos el siguiente formato:

```<tipo>(<alcance>): <asunto>```

### Componentes del Mensaje

- **tipo**: Describe la naturaleza del cambio. Los tipos permitidos son:
  - `feat`: Nueva funcionalidad.
  - `fix`: Corrección de errores.
  - `docs`: Cambios en la documentación.
  - `style`: Cambios que no afectan la lógica (formato, espaciado, etc.).
  - `refactor`: Cambios en el código que no corrigen errores ni añaden características.
  - `perf`: Mejoras en el rendimiento.
  - `test`: Añadir o modificar pruebas.
  - `chore`: Cambios en el mantenimiento del proyecto (configuraciones, scripts, etc.).
  - `ci`: Cambios en los archivos de configuración de CI/CD.

- **alcance** (opcional): Especifica el área del código afectada por el cambio (ej., nombre de componentes o módulos).

- **asunto**: Una breve descripción del cambio, escrita en minúsculas y sin punto al final.

### Ejemplos de Mensajes de Commit Válidos

1. **Agregar nueva funcionalidad**:
`feat(components-image): Añadir funcionalidad de carga de imágenes`
2. **Corregir un error**:
`fix: Resolver el problema de visualización en dispositivos móviles`
3. **Refactorizar código**:
`refactor: Simplificar la lógica en la función de autenticación`

### Ejemplos de Errores

1. **Sin tipo especificado**:
`Añadir funcionalidad de carga de imágenes`
2. **Tipo incorrecto**:
`update: Resolver el problema de visualización en dispositivos móviles`
3. **Asunto demasiado largo**:
`feat(componentes-imagenes): Esta es una descripción extremadamente larga que supera el límite de 150 caracteres y no debería ser aceptada en un commit`
4. **Uso incorrecto de mayúsculas y separaciones**:
`feat(Componentes Imágenes): El alcance debería estar en kebab-case (en minúsculas y con guiones)`

### Importancia de la Estructura

Utilizar una estructura consistente en los mensajes de commit ayuda a mantener un historial claro y comprensible, facilitando la colaboración y la revisión de cambios en el proyecto.


## Extensiones Utilizadas
- JSDoc generator:  for JavaScript, TypeScript and Typescript.
