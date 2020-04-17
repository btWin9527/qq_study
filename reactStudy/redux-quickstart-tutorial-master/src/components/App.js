import React from "react";
import AddTodoContainer from "../containers/AddTodoContainer";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
