import { Outlet } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";
import MenuApp from "../MenuApp/MenuApp";

import MenuIconHambuger from "../../assets/icons/menu_24dp.svg";

const Layout = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <>
      <button onClick={toggleMenu} className="button-menu">
        <img src={MenuIconHambuger} />
      </button>
      {isMenuOpen && <MenuApp onClose={closeMenu} />}
      <>
        <Outlet />
      </>
    </>
  );
};

export default Layout;
