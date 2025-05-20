
## HOC
const WithCall = (Component) => {
return (props) => <Component {...props} call={ () => alert("success!")} />};

const MyComponent = ({ call }) => {
return <button onClick={call}>Click me!</button>;
};

const MyComponentWithCall = WithCall(MyComponent);

## ALTO ACOMPLAMIENTO

```plaintext
const MyComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
  fetch("my-endpoint")
  .then((response) => response.json())
  .then((data) => setData(data));
  }, []);

  if (!data) {
    return "loading...";
  }
  return <div>{data.content}</div>;
};
```
En este caso, fetch es una dependencia porque el componente depende de él
para que pueda funcionar correctamente (tiene alto acoplamiento).


## INYECCIONDE DEPENDENCIAS E INVERSION DE DEPENDENCIAS (SIEMPRE DEPENDER DE ABSTRACTOS Y NO DE CONCRETOS ) 
Para eso podemos usar un HOC o un React Context

```plaintext

interface DataFetcher {
  fetchData(): Promise<any[]>;
}

function MyComponent({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

class APIDataFetcher implements DataFetcher {
  async fetchData() {
    const response = await fetch('/api/data');
    return await response.json();
  }
}

class MockDataFetcher implements DataFetcher {
  async fetchData() {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  }
}

function withFetchData(DataFetcherImpl: new () => DataFetcher) {
  return (props) => {
    const [data, setData] = useState([]);
    const dataFetcher = new DataFetcherImpl();
    useEffect(() => {
      dataFetcher.fetchData().then(setData);
    }, [dataFetcher]);

    return <WrappedComponent data={data} {...props} />;
  };
}

const MyComponentWithAPIData = withFetchData(APIDataFetcher)(MyComponent);
const MyComponentWithMockData = withFetchData(MockDataFetcher)(MyComponent);

```
De esta manera, hemos aplicado la inyección de dependencias y la inversión de dependencias para desacoplar MyComponent de la implementación de fetchData. Esto nos permite cambiar la forma en que se obtienen los datos sin tener que modificar el código de MyComponent, lo que mejora la modularidad, la testabilidad y la mantenibilidad de nuestra aplicación.


## En qué casos aplicar los Custom Hooks
Para saber si necesitas crear un custom hook considera lo siguiente:
- Tienes componentes que repiten la lógica de cómo actualizan su
estado. Ejemplos:
- Formularios.
- Suscripciones.
- Temporizadores.
- Animaciones.
- Refactorizar un componente de tipo clase que maneje un estado
interno muy complejo y que sea difícil de mantener. Podrías crear un
hook para simplificar la lógica de estado quedando tu componente
más limpio.
Esta lista son sólo algunos ejemplos. Ten en mente que siempre que haya
lógica de estado que se pueda abstraer, es posible hacerlo con un hook.

## Compound Component Pattern

Es una técnica poderosa para crear componentes React más robustos, extensibles y fáciles de mantener. Al encapsular la lógica en un contexto compartido, se logra una mejor separación de concerns y se facilita la reutilización y extensión de los componentes.

El Compound Component Pattern es especialmente útil en los siguientes casos:

Componentes Complejos con Múltiples Subcomponentes:

Cuando tienes un componente principal que contiene varios subcomponentes relacionados, como un menú desplegable, un modal, o un formulario con diferentes secciones.
El patrón permite organizar y encapsular la lógica de cada subcomponente de manera más limpia y modular.
Componentes con Múltiples Variantes o Configuraciones:

Cuando tu componente principal puede tener diferentes variantes o configuraciones, como diferentes estilos, tamaños o comportamientos.
El contexto compartido permite controlar y coordinar estas variantes de una manera más centralizada y extensible.
Componentes con Jerarquías Anidadas:

Cuando tienes componentes que se componen de otros componentes, que a su vez se componen de otros, creando una jerarquía compleja.
El patrón ayuda a manejar esta jerarquía de una manera más organizada y legible.
Componentes con Lógica Compartida:

Cuando varios subcomponentes comparten la misma lógica o estado, como un formulario con campos relacionados.
El contexto compartido permite encapsular y reutilizar esta lógica de manera eficiente.
Componentes con Extensibilidad en Mente:

Cuando anticipas que tu componente principal necesitará ser extendido en el futuro con nuevos subcomponentes o funcionalidades.
El patrón facilita la adición de nuevos subcomponentes sin tener que reescribir o modificar el código existente.


? Aun falta buscarlos 

Algunos patrones de diseño comunes en React.js incluyen:
Patrón contenedor-componente (Smart-Dumb Component Pattern):

Este patrón separa los componentes en dos categorías: contenedores (también conocidos como componentes inteligentes) y componentes de presentación (también conocidos como componentes tontos). Los contenedores se encargan de gestionar el estado, obtener datos de las API y manejar la lógica de negocio, mientras que los componentes de presentación se centran únicamente en mostrar los elementos de la interfaz de usuario en función de los accesorios recibidos de los contenedores.

Render Props Pattern:

El patrón render props implica pasar una función como prop a un componente, permitiendo al componente controlar lo que se renderiza dentro de su subárbol. Este patrón permite a los componentes compartir código y lógica de forma flexible y componible, fomentando la reutilización de código y la separación de preocupaciones.

Patrón de componentes de orden superior (HOC):

Los componentes de orden superior son funciones que aceptan un componente como entrada y devuelven una versión mejorada de ese componente con funcionalidad adicional. Los HOC permiten encapsular y reutilizar en varios componentes aspectos transversales como la autenticación, la autorización y la reutilización de código.

Patrón API de contexto:

La API Context es una característica integrada de React que permite a los componentes compartir estado sin tener que pasar props a través de componentes intermedios. Context proporciona una forma de propagar datos a través del árbol de componentes sin pasar explícitamente props por la jerarquía, por lo que es útil para gestionar el estado global, los temas y los ajustes de localización.

Patrón Redux:

Redux es una librería de gestión de estados comúnmente utilizada con React para gestionar el estado de aplicaciones complejas de forma predecible y escalable. Redux sigue principios como un flujo de datos unidireccional, inmutabilidad y una única fuente de verdad, proporcionando a los desarrolladores un almacén centralizado para gestionar el estado de la aplicación.

Ganchos Patrón:

Introducidos en React 16.8, los hooks son funciones que permiten a los desarrolladores utilizar el estado y otras características de React en componentes funcionales. Con hooks como useState, useEffect, useContext y useReducer, los desarrolladores pueden encapsular la lógica y el estado dentro de componentes funcionales, eliminando la necesidad de componentes de clase y promoviendo un estilo de programación más funcional.

Estos son solo algunos ejemplos de patrones de diseño utilizados habitualmente en el desarrollo con React.js. Al entender y aplicar estos patrones de manera efectiva, Desarrolladores de React.js puede escribir código más limpio y fácil de mantener y crear aplicaciones robustas y escalables con React.

?
Componentes Controlados vs No Controlados
Render Props: Compartir código entre componentes usando props
Higher-Order Components (HOC): Funciones que toman un componente y devuelven uno nuevo
Compound Components: Componentes que trabajan juntos para formar una API cohesiva
Context API: Para pasar datos a través del árbol de componentes sin props drilling