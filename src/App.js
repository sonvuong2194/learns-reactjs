// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["Mua bim bim", "Mua trái cây", "Mua kim cương"];
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} title={item} />
        ))}
      </div>
    );
  }
}

export default App;
