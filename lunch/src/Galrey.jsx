
import React, { useState } from 'react'
import Menu from './Menu';
import Menulist from './Menulist';
import Categoy from './Categoy';

const allCatValue=[...new Set(Menu.map((CurElem)=>{
   return(
    CurElem.category
   )
})),"all"];


const Galrey = () => {
    const [data,setdata]=useState(Menu)
    const [catItem,setCatItem]=useState(allCatValue);
  
    const filterItem =(categItem) =>{
        if(categItem ==="all"){
            
            return setdata(Menu);
        }
       const updateItem=Menu.filter((CurElem)=>{
             return CurElem.category===categItem;
       });
       setdata(updateItem);
    }
  return (
    <>
     <h1 className='mt-5 text-center '>Order your favourit Dish</h1> 
     <hr/>
    <Categoy filterItem={filterItem} catItem={catItem}/>
<Menulist data={data}/>

    </>
  )
}

export default Galrey;
