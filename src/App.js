// import logo from "./logo.svg";
// import "./App.css";

import { Link, NavLink, Redirect, Route, Router, Switch } from "react-router-dom";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App ">
      <h1>Home Page</h1>


      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/album" activeClassName="Son dang o day">Album</NavLink></p>
      

      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/post/:postId" exact/>

      <Route path="/" component={TodoFeature} exact/>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
      </Switch>
    </div>
  );
}
export default App;
