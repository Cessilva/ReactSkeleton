## Tipos en Typescript

1. Tipos primitivos:

``````string, number, boolean, null, undefined, symbol, bigint``````

2. Tipos de objeto:

```Object, Array<T>, Tuple<T1, T2, ...>, Function, Record<K, T>```

- Object: Representa un objeto genérico. Puedes usarlo cuando necesitas crear un objeto sin una estructura predefinida.

```const person: Object = { name: 'John', age: 30 };```

- Array: Representa una colección de elementos del mismo tipo T.

```const numbers: Array<number> = [1, 2, 3, 4, 5];```

- Tuple<T1, T2, ...>: Representa una lista de elementos con tipos específicos y un tamaño fijo.

```const person: [string, number] = ['John', 30];```

- Function: Representa una función.

```const add = (a: number, b: number): number => a + b;```

- Record<K, T>: Representa un objeto donde las claves son del tipo K y los valores son del tipo T.

```
    type ButtonVariant = 'primary' | 'secondary' | 'link';
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    link: 'bg-transparent text-blue-500 hover:underline',
  };
```

3. Tipos de unión y intersección:

```T1 | T2, T1 & T2```

- T1 | T2: Representa un tipo que puede ser T1 o T2.

```type Status = 'pending' | 'success' | 'error';```

- T1 & T2: Representa un tipo que tiene las propiedades de ambos T1 y T2.

```type Person = { name: string } & { age: number };```

4. Tipos de función:

```(args: T1, T2, T3, etc...) => R```

5. Tipos genéricos:

```T, K, V, etc.```

- T, K, V, etc.: Representan tipos que se definen en el momento de la invocación.

function identity<T>(arg: T): T {
  return arg;
}
// Uso de la función identity con tipos genéricos
const stringResult = identity<string>('hello');
const numberResult = identity<number>(42);

6. Tipos de utilidad:

```Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, etc.```
- Partial: Crea un nuevo tipo a partir de T donde todas las propiedades son opcionales.

Ejemplo:
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;
// PartialPerson = { name?: string; age?: number; }

- Required: Crea un nuevo tipo a partir de T donde todas las propiedades son requeridas.

Ejemplo:
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;
// RequiredPerson = { name: string; age: number; }

- Readonly: Crea un nuevo tipo a partir de T donde todas las propiedades son de solo lectura.

Ejemplo:
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
// ReadonlyPerson = { readonly name: string; readonly age: number; }

- Record<K, T>: Crea un nuevo tipo de objeto donde las claves son de tipo K y los valores son de tipo T.

Ejemplo:
type Grades = Record<string, number>;
// Grades = { [key: string]: number; }

- Pick<T, K>: Crea un nuevo tipo a partir de T seleccionando solo las propiedades especificadas en K.

Ejemplo:
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonName = Pick<Person, 'name'>;
// PersonName = { name: string; }

- Omit<T, K>: Crea un nuevo tipo a partir de T omitiendo las propiedades especificadas en K.

Ejemplo:
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonWithoutEmail = Omit<Person, 'email'>;
// PersonWithoutEmail = { name: string; age: number; }

- Exclude<T, U>: Crea un nuevo tipo a partir de T excluyendo los tipos que son asignables a U.

Ejemplo:
type NumericTypes = number | string | boolean;
type NonNumericTypes = Exclude<NumericTypes, number>;
// NonNumericTypes = string | boolean

- Extract<T, U>: Crea un nuevo tipo a partir de T incluyendo solo los tipos que son asignables a U.

Ejemplo:
type NumericTypes = number | string | boolean;
type OnlyNumericTypes = Extract<NumericTypes, number>;
// OnlyNumericTypes = number

- NonNullable: Crea un nuevo tipo a partir de T excluyendo null y undefined.

Ejemplo:
type NullableType = string | null | undefined;
type NonNullableType = NonNullable<NullableType>;
// NonNullableType = string

- Parameters: Crea un nuevo tipo de tupla a partir de los tipos de los parámetros de una función T.

Ejemplo:
function greet(name: string, age: number): void {}

type GreetParameters = Parameters<typeof greet>;
// GreetParameters = [string, number]

- ReturnType: Crea un nuevo tipo a partir del tipo de retorno de una función T.

Ejemplo:
function calculateArea(width: number, height: number): number {
  return width * height;
}

type AreaReturnType = ReturnType<typeof calculateArea>;
// AreaReturnType = number

- InstanceType: Crea un nuevo tipo a partir del tipo de instancia de una clase constructora T.

Ejemplo:
class Person {
  constructor(name: string, age: number) {}
}

type PersonInstance = InstanceType<typeof Person>;
// PersonInstance = Person

- ThisParameterType: Crea un nuevo tipo a partir del tipo del parámetro this de una función T.

Ejemplo:
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(this: Person): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

type ThisType = ThisParameterType<Person['greet']>;
// ThisType = Person

- OmitThisParameter: Crea un nuevo tipo a partir de T omitiendo el parámetro this.

Ejemplo:
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(this: Person): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

type GreetFunction = OmitThisParameter<typeof Person.prototype.greet>;
// GreetFunction = () => void

- ConstructorParameters: Crea un nuevo tipo de tupla a partir de los tipos de los parámetros del constructor de una clase T.

Ejemplo:
class Person {
  constructor(name: string, age: number) {}
}

type PersonConstructorParams = ConstructorParameters<typeof Person>;
// PersonConstructorParams = [string, number]

7. Tipos de interfaz y tipo de clase:

```interface, type```

8. Tipos de módulo:

```import, export```

9. Tipos de control de flujo:

```never, unknown, any```

- never: Representa un tipo que nunca ocurre. Puede ser útil para manejar casos imposibles o errores.

function throwError(message: string): never {
  throw new Error(message);
}

- unknown: Representa un tipo que puede ser cualquier tipo. Es más seguro que any porque requiere una comprobación de tipo antes de usarlo.

let value: unknown;
value = 42;
value = 'hello';

if (typeof value === 'string') {
  console.log(value.toUpperCase()); // Seguro, value es de tipo string
}

- any: Representa cualquier tipo. Debe usarse con precaución, ya que desactiva la comprobación de tipos de TypeScript.

let value: any = 42;
value = 'hello';
value.toUpperCase(); // Seguro, pero se pierde el beneficio de la comprobación de tipos