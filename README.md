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
