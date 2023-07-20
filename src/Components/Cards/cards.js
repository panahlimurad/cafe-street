import React from "react";
import style from "./cards.module.css"

export class Cards extends React.Component{
    render() {
        return (
          <div className={style.cards}>
            <div className={style.imageContainer}>
              <img src="https://www.acouplecooks.com/wp-content/uploads/2021/11/Vanilla-Latte-001.jpg"></img>
            </div>
            <div className={style.textProduct}>
              <h3>Vanilla Latte</h3>
              <span>15$</span>
            </div>
          </div>
        );
    }
}