import React from "react";
import { Link } from "react-router-dom";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ru"
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
                this.state.lang === "en" ? en[0].home.title : ru[0].home.title
                }>`}
            </div>
            <p />
            <div className="content">
              {`${
                this.state.lang === "en" ? en[0].home.text : ru[0].home.text
                }`}
            </div>
          </div>
        </div>
        <div className="right__block">
          <img src={require(`../img/computer.png`)} alt="computer" />
        </div>
      </div>
    );
  }
}

export default Home;
