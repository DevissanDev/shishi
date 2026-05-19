import CardProduct from "./CardProduct";
import type {Product} from "../types/productType";

type ListProductProps = {
    products: Product[]
}


const ListProduct = ({ products }: ListProductProps) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, index) => (
        <CardProduct key={index} {...product} />
      ))}
    </div>
  )
}

export default ListProduct