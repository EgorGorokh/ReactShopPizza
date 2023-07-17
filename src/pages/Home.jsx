import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";

import Pagination from "../scss/components/Pagination/Pagination";





export const Home = ({searchValue}) => {
  const [currentPage,setCurrentPage]=React.useState(1);
  const [items, setItems] = React.useState([]);
  const [categoryId,setCategoryId]=React.useState(0);
  const [sortType,setSortType]=React.useState({
    name:'популярности',
    sortProperty:'rating'
  });


  React.useEffect(()=>{
const order = sortType.sortProperty.includes('-')?'asc':'desc';
const search=searchValue ? `&search=${searchValue}`: '';

    fetch(`https://64b19704062767bc48266b80.mockapi.io/items?page=${currentPage}&limit=4&${categoryId>0 ? `category=${categoryId}` : '' }&sortBy=${sortType.sortProperty.replace('-','')}&order=${order}${search}`)                      
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
      window.scrollTo(0,0);
  }, [categoryId,sortType,searchValue,currentPage]);


  const Pizzas = items
  .map((obj) => (
    <PizzaBlock {...obj} />
  ));
  return (



    
    <div className="container">
      <div class="content__top">
        <Categories  value={categoryId} onClickCategory={(id)=>setCategoryId(id)} />
        <Sort  value={sortType} onChangeSort={(i)=>setSortType(i)}/>
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
       {Pizzas}
       </div>
      <Pagination onChangePage={(number)=>setCurrentPage(number)} />

      </div>
    
  );
};


export default Home;
