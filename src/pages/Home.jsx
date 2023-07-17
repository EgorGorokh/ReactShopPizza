import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../scss/components/Pagination/Pagination";
import { SearchContext } from "../App";


import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";




export const Home = () => {

  const categoryId=useSelector(state=>state.filter.categoryId);
  const dispatch=useDispatch();
  const sortType=useSelector((state)=>state.filter.sort.sortProperty);
  const{searchValue}=React.useContext(SearchContext)
  const [currentPage,setCurrentPage]=React.useState(1);
  const [items, setItems] = React.useState([]);

  


const onClickCategory=(id)=>{
dispatch(setCategoryId(id))
}




  React.useEffect(()=>{
const order = sortType.includes('-')?'asc':'desc';
const search=searchValue ? `&search=${searchValue}`: '';








    fetch(`https://64b19704062767bc48266b80.mockapi.io/items?page=${currentPage}&limit=4&${categoryId>0 ? `category=${categoryId}` : '' }&sortBy=${sortType.replace('-','')}&order=${order}${search}`)                      
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
        <Categories  value={categoryId} onClickCategory={onClickCategory} />
        <Sort/>
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
