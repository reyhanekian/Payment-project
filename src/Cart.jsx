import React from 'react'

export default function Card({Name,Number,Password,Cvv2,Year,Month,Inventory,SelectCard , History,setHistory
 }) {
  return (
    <div  style={{ display: "flex" }} className="w-96 h-56 m-auto bg-success rounded-3xl relative text-white shadow-2xl shadow-success  transition-transform transform hover:scale-110">
            <div onClick={SelectCard}  className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                   <p className="font-light">Name : </p>
                   <p className="font-bold tracking-widest">{Name}</p>
                 </div>
                <img className="w-14 h-14" src="./Assets/Img/sim (2).png" />
                 </div>


              <div className="pt-1">
                <p class="font-light">Card Number : </p>
                <p className="font-bold tracking-more-wider">{Number}</p>
              </div>


              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light  text-base">Expiry : </p>
                    <p className="font-bold tracking-wider text-sm"> {Year} / {Month} </p>
                  </div>


                  <div className="">
                    <p className="font-light text-base">CVV2</p>
                    <p className="font-bold tracking-more-wider text-sm">{Cvv2}</p>
                  </div>


                  <div className="">
                    <p className="font-bold tracking-more-wider text-base">{Password}</p>
                  </div>



                  <div className="">
                    <p className="font-light text-base">Inventory</p>
                    <p className="font-bold tracking-more-wider text-sm">{Inventory}</p>
                  </div>

                 

                </div>
              </div>
            </div>
            </div>
  )
}




       

