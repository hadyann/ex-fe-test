import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menus = [
    {
      title: "Article",
      items: [
        { name: "All post", path: "/" },
        { name: "Add new", path: "/new" },
        { name: "Preview", path: "/preview" },
      ],
    },
  ];
  return (
    <div className="navbar">
      <div className="navLogo padding12lr">
        <div className="logoTitle mb-20">Article</div>
      </div>
      <div className="navMenus">
        {menus.map((menu) => (
          <div className="navMenu">
            <div className="menuTitle">{menu.title}</div>
            {menu.items.map((item) => (
              <div className="menuItems">
                <NavLink
                  to={`${item.path}`}
                  className={({ isActive }) =>
                    isActive ? "menuItem active" : "menuItem"
                  }
                >
                  <span className="itemSpan"></span>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
