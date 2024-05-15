import React from 'react'

export default function HistoryCart({Number,
    name,
      cartCash,
      negetivePrice}) {
  return (
    <div>
        <div className="bg-success  mt-5  w-full p-5 my-0 mx-auto rounded-lg text-success  hover:shadow-2xl hover:text-white hover:bg-success ">
      <div className="flex flex-row justify-between items-center" >
        <h1 className="text-lg font-bold p-3">{`Number Card ${Number}`}</h1>
        <h2>{`price  ${negetivePrice}`}</h2>
      </div>
      <div  className="flex flex-row justify-between items-center mt-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2>{`cash ${cartCash}`}</h2>
      </div>
    </div>
    </div>
  )
}
