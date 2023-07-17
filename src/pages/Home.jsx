import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../scss/components/Pagination/Pagination";
import { SearchContext } from "../App";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId,setCurrentPage,setFilters} from "../redux/slices/filterSlice";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import list from '../components/Sort'

export const Home = () => {
  const navigate=useNavigate();
  const {categoryId,currentPage}=useSelector((state)=>state.filter)
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const isSearch=React.useRef(false);
  const isMounted=React.useRef(false);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };


React.useEffect(()=>{
if(window.location.search){
  const params=qs.parse(window.location.search.substring(1));
  const sort=list.find(obj=>obj.sortProperty===params.sortProperty)
  dispatch(
    setFilters({
      ...params,
      sort,
    }),
  );
  isSearch.current=true;
}
},[]);

const fetchPizzas=()=>{
  const order = sortType.includes("-") ? "asc" : "desc";
  const search = searchValue ? `&search=${searchValue}` : "";

  axios
    .get(
      `https://64b19704062767bc48266b80.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.replace("-", "")}&order=${order}${search}`
    )
    .then((res) => {
      setItems(res.data);
    });
}



  React.useEffect(() => {
   if(!isSearch.current){
    fetchPizzas();
   }

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);




React.useEffect(()=>{
 if(isMounted.current){
  const queryString=qs.stringify({
    sortProperty:sortType,
    categoryId,
    currentPage
      });
      navigate(`?${queryString}`);
 }
 isMounted.current=true;
},[categoryId, sortType, searchValue, currentPage])


  const Pizzas = items.map((obj) => <PizzaBlock {...obj} />);
  return (
    <div className="container">
      <div class="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">{Pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;