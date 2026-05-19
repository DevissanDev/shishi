import ListProduct from "./ListProduct"
import type { Product } from "../types/productType";

const ListProductItems:Product[] =  [
    {
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        img: "https://images.rappi.com/products/tmpImg3b804b00-1432-4c2e-95f5-ccab28180c56.png?d=300x300&e=webp&q=10"
    },
    {
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        img: "https://images.rappi.com/products/tmpImg3b804b00-1432-4c2e-95f5-ccab28180c56.png?d=300x300&e=webp&q=10"
    },
    {
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        img: "https://images.rappi.com/products/tmpImg3b804b00-1432-4c2e-95f5-ccab28180c56.png?d=300x300&e=webp&q=10"
    },
    {
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 19.99,
        img: "https://images.rappi.com/products/tmpImg3b804b00-1432-4c2e-95f5-ccab28180c56.png?d=300x300&e=webp&q=10"
    }
]


const PageProduct = () => {
  return (
    <div>
      <h1>Products</h1>
      <ListProduct products={ListProductItems} />
    </div>
  )
}

export default PageProduct