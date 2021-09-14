import React from "react";

import {Form} from "./Form"
import {DishComponent} from "./DishComp";


class App extends React.Component {
  state = {
    min: 0,
    max: 9,
    category:"all"
  };
  categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
  ];

  setPrice = ([min, max]) => {
    this.setState({ min, max });
  };

  setCategory=(cat)=>{
    this.setState({ category:cat})
  }
  
  render() {
    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <Form {...this.state} setPrice={this.setPrice} categories={[...this.categories]} setCategory={this.setCategory} />
        </section>
        <section className="dishes">
          <h2>Dishes</h2>
            <DishComponent {...this.state} />
        </section>
      </main>
    );
  }
}

export default App;
