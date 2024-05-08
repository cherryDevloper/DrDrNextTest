import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, clearCart } from "@/redux/slices/cartSlice";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
