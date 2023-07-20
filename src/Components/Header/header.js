import React from "react";
import style from "./header.module.css"
import headerIcon from "../../utills/headerIcon.svg"

export class Header extends React.Component{
    render() {
        return (
          <div className={style.header}>
            <div>
              <img src={headerIcon} alt="SVG-icon" />
            </div>
            <div>
              <ul>
                <li>About Us</li>
                <li>Our Product</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
        );
    }
}