import React from "react";
import "../cityCard.css";
import "../load.css";

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCity: "http://127.0.0.1:5000/api/location/",
      cityWeather: null
    };
  }

  getWeather(input) {
    if (!input) return this.setState({ cityWeather: null });

    fetch(this.state.urlCity + input)
      .then(b => b.json())
      .then(b => {
        this.setState({ cityWeather: b });
      });
  }

  componentDidMount() {
    this.getWeather(this.props.match.params.id);
  }

  render() {
    if (!this.state.cityWeather)
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
      <section className="closest">
        <div className="city_name">
          <h2>{this.state.cityWeather.title}</h2>
          <p />
        </div>
        <div className="row_weather">
          {this.state.cityWeather.consolidated_weather.slice(0, 5).map(el => (
            <div className="wheather_card" key={el.max_temp}>
              <h3>{`${new Date(el.applicable_date)}`.substr(0, 10)}</h3>
              <div className="name_set">
                <div className="title">Wheather:</div>
                <div className="params">
                  <div />
                  <span>
                    {el.weather_state_name}
                    {
                      <img
                        className="ico"
                        src={require(`../ico/${el.weather_state_abbr}.ico`)}
                        alt="done"
                      />
                    }
                  </span>
                </div>
                <div className="title">Temperature:</div>
                <div className="params">
                  Max: {`${el.max_temp}`.substr(0, 2)} &deg;C
                  <br />
                  Min: {`${el.min_temp}`.substr(0, 2)} &deg;C
                </div>
                <div className="title">Wind</div>
                <div className="params">
                  <span>{`${el.wind_speed}`.substr(0, 3)} mph</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default CityCard;
