import React from "react";
import style from "./cards.module.css"
import { PiMinusBold, PiPlusBold } from "react-icons/pi";
import Swal from "sweetalert2";


export class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      total: 0,
    };

    this.addOrder = this.addOrder.bind(this)
    this.removeOrder = this.removeOrder.bind(this);
    this.orderConfirm = this.orderConfirm.bind(this);

  }

  orderConfirm() {

    const {closeOrderSection} = this.props

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your order has been received",
      showConfirmButton: false,
      timer: 2000,
    });

    closeOrderSection()

  }

  addOrder() {

    const {price} = this.props

    this.setState({
      count: this.state.count + 1,
      total: parseInt(this.state.total) + parseInt(price),
    })
  }


  removeOrder() {
    
    const { price } = this.props;

     this.setState({
       count: this.state.count - 1,
       total: parseInt(this.state.total) - parseInt(price),
     });
  }

  render() {

    const {name, image_url, price, } = this.props
    return (
      <div className={style.cards}>
        <div className={style.imageContainer}>
          <img src={image_url} alt="push"></img>
        </div>
        <div className={style.textProduct}>
          <h3>{name}</h3>
          <span>{price}</span>
        </div>
        <div className={style.priceContainer}>
          <div className={style.btn}>
            <button
              onClick={this.removeOrder}
              disabled={this.state.total === 0}
            >
              <PiMinusBold />
            </button>
            <button onClick={this.addOrder}>
              <PiPlusBold />
            </button>
            <button
              onClick={this.orderConfirm}
              disabled={this.state.total === 0}>Order Now
            </button>
          </div>
          <span>{this.state.total}</span>
        </div>
      </div>
    );
  }
}

