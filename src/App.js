import "./App.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./redux/reducer";

import LogIn from "./screens/LogIn/Login";
import Register from "./screens/Register/Register";
import Main from "./screens/Main/Main";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtools thing
);

const routes = [
  {
    path: "/",
    exac: true,
    component: LogIn,
    id: 1,
  },
  {
    path: "/register",
    component: Register,
    exac: true,
    id: 2,
  },
  {
    path: "/main",
    component: Main,
    exac: true,
    id: 3,
  },
];

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  key={route.id}
                  component={route.component}
                  path={route.path}
                  exact={route.exac}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
