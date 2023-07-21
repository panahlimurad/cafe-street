import React from "react";
import style from "./cardContainer.module.css"
import { Cards } from "../Cards/cards";
import PropTypes from "prop-types";



export class CardContainer extends React.Component {
  static defaultProps = {
    data: [],
  };

  constructor() {
    super()
    this.state = {
      isShow: true
    }
    this.closeOrderSection = this.closeOrderSection.bind(this)
  }


  closeOrderSection() {

    const {toggleState} = this.props

    this.setState({
      isShow: false
    })

    toggleState();

  }

  render() {
    console.log(this.props);

    const {data} = this.props
    return this.state.isShow ? (
      <div className={style.cardContainer}>
        {data?.map((item, index) => (
          <Cards key={index} {...item} closeOrderSection={ this.closeOrderSection} />
          ))}
      </div>
    ) : (
        <div></div>
    );
  }
}

CardContainer.propTypes = {
  data: PropTypes.array,
};