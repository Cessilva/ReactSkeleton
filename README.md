This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Run the development server
npm run dev
## Run the TSDoc
npm run docs


## EXTENSIONS
JSDoc generator:  for JavaScript, TypeScript and Typescript.


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
feat: Añadir funcionalidad de carga de imágenes
2. **Corregir un error**:
fix: Resolver el problema de visualización en dispositivos móviles
3. **Refactorizar código**:
refactor: Simplificar la lógica en la función de autenticación


### Importancia de la Estructura

Utilizar una estructura consistente en los mensajes de commit ayuda a mantener un historial claro y comprensible, facilitando la colaboración y la revisión de cambios en el proyecto.
