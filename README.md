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

## Principio DRY (Don't Repeat Yourself)

Simplemente, es evitar duplicidad en nuestro código. Pero también incluye, simplificar pruebas, centralizar procesos y refactorizaciones.
