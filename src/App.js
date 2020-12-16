/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
// import "./App.css";

import { useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: '10',
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App ">
      <h1>Home Page</h1>

      <p>
        <Link to="/todo">Todos</Link>
      </p>
      <p>
        <Link to="/album">Album</Link>
      </p>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
