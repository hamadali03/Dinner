import React from 'react'

const Menulist = (props) => {
  return (
    <>
    <div className="container-fluid mt-5">
    <div className="row">
    <div className="col-11 mx-auto">
    <div className="row my-5">

    {
        props.data.map((ele)=>{
        const {id, name,image,description, price}=ele;
        return(
            <>
     
               <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>
                
                     <div className="row item-inside mb-5 g-0">
                        <div className=" col-12 col-md-12 col-lg-4 d-flex justify-content-between img-div">
                            <img src={image} alt="menupic"  className='img-fluid'/>
                        </div>
                        <div className="col-12 col-lg-8 col-md-12 title">
                        <div className="main-tilte pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>{description}</p>
                            </div>
                            <div className="menu-price">
                                <div className="price-book-divide d-flex justify-content-between">
                                    <h2>Price: {price}</h2>
                                    <button className='btn btn-primary'>Order Now</button>
                                </div>
                               
                                    <p>*Price may vary on selected date.</p>
                            </div>
                        </div>
                     </div>
                     </div>
            </>
        )
        })  
    }
</div>
    </div>
    </div>
</div>  
    </>
  )
}

export default Menulist;
