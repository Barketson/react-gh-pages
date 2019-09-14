import React from "react";
import { Link } from "react-router-dom";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ru"
    };
  }

  componentDidMount() {

    this.getLang()
  }

  getLang() {
    this.setState({ lang: LocalStorageHelper.getData() });
  }

  render() {
    return (
      <div className="container__main">
        <div className="left__block">
          <div className="left__group">
            <div className="content">
              <h1>
                {`${
                  this.state.lang === "en"
                    ? en[0].skills.title
                    : ru[0].skills.title
                  }`}
              </h1>
              <ul>
                <li>
                  {`${
                    this.state.lang === "en"
                      ? en[0].skills.li1
                      : ru[0].skills.li1
                    }`}
                </li>
                <li>
                  {`${
                    this.state.lang === "en"
                      ? en[0].skills.li2
                      : ru[0].skills.li2
                    }`}
                </li>
                <li>
                  {`${
                    this.state.lang === "en"
                      ? en[0].skills.li3
                      : ru[0].skills.li3
                    }`}
                </li>
                <li>
                  {`${
                    this.state.lang === "en"
                      ? en[0].skills.li4
                      : ru[0].skills.li4
                    }`}
                </li>
                <li>
                  {`${
                    this.state.lang === "en"
                      ? en[0].skills.li5
                      : ru[0].skills.li5
                    }`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
