import { Link } from "react-router-dom";
export default function Header({ userStatus }) {
  return (
    <header>
      {/* displaying different header based on customer type */}
      {userStatus === "seller" ? (
        // header for seller
        <div className="header-wrapper">
          <h1>
            <Link to="/">Eatable</Link>
          </h1>
          <ul className="header-menus">
            <li className="header-menus-item">
              <Link to="/seller-profile">Profile</Link>
            </li>
            <li>Log out</li>
          </ul>
        </div>
      ) : userStatus === "buyer" ? (
        // header for buyer
        <div className="header-wrapper">
          <h1>
            <Link to="/">Eatable</Link>
          </h1>
          <ul className="header-menus">
            <li className="header-menus-item">
              <Link to="/buyer-profile">Profile</Link>
            </li>
            <li className="header-menus-item">
              <Link to="/cart">Cart </Link>
            </li>
            <li>Log out</li>
          </ul>
        </div>
      ) : (
        <h1>Eatable</h1>
      )}
    </header>
  );
}
