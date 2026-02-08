import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Service/api";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-96 object-cover rounded"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-2xl font-bold mt-6">₹ {product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
