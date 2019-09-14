import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import content from "../content";
import contentRu from "../contentRu";
import "./style/Project.css";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ru",
      project: []
    };
  }

  componentDidMount() {
    this.setState({ lang: LocalStorageHelper.getData() }, () =>
      this.state.lang === "en"
        ? this.setState({ project: [...content] })
        : this.setState({ project: [...contentRu] })
    );
  }

  getLang() {
    const lang = LocalStorageHelper.getData();
    this.setState({ lang: (lang.lenght) ? this.lang : 'ru' })
  }

  render() {
    return (
      <div className="container">
        <div id="top__text" className="top__text1">
          {`<${
            this.state.lang === "en" ? en[0].project.title : ru[0].project.title
            }>`}
        </div>
        <Slider autoplay={1000}>
          {this.state.project.map((item, index) => (
            <div
              className="container__main"
              key={index}
              style={{
                background: `url('${item.image}')  center center`
              }}
            >
              <div className="container__main">
                <div className="left__block">
                  <div className="left__group">
                    <div id="top__text" className="top__text" />
                    <div className="content">
                      <h1>{item.title}</h1>
                      {item.description}
                      <br />
                      <form action={item.userPreject} target="blank">
                        <button>{item.button}</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="right__block">
                  <img src={require(`../img/${item.image}`)} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Project;
