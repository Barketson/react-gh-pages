import React from "react";
import { Link } from "react-router-dom";
import LocalStorageHelper from "../LocalStorageHelper";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlSearch: "http://127.0.0.1:5000/api/location/search/?query=",
      citiesList: null,
      favoriteCity: []
    };
  }

  componentDidMount() {
    this.setState({ favoriteCity: LocalStorageHelper.getData() });
  }

  titleSearchCity(input) {
    return this.setState({
      listCity: input
    });
  }

  getСitiesList(input) {
    if (!input) return this.setState({ citiesList: null });
    fetch(this.state.urlSearch + input)
      .then(b => b.json())
      .then(b => {
        this.setState({ citiesList: b });
      });
  }

  handleClickAddToFavorite(id) {
    if (this.checkFavoriteCity(id)) return;
    this.setState({ favoriteCity: [...this.state.favoriteCity, id] }, () =>
      LocalStorageHelper.setData(this.state.favoriteCity)
    );
  }

  checkFavoriteCity(id) {
    return ~this.state.favoriteCity.indexOf(id);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={event =>
            this.titleSearchCity(this.getСitiesList(event.target.value))
          }
        />
        <div className="list">
          {this.state.citiesList &&
            this.state.citiesList.map(el => (
              <div className="card" key={el.woeid}>
                <div className="card__content">
                  <Link to={`/cityCard/${el.woeid}`}>
                    <h3>{el.title}</h3>
                  </Link>

                  {this.checkFavoriteCity(el.woeid) ? (
                    <img
                      className="card__content"
                      src={require("../ico/done.ico")}
                      alt="done"
                    />
                  ) : (
                    <img
                      className="card__content"
                      src={require("../ico/none.ico")}
                      alt="none"
                      onClick={() => this.handleClickAddToFavorite(el.woeid)}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
