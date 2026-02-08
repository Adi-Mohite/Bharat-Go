import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-medium">{item.title}</h2>
            <p className="text-gray-600">
              ₹ {item.price} × {item.quantity}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          Total: ₹ {totalAmount}
        </h2>

        <Link
          to="/checkout"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
