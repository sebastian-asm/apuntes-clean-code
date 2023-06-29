# SOLID y Clean Code

## Introducción

**Deuda Técnica:** es la falta de calidad en el código, que genera una deuda que impactará en costos (económicos) a futuro.

- Mantenimientos
- Refactorización de código
- Tiempo en comprender el código
- Tiempo adicional en la transferencia del código

Esquema de Deuda Técnica:

- **Imprudente:** actuar de forma conciente pero imprudente
- **Inadvertido:** falta de conocimientos y/o experiencia
- **Prudente y deliberada:** estar conciente de la Deuda Técnica, pero no se "paga" a tiempo
- **Prudente e inadvertida:** cuando el proyecto avanza y madura notamos que hay Deuda Técnica

¿Cómo se paga una Deuda Técnica? con al **refactorización**, el cual tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

La mala cálida del software siempre la terminará pagado o asumiendo alguien: cliente, proveedor con sus recursos o un desarrollador dedicando más tiempo a la refactorización.

**Clean Code:** es aquel código que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda.

- Nuestras variables deben nombres (comúnmente en inglés) pronunciables y expresivos (debería explicarse por sí sola).

  ❌ `const ddmmyy = new Date()`  
  ❌ `const tx = 0.19`  
  ✅ `const today = new Date()`  
  ✅ `const tax = 0.19`

- Ausencia de información técnica en nombres

  ❌ `class AbstractUser {}`  
  ❌ `interface UserInterface {}`  
  ✅ `class User {}`  
  ✅ `interface User {}`

- Nombres según tipo de datos

  **_Arrays_**:  
  ❌ `const fruit = ['manzana', 'pera', 'melón']`  
  ✅ `const fruitNames = ['manzana', 'pera', 'melón']`

  **_Boolean_**:  
  ❌ `const open = true`  
  ❌ `const active = false`  
  ❌ `const items = true`  
  ✅ `const isOpen = true`  
  ✅ `const isActive = false`  
  ✅ `const hasItems = true`

  **_Numbers_**:  
  ❌ `const cars = 5`  
  ✅ `const totalOfCards = 5`

  **_Functions_** (sus nombres deben representar acciones mediante un verbo y hacer **unicamente** lo que dice su nombre):  
  ❌ `sendEmailIfFieldsValid()`  
  ❌ `createUserIfNotExists()`  
  ✅ `sendEmail()`  
  ✅ `createUser()`

  `function sendMail(toWhom: string): boolean {}` -> Parámetro  
  `sendMail('sebastian@gmail.com')` -> Argumento

  Se recomienda limitar a 3 los parámetros posicionales, en caso de necesitar más parámetros se realiza mediante la desestructuración.

  ❌ `function sendEmail(toWhom: string, from: string, body: string, subject: string, apiKey: string): boolean {}`  
  ✅ `function sendEmail({ toWhom, from, body, subject, apiKey }: SendEmailOptions): boolean {}`

  Recomandaciones para las funciones:

  - Simplicidad
  - Tamaño reducido
  - Funciones de una sola línea sin causar complejidad
  - Menos de 20 líneas
  - Evitar el uso de "else"
  - Priorizar el uso de la condicional ternaria

  **_Class_** (deberían tener nombres formados por un sustantivo):  
  ❌ `class Manager {}`  
  ❌ `class Data {}`  
  ❌ `class Info {}`

  _3 preguntas para determinar un buen nombre para una clase..._

  ¿Qué hace exactamente?  
  ¿Comó realiza cierta tarea?  
  ¿Hay algo específico sobre su ubicación?

  _Estructura recomendada para una Clase_

  - Comenzar con lista de propiedades
    1. Propiedades estáticas
    2. Propiedades públicas al final
  - Métodos
    1. Empezar por los constructores estáticos
    2. Luego el constructor
    3. Seguidamente los métodos estáticos
    4. Métodos privados después
    5. Resto de métodos e instancias ordenados de mayor a menor importancia
    6. Getters y Setters al final

## Principio DRY (Don't Repeat Yourself)

Simplemente, es evitar duplicidad en nuestro código. Pero también incluye, simplificar pruebas, centralizar procesos y refactorizaciones.

👉 Archivo de ejemplo: `dry.ts`

## Principio de Responsabilidad Única

Cada clase debe tener responsabilidad sobre una sola parte de la funcionalidad proporcionada, ayudando a que el código sea más mantenible y escalable al asegurar que cada función o clase tiene un proposito bien definido.

👉 Archivo de ejemplo: `classes.ts`

## Comentarios en el código

Los comentarios deberían ser la excepción, no la regla. Por esto, nuestro código debe ser lo suficientemente auto explicativo.

Pero cuando nos encontramos con el uso de librerías de terceros, APIs, frameworks, etc., posiblemente será una situaciones en donde escribir un comentario será mucho mejor que dejar una solución compleja o un "hack" sin explicación.

## Uniformidad en el proyecto

Problemas similares, soluciones similares al escribir código.

✅ `const updateProduct = () => {}`  
✅ `const updateUser = () => {}`  
❌ `const modifyUser = () => {}`

La uniformidad no solo aplica al código sino también a la estructura de nuestro directorio de trabajo.

✅

```
-> components/
--> product-item/
      product-item.ts
--> product-list/
      product-list.html
      product-list.ts
```

También, la identación es algo primordial priorizando el estandar de la organización, convenciones del lenguaje y equipo de desarrollo. Simplemente con ver el código debe quedar claro que un bloque pertenece a una clase, función, etc.

## Code Smells - STUPID

El concepto está relacionado a posibles indicios a que algo no esta del todo bien en nuestro código.

- **Singleton**: patrón
- **Tight Coupling**: alto acoplamiento
- **Untestability**: código no testeable (unit test)
- **Premature Optimization**: optimizaciones prematuras
- **Indescriptive Naming**: nombres poco descriptivos
- **Duplication**: duplicidad de código, no aplicar el principio DRY

### Singleton

Garantiza una única instancia de la clase a lo largo de toda la aplicación, pero se considera Code Smell porque vive en el contexto global, puede ser modificado por cualquier y en cualquier momento, no es rastreable y es difícil de testear debido a su ubicación.

👉 Archivo de ejemplo: `code-smells/singleton.js`

### Tight Coupling

Lo ideal es tener un bajo acomplamiento y buena cohesión.

_Acoplamiento_: se refiere a cuán relacionadas o independientes son dos clases o módulos entre sí.

- Bajo acoplamiento significa que cambiar algo en una clase no debería afectar a otra.
- Tener un alto acoplamiento dificultaría el cambio y mantenimiento de su código, dado que las clases estan muy unidas, y hacer un cambio podría requerir una renovación completa del sistema.

Tener un alto acoplamiento trae las siguientes desventajas:

- Un cambio en un módulo por lo general provoca un efecto dominó de cambios en otros módulos.
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a mayor dependencia de otros módulos.
- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se debe incluir módulos dependientes.

_Cohesión_: se refiere a lo que la clase (o módulo) puede hacer.

- La baja cohesión significa que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
- Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

> "Queremos diseñar componentes que sean autocontenidos, autosuficientes e independientes. Con un objetivo y proposito bien definido"

👉 Archivo de ejemplo: `code-smells/high-coupling.ts`  
👉 Archivo de ejemplo: `code-smells/low-coupling.ts`

### Untestability

Debemos tener en mente las pruebas desde la creación del código, pero debido a las siguientes razones se puede convertir en algo dificilmente testeable por:

- Tener alto acoplamiento
- Muchas dependencias no inyectadas
- Dependencias en el contexto globl (tipo Singleton)

### Premature Optimization

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación (o sea, a las reglas de negocio).

No debemos ancitiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

- **Complejidad accidental**: cuando implementamos una solución compleja a la mínima indispensable.
- **Complejidad esencial**: la complejidad es inherente al problema.

Hay que tratar de mantener un balance entre ambos formas de complejidad.

### Indescriptive Naming

- Nombre de variables y funciones mal nombradas
- Nombres de clases genéricas
- Ser muy especificos (quizás muy largo) o demasiados genéricos al nombrarlas

### Duplication

Existen 2 formas de duplicidad:

- **Real**
  - El código es idéntico y cumple la misma función
  - Un cambio implicaría actualizar todo el código idéntico en varios lugares
  - Incrementa posibilidades de error humano al olvidar una parte para actualizar
  - Mayor cantidad de pruebas innecesarias
- **Accidental**
  - El código luce similar pero cumple distintas funciones
  - Cuando hay un cambio, sólo hay que modificar un sólo lugar
  - Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones

### Otros Code Smells

**Inflación**: cuando un método o clase contiene demasiadas líneas de códigos nos deberia hacer pensar en la "existencia" del mismo o hacerlo mucho más pequeño. Se puede solucionar creando pequeños submetódos que hagan una tarea específica y la haga bien.

**Obseción primitiva**: uso excesivo de tipos de datos primitivos en vez de objetos pequeños para tareas simples. Si notamos que tenemos una gran cantidad de variables con tipos primitivos, quizás se podrían agrupar de manera lógica en su propia clase, función, método u objeto.

**Lista larga de parámetros**: esto implica comenzar a tener más de 3 o 4 argumentos en un método. En este caso es necesario comprobar si todos esos argumentos son requeridos, o también, se puede crear un objeto o un tipo especial de dato para agruparlos y recibirlos en esa función.

_Grupo de acopladores_

**Feature envy**: un método accede a los datos de otro objeto más que a sus propios datos.

**Intimidad inapropiada**: cuando una clase usa métodos de otra clase, pero las "buenas" clases deben saber lo menos posible de otras.

**Cadenas de mensajes**: cuando una función A llama a B, C y D lo cual generaría problemas al agregar nuevas piezas a ese canal de comunicación.

**The middle man**: si una clase realiza solo una acción y esa acción es delegada a otra clase, en ese caso, habría que analizar porque existe esa clase. No deberiamos tener más funciones de las necesarias en nuestro código.

👉 Más información: [Refactoring Guru](https://refactoring.guru/)

## Principios SOLID

Estos principios (recomendaciones o sugerencias para escribir código de mejor calidad) nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

- S: Single Responsibility Principle (SRP)
- O: Open/Closed Principle (OCP)
- L: Liskov Substitution Principle (LSP)
- I: Interface Segregation Principle (ISP)
- D: Dependency Inversion Principle (DIP)

### S: Responsabilidad Única (SRP)

Una clase debería tener una unica responsabilidad, de lo contrario, nuestro código podría ser más rígido, difícil de leer y menos tolerante al cambio.

Como detectar violaciones a este principio:

- Nombres de clases y módulos demasiados genéricos
- Cambios en el código puede afectar la clase o módulo
- La clase involucra múltiples capaz
- Número elevado de importaciones
- Cantidad elevada de métodos públicos
- Excesivo número de líneas de código

👉 Archivo de ejemplo: `solid/srp.ts`

### O: Abierto y Cerrado (OCP)

Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas a la modificación. También se puede lograr incluso mediante el uso de la herencia o patrones de diseño de composición, como el patrón de estrategia.

Como detectar violaciones a este principio:

- Los cambios constantemente afectan nuestras clases y/o módulos
- Cuando una clase o módulo afecta muchas capas (presentación, almacenamiento, etc.)

👉 Archivo de ejemplo: `solid/ocp.ts`

### L: Sustitución de Liskov (LSP)

> Siendo "U" un subtipo de "T", cualquier instancia de "T" debería poder ser sustituida por cualquier instancia de "U" sin alterar las propiedades del sistema.

Esto nos indica que deberiamos tener clases o métodos que puedan recibir como argumentos subclases de él mismo y no tener modificaciones.

👉 Archivo de ejemplo: `solid/lsp.ts`

### I: Segregación de Interfaz (ISP)

Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan, esto quiere decir que las clases no deben verse obligadas a utilizar métodos que vienen siendo heredados por el padre si ese método no lo necesita o usa.

Como detectar violaciones a este principio:

- Si las interfaces que diseñamos nos obligan a violar el principio de responsabilidad única y sustitución de Liskov

👉 Archivo de ejemplo: `solid/isp.ts`

### D: Inversión de Dependencias (DIP)

Dependencia, significa que un módulo o componente requiere de otro para poder realizar su trabajo.

- Los módulos de alto nivel no deberían depender de módulos de bajo nivel
- Ambos deberían depender de abstracciones (las abstracciones dictan como deben lucir las clases de las cuales extiende)
- Las abstracciones no deberían depender de detalles
- Los detalles deberían depender de abstracciones

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.

Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con APIs externas, etc.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de abstracciones y no de concreciones, es que aumenta su tolerancia al cambio.

Cada cambio en un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren de cambios en las interfaces que implementa.

En algún momento nuestra App llegará a estar formada por muchos módulos. Cuando esto pase, es cuando debemos usar la inyección de dependencias.

👉 Archivo de ejemplo: `solid/dip/index.ts`
