import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";





export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [categoryId,setCategoryId]=React.useState(0);


  React.useEffect(()=>{
    fetch("https://64b19704062767bc48266b80.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
      window.scrollTo(0,0);
  }, []);
  return (

    <>
    <div className="container">
      <div class="content__top">
        <Categories  value={categoryId} onClickCategory={(id)=>setCategoryId(id)} />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {items.map((obj) => (
          <PizzaBlock {...obj} />
        ))}
      </div>
      </div>
    </>
  );
};


export default Home;
