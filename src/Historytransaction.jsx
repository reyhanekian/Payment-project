import React from 'react'
import HistoryCart from './HistoryCart';

export default function Historytransaction({HistoryList} ) {



  return (
    <div className='container'>
    <div className='container mb-9  w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-2 bg-zinc-200 text-white p-10 px-10 border-solid border-2 rounded-3xl '>
    <div className=" mt-5 flex flex-col justify-start items-end pb-14 ">
      {
          HistoryList.map((item)=>{
         return  item != null ? (<HistoryCart Number={item.number} name={item.name} cartCash={item.cartCash} negetivePrice={item.p} />):null;
          })
      }
      </div>
    </div>
      
    
  </div>
  )
}
