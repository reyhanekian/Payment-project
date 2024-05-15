// import React from 'react';

// const History = ({
//  transactionHistory3:{cardNumber3 ,handlePayment3 ,setTransferAmount}, setCardNumber3 ,cardName3 ,setCardName3 ,cardCVV23 , setCardCVV23 ,expiryDate3 ,setExpiryDate3,dynamicPassword3,setDynamicPassword3,transferAmount3  ,setTransferAmount3
// }) => {
//   return (
//     <div>
       
//       <h2 className='p-10  m-4 font-extrabold text-2xl text-white'>Transaction history:</h2>
//       <ul>
//         {transactionHistory3.map((transaction, index) => (
//           <li key={index} className="p-10  m-10 border mt-2 bg-red-500 w-96 shadow-2xl rounded-2xl">
//             <div className="ml-4">
//             <img src="./Assets/Img/sim (2).png" alt="" className="h-12 w-14  mx-auto  mr-2"/></div>
//             <div className='font-bold'>CardNumber : {transaction.cardNumber3}</div>
//             <div className='font-bold'>FullName : {transaction.cardName3}</div>
//             <div className='font-bold'>Transfer amount : {transaction.transferAmount3}</div>
//             <div className='font-bold'>transition time and date : {transaction.transferDate3}</div>
//           </li>
          
//         ))}
//       </ul>


//         </div>
    
    
//   );
// };

// export default History;


import React from 'react'

export default function History({Name,Number,Password,Cvv2,Year,Month,Inventory,SelectCard ,  History, setHistory, negetive}) {
  return (
    <div  style={{ display: "flex" }} className="w-96 h-56 m-auto  rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110">
            <div onClick={SelectCard}  className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                   <p className="font-light">Name</p>
                   <p className="font-medium tracking-widest">{Name}</p>
                 </div>
                <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                 </div>


              <div className="pt-1">
                <p class="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{Number}</p>
              </div>


              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light  text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm"> {Year} / {Month} </p>
                  </div>


                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Cvv2}</p>
                  </div>


                  <div className="">
                    <p className="font-light text-xs">Password</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Password}</p>
                  </div>



                  <div className="">
                    <p className="font-light text-xs">Inventory</p>
                    <p className="font-bold tracking-more-wider text-sm"> {Inventory}</p>
                  </div>

                  


                </div>
              </div>
            </div>
            </div>
  )
}
