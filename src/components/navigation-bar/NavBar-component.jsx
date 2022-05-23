import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar-styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
