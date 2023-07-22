import React from "react";
import style from "./feedBack.module.module.css"
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import PropTypes from "prop-types";





export class FeedBack extends React.Component {
    constructor() {
        super()
        this.state = {
          isShow: true,
        };

        this.sendMessage = this.sendMessage.bind(this)
    }


    sendMessage() {

        const {toggleStateFeedback} = this.props

        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message was sent successfully",
            showConfirmButton: false,
            timer: 2000,
        });
        
        this.setState({
            isShow: false,
        });
        
        toggleStateFeedback();
    }



    render() {



        return this.state.isShow ? (
          <div className={style.feedBack}>
            <div className={style.inputArea}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  textarea: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Please fill in the boxes"),
                  email: Yup.string()
                    .email()
                    .required("Please fill in the boxes"),
                  textarea: Yup.string().required("Please fill in the boxes"),
                })}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  dirty,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h3>Feedback</h3>
                    <label htmlFor="name">Name:</label>
                    <input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name && (
                      <div className={style.errorMessage}>{errors.name}</div>
                    )}
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                      <div className={style.errorMessage}>{errors.email}</div>
                    )}
                    <label htmlFor="textarea">Message:</label>
                    <textarea
                      id="textarea"
                      type="textarea"
                      value={values.textarea}
                      onChange={handleChange}
                    />
                    {errors.textarea && touched.textarea && (
                      <div className={style.errorMessage}>{errors.textarea}</div>
                    )}
                    <button onClick={this.sendMessage} type="submit" disabled={!dirty}>
                      Send Meesage
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        ) : (<div>
                
        </div>);
    }
}

FeedBack.propTypes = {
  toggleStateFeedback: PropTypes.func,
};