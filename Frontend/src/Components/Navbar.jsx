import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link to="/" className="text-xl font-semibold">
        E-Commerce
      </Link>

      <Link to="/cart" className="relative">
        Cart
        {cartItems.length > 0 && (
          <span className="ml-1 text-sm font-medium">
            ({cartItems.length})
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
