import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return "No hay productos";
  } else {
    return (
      <div className="cartCount">
        <h1>Carrito</h1>
        <div className="cart">
          {cart.map((prod) => {
            return (
              <div className="cartDetail" key={prod.id}>
                <h1 className="cartName">{prod.name}</h1>
                <p className="totalProduct">Cantidad: {prod.quantity}</p>
              </div>
            );
          })}
        </div>
        <div className="total">Precio total: ${total} </div>
        <Link className="button" to="/checkout">
          Generar orden
        </Link>
      </div>
    );
  }
};

export default Cart;
