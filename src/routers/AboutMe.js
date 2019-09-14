import React from "react";
import { Link } from "react-router-dom";
import "./style/AboutMe.css";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "",

    };
  }

  componentDidMount() {
    this.setState({ lang: LocalStorageHelper.getData() });
  }

  render() {
    return (
      <div className="container__main">
        <div className="left__block">
          <div className="left__group">
            <div id="top__text" className="top__text">
              {`<${
                this.state.lang === "en" ? en[0].AboutMe.tag : ru[0].AboutMe.tag
                }>`}
            </div>
            <div className="content2">
              <h1>
                {this.state.lang === "en"
                  ? en[0].AboutMe.title
                  : ru[0].AboutMe.title}
              </h1>
              {this.state.lang === "en"
                ? en[0].AboutMe.content
                : ru[0].AboutMe.content}
            </div>
          </div>
        </div>
        <div className="right__block">
          <img src={require(`../img/foto.png`)} alt="computer" />
        </div>
      </div>
    );
  }
}

export default AboutMe;
