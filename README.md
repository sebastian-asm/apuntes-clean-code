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

- Nuestras variables deben nombres (comúnmente en inglés) pronunciables y expresivos.

❌ `const ddmmyy = new Date()`  
❌ `const tx = 0.19`  
✅ `const today = new Date()`  
✅ `const tax = 0.19`

- Ausencia de información técnica en nombres

❌ `class AbstractUser {}`  
❌ `interface UserInterface {}`  
✅ `class User {}`  
✅ `interface User {}`
