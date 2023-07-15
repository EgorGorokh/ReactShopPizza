import React from "react"


const Categories =({value,onClickCategory})=>{
   // const [activeIndex,setActiveIndex]=React.useState(0);

    const categories=[
        "Все",
       "Мясные",
       "Вегетарианская",
       "Гриль",
       "Острые",
       "Закрытые"
    ];
    //const onClickCategory=(index)=>{
    //    setActiveIndex(index);
   // }
    
        return( <div className="categories">
        <ul>
         {categories.map((categoryName,i)=>(
            <li onClick={()=>onClickCategory(i)} className={value===i ? 'active': ' '}>{categoryName}</li>
         ))}
        </ul>
      </div>)
      
}

export default Categories;