import type { Product } from "../types/productType";
import { CirclePlus } from "lucide-react";

type CardProductProps = Product & {
  actionbutton?: () => void;
};

const CardProduct = ({
  name,
  description,
  price,
  img,
  actionbutton,
}: CardProductProps) => {
  return (
    <div className="flex h-full min-w-60 max-w-80 border-2 border-red-500 justify-between ">
      <div className="flex w-full flex-col text-left  justify-center p-3">
        <div>{name}</div>
        <div>{description}</div>
        <div>{price.toFixed(3)} $</div>
      </div>
      <div className="h-auto w-35 relative ">
        <img className="h-full w-full object-contain" src={img} alt={name} />
        <div className="absolute top-0 right-0">
          <button
            className="bg-blue-500 text-white p-1 py-2 rounded hover:bg-blue-600 text-xs w-10 h-10 flex items-center justify-center"
            onClick={actionbutton}
          >
            <CirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
