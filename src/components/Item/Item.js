import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <container>
      <div className="Items">
        <h2>{name}</h2>
        <img src={img} alt={"Producto"} />
        <h3>${price}</h3>
        <Link to={`/item/${id}`}>
          <button>Comprar</button>
        </Link>
      </div>
    </container>
  );
};

export default Item;
