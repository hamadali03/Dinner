import React from 'react'

// here we use props if we use filterItem then this same work filterItem use in Galrey
const Categoy = ({filterItem,catItem}) => {
  return (
    <>
       <div className="container">
        <div className='d-flex justify-content-around'>

        {
            catItem.map((ele)=>{
                return <button className='btn btn-outline-warning ' onClick={()=>filterItem(ele)}>{ele}</button>
            }) 
        }
            {/* <button className='btn btn-warning ' onClick={()=>filterItem("Breakfast")}>Breakfast</button>
            <button className='btn btn-warning 'onClick={()=>filterItem("Lunch")}>Lunch</button>
            <button className='btn btn-warning 'onClick={()=>filterItem("Evening")}>Evening</button>
            <button className='btn btn-warning 'onClick={()=>filterItem("Dinner")}>Dinner</button> */}
            {/* <button className='btn btn-warning 'onClick={()=> setdata(Menu)}>All</button> */}
        </div>
     </div>
    </>
  )
}

export default Categoy;
