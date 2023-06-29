// ❌ sin SRP
// interface Product {
//   id: number
//   name: string
// }

// class ProductBloc {
//   loadProduct(id: number) {
//     console.log('Producto: ', { id, name: 'OLED Tv' })
//   }

//   saveProduct(product: Product) {
//     console.log('Guardando en base de datos', product)
//   }

//   notifyClients() {
//     console.log('Enviando correo a los clientes')
//   }

//   onAddToCart(productId: number) {
//     console.log('Agregando al carrito ', productId)
//   }
// }

// const productBloc = new ProductBloc()

// productBloc.loadProduct(10)
// productBloc.saveProduct({ id: 10, name: 'OLED TV' })
// productBloc.notifyClients()
// productBloc.onAddToCart(10)

// ✅ Con SRP
interface Product {
  id: number
  name: string
}

class ProductService {
  getProduct(id: number) {
    console.log('Producto: ', { id, name: 'OLED TV' })
  }

  saveProduct(product: Product) {
    console.log('Guardando en base de datos', product)
  }
}

class Mailer {
  sendEmail(email: string) {
    console.log('Enviando correo al cliente', email)
  }
}

class CartBloc {
  private items: Object[] = []
  addToCart(productId: number) {
    console.log('Agregando al carrito ', productId)
  }
}

class ProductBloc {
  private productService: ProductService
  private mailer: Mailer

  constructor(productService: ProductService, mailer: Mailer) {
    this.productService = productService
    this.mailer = mailer
  }

  loadProduct(id: number) {
    this.productService.getProduct(id)
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product)
  }

  notifyClients(email: string) {
    this.mailer.sendEmail(email)
  }
}

const productService = new ProductService()
const mailer = new Mailer()
const productBloc = new ProductBloc(productService, mailer)
const cartBloc = new CartBloc()

productBloc.loadProduct(10)
productBloc.saveProduct({ id: 10, name: 'OLED TV' })
productBloc.notifyClients('sebas@sebas.com')
cartBloc.addToCart(10)
