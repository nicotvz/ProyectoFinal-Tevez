import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useParams } from "react-router-dom";

import { getCategories } from "../../service/firebase/firestore/categories";
import { useAsync } from "../../hooks/useAsync";

const NavBar = () => {
  const { categoriesId } = useParams();

  const getCategoriesWithId = () => getCategories(categoriesId);

  const {
    data: categories,
    error,
    loading,
  } = useAsync(getCategoriesWithId, [categoriesId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Vuelva a cargar la pagina</h1>;
  }

  return (
    <header>
      <nav className="NavBar">
        <Link to="/" className="Titulo">
          NGaming
        </Link>
        <div className="Categories">
          {categories.map((cat) => {
            return (
              <NavLink
                key={cat.id}
                to={`/category/${cat.slug}`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                {cat.label}
              </NavLink>
            );
          })}
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
