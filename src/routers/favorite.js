import React from "react";
import LocalStorageHelper from "../LocalStorageHelper";
import { Link } from "react-router-dom";
import "../load.css";

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCity: "http://127.0.0.1:5000/api/location/",
      favoriteCity: [],
      favoriteCityId: [],
      listCity: ""
    };
  }

  componentDidMount() {
    this.setState({ favoriteCityId: LocalStorageHelper.getData() }, () =>
      this.state.favoriteCityId.map(el => this.getWeather(el))
    );
  }

  handleClickOnChange(event) {
    return this.setState({
      listCity: event.target.value.toLowerCase()
    });
  }

  getСitiesList(input, el) {
    return ~el.title.toLowerCase().search(input);
  }

  getWeather(input) {
    if (!input) return this.setState({ favoriteCity: null });
    fetch(this.state.urlCity + input)
      .then(b => b.json())
      .then(b => {
        this.setState({ favoriteCity: [...this.state.favoriteCity, b] });
      });
  }

  render() {
    if (!this.state.favoriteCity.length)
      return (
        <div className="windows8">
          <div className="wBall" id="wBall_1">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_2">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_3">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_4">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_5">
            <div className="wInnerBall" />
          </div>
        </div>
      );
    return (
      <div>
        <div className="group">
          <input
            type="text"
            required
            placeholder="Search"
            onChange={event => this.handleClickOnChange(event)}
          />
          <span className="bar" />
        </div>
        <div className="list">
          {this.state.favoriteCity &&
            this.state.favoriteCity.map(el => (
              <Link to={`/cityCard/${el.woeid}`} key={el.woeid}>
                {this.getСitiesList(this.state.listCity, el) ? (
                  <div className="card" key={el.woeid}>
                    {el.title}
                  </div>
                ) : (
                  <div key={el.woeid} />
                )}
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default Favorite;
