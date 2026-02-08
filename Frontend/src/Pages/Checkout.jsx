import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOrderPlaced(true);
  };

  
  
  if (orderPlaced) {
      return (
          <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">
            Order placed successfully!
        </h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
}

if (cartItems.length === 0) {
return (
  <div className="text-center mt-20">
    <p className="text-lg">Your cart is empty</p>
    <Link to="/" className="text-blue-600 mt-4 inline-block">
      Go back to shopping
    </Link>
  </div>
);
}


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Shipping Address"
            required
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>

        {/* Summary */}
        <div className="border p-4 rounded">
          <h2 className="font-medium mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>₹ {item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />

          <p className="font-semibold">
            Total: ₹ {totalAmount}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
