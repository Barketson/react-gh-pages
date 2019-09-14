import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import en from "../lang/en";
import ru from "../lang/ru";
import LocalStorageHelper from "../LocalStorageHelper";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "ru"
    };
  }

  componentDidMount() {
    this.setState({ lang: LocalStorageHelper.getData() });
    this.props.updateData(true);
  }

  componentWillUnmount() {
    this.props.updateData(false);
  }

  render() {
    return (
      <ul className="menu__link">
        <li>
          <Link to="home">{`${
            this.state.lang === "en" ? en[0].Menu.home : ru[0].Menu.home
            }`}</Link>
        </li>
        <li>
          <Link to="/aboutme">{`${
            this.state.lang === "en" ? en[0].Menu.about : ru[0].Menu.about
            }`}</Link>
        </li>
        <li>
          <Link to="/skills">{`${
            this.state.lang === "en" ? en[0].Menu.skills : ru[0].Menu.skills
            }`}</Link>
        </li>
        <li>
          <Link to="/project">{`${
            this.state.lang === "en" ? en[0].Menu.project : ru[0].Menu.project
            }`}</Link>
        </li>
        <li>
          <Link to="/contact">{`${
            this.state.lang === "en" ? en[0].Menu.contact : ru[0].Menu.contact
            }`}</Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
