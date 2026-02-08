import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="h-48 w-full object-cover rounded"
      />

      <h2 className="mt-3 font-medium text-lg truncate">
        {product.title}
      </h2>

      <p className="text-gray-600 mt-1">₹ {product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-3 text-sm text-blue-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default ProductCard;
