import React from "react";
import style from "./cardContainer.module.css"
import { Cards } from "../Cards/cards";


export class CardContainer extends React.Component{
    render() {
        return <div className={style.cardContainer}>
            <Cards />
        </div>;
    }
}