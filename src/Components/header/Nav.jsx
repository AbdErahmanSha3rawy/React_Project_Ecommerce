import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./header.css";

const Nav = () => {
  const nav_links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <nav className="nav">
      <div className="category_nav">
        <div className={`category_btn`} onClick={() => setIsOpened(!isOpened)}>
          <IoMdMenu />
          <p>Browse Category</p>
          <MdOutlineArrowDropDown />
          <div className={`category_nav_list ${isOpened ? "active" : ""}`}>
            {categories.map((category, index) => (
              <Link key={category.slug} to={`category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav_links">
          {nav_links.map((item) => (
            <li
              key={item.link}
              className={location.pathname === item.link ? "active" : ""}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
