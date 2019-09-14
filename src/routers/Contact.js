import React from "react";
import { Link } from "react-router-dom";
import "./style/contact.css";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ru",
      name: '',
      email: ``,
      text: ``
    };
  }

  componentDidMount() {
    this.setState({ lang: LocalStorageHelper.getData() });
  }

  getName(event) {
    this.setState({ name: event })
  }

  getEmail(event) {
    this.setState({ email: event })
  }

  getText(event) {
    this.setState({ text: event })
  }

  sendEmail(e) {
    let send = {
      'entry.1503359062': this.state.name,
      'entry.2125594227': this.state.email,
      'entry.451808494': this.state.text
    }

    const queryString = Object.keys(send).map(key => key + '=' + send[key]).join('&');

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSc9Ej9BBFKwFUsRkBQ34Ehjhx5nhp6Alnkmn9HHYVjGPeoUvw/formResponse?${queryString}`
    fetch(url)
      .then(alert('Отправленно'))
      .catch((err) => {
        console.error('Request failed', err)
      })
    e.preventDefault();
    window.location.reload()
  }

  render() {
    return (
      <div className="container__main ">
        <div className="left__block1">
          <div id="top__text" className="top__text" />
          <div className="left__group"></div>
          <h1>{`<${
            this.state.lang === "en" ? en[0].Contact.title : ru[0].Contact.title
            }>`}</h1>
          <div className="note"></div>
          <div className="fields">
            <form className="ajax-contact-form" onSubmit={(e) => this.sendEmail(e)}>
              <div className="group">
                <input type="name" name="entry.1503359062"
                  onChange={(event) => this.getName(event.target.value)} required />
                <span className="bar"></span>
                <label>{`${
                  this.state.lang === "en"
                    ? en[0].Contact.label1
                    : ru[0].Contact.label1
                  }`}</label>
              </div>
              <div className="group">
                <input type="email" name="entry.2125594227"
                  onChange={(event) => this.getEmail(event.target.value)} required />
                <span className="bar"></span>
                <label>{`${
                  this.state.lang === "en"
                    ? en[0].Contact.label2
                    : ru[0].Contact.label2
                  }`}</label>
              </div>
              <div className="group text__area1">
                <input type="text" name="entry.451808494"
                  onChange={(event) => this.getText(event.target.value)} required />
                <span class="bar"></span>
                <label>{`${
                  this.state.lang === "en"
                    ? en[0].Contact.label3
                    : ru[0].Contact.label3
                  }`}</label>
              </div>
              <nav className="nav nav__link1">
                <button
                  className="button__form"
                  type="submit"
                  name="sab"
                  value="send"
                >
                  {`${
                    this.state.lang === "en"
                      ? en[0].Contact.Button
                      : ru[0].Contact.Button
                    }`}
                </button>
              </nav>
            </form>
          </div>
        </div>
        <div className="right__block">
          <div className="right__group1">
            <div className="content1">
              {`${
                this.state.lang === "en"
                  ? en[0].Contact.text
                  : ru[0].Contact.text
                }`}
            </div>
            <br />
            <div className="content1">
              <h4>{`${
                this.state.lang === "en" ? en[0].Contact.tel : ru[0].Contact.tel
                }`}</h4>
              +7 (928) 433-11-20
            </div>
            <br />
            <div className="content1">
              <h4>E-MAIL</h4>
              qgaqga97@gmail.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
