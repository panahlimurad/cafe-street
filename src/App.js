import React from "react";
import style from "./style/index.css"
import { Header } from "./Components/Header/header";
import { Section } from "./Components/Section/section";
import { CardContainer } from "./Components/CardContainer/cardContainer";


const data = [
  {
    name: "Sendwich",
    image_url:
      "https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg",
    price: 20 + "$",
  },
  {
    name: "Hot Milk",
    image_url:
      "https://www.allrecipes.com/thmb/WGd6j5xP-kiKz8kfntvEHJoVPc0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/158655-dreamy-nighttime-drink-ddmfs-2x1-0891-22809a7b7e18445dbbe7e8fe2c9d973e.jpg",
    price: 15 + "$",
  },
  {
    name: "Waffle Ice Cream",
    image_url:
      "https://kefalosfood.com/wp-content/uploads/2020/04/Waffles-and-Ice-cream.jpg",
    price: 55 + "$",
  },
  {
    name: "HuzzleNut Latte",
    image_url:
      "https://images.ctfassets.net/v601h1fyjgba/3bxPeyxH6YlWxBUlPuCgPE/9ac292d4d71ac65d6ec53ee51f3534ab/Mocha_Hazelnut_Latte.jpg",
    price: 30 + "$",
  },
  {
    name: "Espresso",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAxSPengV6CCmwL79_zLuuPyBB_QV5SUuvw&usqp=CAU",
    price: 10 + "$",
  },
  {
    name: "Breakfast",
    image_url:
      "https://image.slidesdocs.com/responsive-images/background/breakfast-milk-bread-sandwich-powerpoint-background_980aad1a8d__960_540.jpg",
    price: 120 + "$",
  },
];

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    
    this.openContainerProduct = this.openContainerProduct.bind(this)
    this.toggleState = this.toggleState.bind(this);

  }

  toggleState() {
    this.setState({
      isShow:false
    })
  }

  openContainerProduct() {
    this.setState({
      isShow:true
    })
  }

  render() {
    return (
      <main className={style.index}>
        <Header />
        <Section openContainerProduct={this.openContainerProduct} />
        {this.state.isShow ? (
          <CardContainer data={data} toggleState={this.toggleState} />
        ) : (
          <div></div>
        )}
      </main>
    );
  }
}