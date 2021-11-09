export default function Header({ userStatus }) {
  return (
    <header>
      {/* displaying different header based on customer type */}
      {userStatus === "seller" ? (
        // header for seller
        <div className="header-wrapper">
          <h1>Eatable</h1>
          <ul className="header-menus">
            <li className="header-menus-item">Edit profile</li>
            <li>Log out</li>
          </ul>
        </div>
      ) : userStatus === "buyer" ? (
        // header for buyer
        <div className="header-wrapper">
          <h1>Eatable</h1>
          <ul className="header-menus">
            <li className="header-menus-item">Edit profile</li>
            <li className="header-menus-item">Cart</li>
            <li>Log out</li>
          </ul>
        </div>
      ) : (
        <h1>Eatable</h1>
      )}
    </header>
  );
}
