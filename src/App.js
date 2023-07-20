import React from "react";
import style from "./style/index.css"
import { Header } from "./Components/Header/header";
import { Section } from "./Components/Section/section";
import { CardContainer } from "./Components/CardContainer/cardContainer";


export class App extends React.Component{
    render() {
        return (
            <main className={ style.index }>
                <Header />
                <Section />
                <CardContainer />
            </main>
        )
    }
}