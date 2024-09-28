import React from 'react'
import CoffeeIcon from "@mui/icons-material/Coffee";
import ListAltIcon from "@mui/icons-material/ListAlt";

const ProductCard = ({product, index, openForm}) => {
  return (
    <>
        <div
            key={index}
            className="group relative rounded-md border px-4 py-3 bg-white"
            onClick={openForm}
        >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt={product.name}
                    src={require("../../assets/images/" +
                    product.photo +
                    ".jpg")}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <CoffeeIcon
                    sx={{ fontSize: "1.5rem", color: "#99613f" }}
                />
                <span className="px-2">{product.name}</span>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                <ListAltIcon
                    sx={{ fontSize: "1.5rem", color: "#99613f" }}
                />
                <span className="px-2">{product.orders}</span>
                </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
                {product.price}
            </p>
            </div>
        </div>
    </>
  )
}
export default ProductCard;