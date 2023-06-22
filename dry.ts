// ❌ Sin DRY
// type Size = '' | 'S' | 'M' | 'L'
// class Product {
//   constructor(public name: string = '', public price: number = 0, public size: Size = '') {}
//   toString() {
//     if (this.name.length <= 0) throw Error('Name is empty')
//     if (this.price <= 0) throw Error('Price is empty')
//     if (this.size.length <= 0) throw Error('Size is empty')
//     return `${this.name} (${this.size}) - $${this.price}`
//   }
// }
// const bluePants = new Product('Blue Pants', 10, 'M')
// console.log(bluePants.toString())

// ✅ Con DRY
type Size = '' | 'S' | 'M' | 'L'
class Product {
  constructor(public name: string = '', public price: number = 0, public size: Size = '') {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0) throw Error(`${key} is empty`)
          break
        case 'number':
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is empty`)
          break
        default:
          throw Error(`${typeof this[key]} is not valid`)
      }
    }
    return true
  }

  toString() {
    if (!this.isProductReady()) return
    return `${this.name} (${this.size}) - $${this.price}`
  }
}
const bluePants = new Product('Blue Pants', 10, 'M')
console.log(bluePants.toString())
