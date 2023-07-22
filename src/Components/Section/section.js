import React from "react";
import style from "./section.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import sectionImage from "../../utills/sectionImage.svg"
import PropTypes from "prop-types";



export class Section extends React.Component{
  render() {

    const {openContainerProduct} = this.props
    const {openFeedbackContainer} = this.props
    
      console.log(this.props);
        return (
          <div className={style.container}>
            <div className={style.section}>
              <div>
                Enjoy Your <span>Cofee</span> before your activity
              </div>
              <div>
                Boost your productivity and build your mood with a glass of
                coffee in the morning
              </div>
              <div>
                <button onClick={openContainerProduct}>
                  Order Now
                  <span>
                    <AiOutlineShoppingCart />
                  </span>
                </button>
                <button onClick={openFeedbackContainer}>Feedback</button>
              </div>
            </div>
            <div className={style.sectionPhoto}>
              <img src={sectionImage} alt="imgReklam"></img>
            </div>
          </div>
        );
    }
}

Section.propTypes = {
  openContainerProduct: PropTypes.func,
  openFeedbackContainer: PropTypes.func,
};