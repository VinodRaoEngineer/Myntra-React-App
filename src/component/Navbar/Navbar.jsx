import "./navbar.css";
import logo from "../../assets/Myntra.logo.avif";
import profile from "../../assets/person_58dp_434343_FILL0_wght100_GRAD0_opsz40.png";
import favorite from "../../assets/favorite_51dp_000000_FILL0_wght100_GRAD-25_opsz20.png";
import shopping_bag from "../../assets/shopping_bag_51dp_000000_FILL0_wght200_GRAD-25_opsz20.png";

import { Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="left">
        <ul>
          <li className="image">
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li className="home-living">
            <a href="#">HOME&LIVING</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">
              STUDIO<sup>NEW</sup>
            </a>
          </li>
        </ul>

        <div className="search_bar">
          <span className="material-symbols-outlined" id="search_icon">
            search
          </span>
          <input
            className="search_input"
            type="text"
            placeholder="Search for product,brand and more"
          />
        </div>

        <div className="right">
          <ul>
            <li>
              <span className="material-symbols-outlined person"> person </span>
              
              <span className="profile">Profile</span>
              
            </li>

            <li>
              <span className="material-symbols-outlined Wishlist">
                favorite
              </span>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <span className="material-symbols-outlined" id="bag">
                shopping_bag
              </span>
              <a href="">Bag</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
