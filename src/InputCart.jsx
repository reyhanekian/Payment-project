// import React, { useState } from 'react';

// const InputCard = ({
//     AddCard,
//     Name,
//     setName,
//     Number,
//     setNumber,
//     Cvv2,
//     setCvv2,
//     Year,
//     setYear,
//     Month,
//     setMonth,
//     Password,
//     setPassword,
//     setInventory,
//     Inventory,}) => {

    


//   return (

    
     

//      <div className='flex flex-col justify-center items-center mb-20  mt-20  '>

//       <div className="min-h-screen  flex-col pb-14  h-96 flex   content-between pt-2.5  justify-start items-center  rounded-3xl shadow-inner shadow-zinc-400   ">
 

//       <div className='max-w-5xl w-[720px] px-3.5 mx-auto box-border flex  rounded-3xl  shadow-zinc-300 pt-12'> 
//         <div className=' mb-4 w-full relative  box-border block '> 
//         <a href="#" className='block bg-red-500 absolute right-0 top-0 z-[1000] text-white rounded-l-lg font-bold py-1 px-3 '>EN</a> 
//       <div className='flex  flex-wrap  box-border '> 
//      <div className='float-left  block self-start  m-4  basis-0 grow max-w-full relative w-full min-h-[1px] pr[15px] pl[15px] box-border'> 
//         <img src="../Assets/Img/behpardakht_logo.svg " alt="shaparak" className='max-w-32 align-middle border-none box-border overflow-clip' /> 
//      </div> 
 
 
//      <div className='m-4 float-left  block self-start basis-0 grow max-w-[100%] relative w-full min-h-[1px]  box-border '> 
//         <img src="../Assets/Img/shaparak_logo.svg" alt=""  className='max-w-32 float-left align-middle ml-44 border-none box-border overflow-clip ' /> 
//      </div>
 
//      <div className='text-center w-full min-h-[1px] self-end '> 
//         {/* <img src="../Assets/Img/mellat_arc.svg" alt="" className=' mr[15px] ml[15px] ' />  */}
//         <span className='text-xl font-extrabold text-slate-500 leading-10 text-center '>پرداخت اینترنتی به پرداخت ملت</span> 
//       <br /> 
//       <span className='text-xs text-slate-500 text-center  font-bold block'>www.Behpardakht.com</span> 
//      </div>  
//     </div> 
//     </div> 
//   </div> 
 


//       <div className="mb-3" >
//       <label className='font-bold text-slate-500  ' htmlFor="" >CardNumber :  </label>
//       <input type="text" placeholder="" maxLength="16"  value={Number}
//               onChange={(e) => setNumber(e.target.value)}    className="input input-bordered w-full max-w-xs"  />
      
//       </div>


//       <div className='mb-3 '>
//       <label htmlFor="" className='font-bold text-slate-500'>FullName : </label>
//       <input type="text" placeholder=""  value={Name}
//               onChange={(e) => setName(e.target.value)} className="input input-bordered w-full max-w-xs"  />
//       </div>


//       <div className='mb-3'>
//       <label htmlFor="" className='font-bold text-slate-500'>Cvv2 : </label>
//       <input type="text"  placeholder="" maxLength="3"   value={Cvv2}
//                 onChange={(e) => setCvv2(e.target.value)} className="input input-bordered w-full max-w-xs" />
      
//       </div>



//       <div className="mb-3 flex justify-center items-center ">             
//       {/* <label className='font-extrabold text-slate-600' htmlFor="" >Expiry Date :  </label> */}
//             <div className="mb-3">
//               <p className="text-xs opacity-50dark:border-gray-200 ml-1">
//                 {" "}
//                 {" "}
                
//               </p>
//             </div>



//             <div className="flex justify-center items-center  text-slate-600">
//             <label className='font-bold text-slate-500' htmlFor="" >Expiry Date :  </label>

//               <input
//                 style={{ color: "black" }}
//                 value={Year}
//                 onChange={(e) => setYear(e.target.value)}
//                 placeholder="Y"
//                 type="text"
//                 maxLength={2}
//                 className="input input-bordered w-full max-w-xs"               />
//               <span className="font-bold text-slate-500">/</span>
//               <input
//                 style={{ color: "black" }}
//                 value={Month}
//                 onChange={(e) => setMonth(e.target.value)}
//                 placeholder="M"
//                 type="text"
//                 maxLength={2}
//                 className="input input-bordered w-full max-w-xs" 
//               />
//             </div>
//           </div>



//       <div className='mb-3'>
//       <label htmlFor="" className='font-bold text-slate-500'>dynamicPassword : </label> 
//       <input type='password'  placeholder=""   value={Password}
//                 onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
//       </div>


      
//       <div className='mb-3'>
//       <label htmlFor="" className='font-bold text-slate-500'>transferAmount : </label>
//       <input type="text"  placeholder=""   value={Inventory}
//                 onChange={(e) => setInventory(e.target.value)} className="input input-bordered w-full max-w-xs"  />
//       </div>


//       <div className='mb-3'>
//       <button   onClick={() =>
//                 AddCard(Name, Number, Password, Cvv2, Year, Month, Inventory)
//               }className=" btn-accent btn btn-wide  text-white  ">انجام پرداخت</button>
//       </div>

//     </div>
  
//     </div>

              


            
//   );
// };

// export default InputCard;




import React, { useState } from 'react';

const InputCard = ({
    AddCard,
    Name,
    setName,
    Number,
    setNumber,
    Cvv2,
    setCvv2,
    Year,
    setYear,
    Month,
    setMonth,
    Password,
    setPassword,
    setInventory,
    Inventory,}) => {

    


  return (

    <div className="max-w-md mx-auto w-[600px] mt-32  bg-zinc-200 shadow-inner shadow-zinc-900 rounded-md overflow-hidden  mb-32 ">
    <div className="text-2xl py-4 px-6 bg-success text-white text-center font-bold uppercase">Banking portal </div>
   
    <div className="py-4 px-6" >
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                CardNumber : 
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Enter your CardNumber" maxLength="16"  value={Number}  onChange={(e) => setNumber(e.target.value)}  />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
            FullName :
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="Enter your FullName"value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
                Cvv2 :
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="Enter your Cvv2" type="text"  maxLength="3"   value={Cvv2} onChange={(e) => setCvv2(e.target.value)}/>
        </div>
        {/* <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
            Expiry Date : 
            </label>
            <p className="text-xs opacity-50dark:border-gray-200 ml-1">
               {" "}
               {" "}
                
             </p>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="Month"  value={Month} onChange={(e) => setMonth(e.target.value)} maxLength={2}/>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="Year"  value={Year} onChange={(e) => setYear(e.target.value)} maxLength={2}/>
        </div> */}


<div className="flex justify-center items-center  text-slate-600">
             <label className='block text-gray-700 font-bold mb-2' htmlFor="" >Expiry Date :  </label>

               <input
                 style={{ color: "black" }}
                 value={Year}
                 onChange={(e) => setYear(e.target.value)}
                 placeholder="Year"
                 type="text"
                 maxLength={2}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               <span className="font-bold text-slate-500">/</span>
               <input
                 style={{ color: "black" }}
                 value={Month}
                 onChange={(e) => setMonth(e.target.value)}
                 placeholder="Month"
                 type="text"
                maxLength={2}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               />
            </div>
           





        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
            dynamicPassword : 
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type='password' placeholder="Enter your dynamicPassword "   value={Password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
            transferAmount :
            </label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type='text' placeholder="Enter your transferAmount" value={Inventory} onChange={(e) => setInventory(e.target.value)}/>
        </div>
        

        <div className="flex items-center justify-center mb-4">
            <button className="btn btn-success btn-wide"
                onClick={() => AddCard(Name, Number, Password, Cvv2, Year, Month, Inventory)}>
                  payment
            </button>
        </div>
    </div>
</div>

);
};

            

export default InputCard;
