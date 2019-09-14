import "./App.css";
import "./hamburgers.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import Menu from "./routers/menu";
import AboutMe from "./routers/AboutMe";
import Skills from "./routers/Skills";
import Project from "./routers/Project";
import Contact from "./routers/Contact";
import React, { Suspense } from "react";
import Home from "./routers/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Vortex } from "react-burgers";
import LocalStorageHelper from "./LocalStorageHelper";
import en from "./lang/en";
import ru from "./lang/ru";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bol: false,
      lang: "ru",
    };
  }

  componentDidMount() {
    this.getLang();
  }

  getLang() {
    const lang = LocalStorageHelper.getData();
    this.setState({ lang: (!Array.isArray(lang)) ? lang : 'ru' }, console.log(Array.isArray(lang)))
  }

  changeLang(el) {
    return el === "ru"
      ? this.setState(
        { lang: "en" },
        LocalStorageHelper.setData("en"),
        window.location.reload()
      )
      : this.setState(
        { lang: "ru" },
        LocalStorageHelper.setData("ru"),
        window.location.reload()
      );
  }

  updateData = value => {
    this.setState({ bol: value });
  };

  handleClickChange() {
    return this.state.bol ? this.state.bol : this.setState({ bol: true });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <header className="header">
              <div className="header__inner">
                <div className="left">
                  <Link to="/">
                    <Vortex
                      active={this.state.bol}
                      onClick={() => this.handleClickChange()}
                    />
                  </Link>
                  <div
                    className="header__language nav__link"
                    onClick={() => this.changeLang(this.state.lang)}
                  >
                    {this.state.lang}
                  </div>
                </div>
                <nav className="nav nav__link">
                  <Link to="/contact">

                    {`${
                      this.state.lang === "en"
                        ? en[0].app.contact
                        : ru[0].app.contact
                      }`}
                  </Link>
                </nav>
              </div>
            </header>
            <main>
              <div id="App">
                <div id="container" />
                <Route
                  render={({ location }) => (
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={400}
                        classNames="fade"
                      >
                        <Switch location={location}>
                          <Route
                            exact
                            path="/"
                            render={() => <Menu updateData={this.updateData} />}
                          />
                          <Route path="/home" component={Home} />
                          <Route
                            path="/aboutme"
                            render={() => <AboutMe lang={this.state.lang} />}
                          />
                          <Route path="/skills" component={Skills} />
                          <Route path="/project" component={Project} />
                          <Route path="/contact" component={Contact} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  )}
                />
              </div>
            </main>
            <footer>
              <nav className="nav__footer">
                <div className="mail"> <a href="https://vk.com/belolaga_me">design by Belolaga</a></div>
                <div className="contact">
                  <p>
                    <a href="https://t.me/Avandor">Telegramm</a>
                  </p>
                  <p>
                    <a href="https://vk.com/godlyfox">Vkontacte</a>
                  </p>
                  <p>
                    <a href="https://krasnodar.hh.ru/resume/0b53d205ff072ff55a0039ed1f70595252366f">
                      HeadHanter
                    </a>
                  </p>
                </div>
              </nav>
            </footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
