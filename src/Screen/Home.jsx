import ReactDOM from "react-dom/client";
import InputCart from "../InputCart";
import Navbar from "../Navbar";
import Cart from "../Cart";
import Transaction from "../Transaction";
import Footer from "../Footer";
import React,{useState} from "react";
import { list } from "postcss";
import { BrowserRouter as Router, Routes,  Route, NavLink } from 'react-router-dom'

  import Historytransaction from "../Historytransaction";

export default function Home() {
  //   const [cardNumber, setCardNumber] = useState('');
  //  const [cardName, setCardName] = useState('');
  // const [cardCVV2, setCardCVV2] = useState('');
  // const [expiryDate, setExpiryDate] = useState('');
  //  const [dynamicPassword, setDynamicPassword] = useState('');
  //  const [transferAmount, setTransferAmount] = useState('');
  //  const [AddCard, setAddCard] = useState([]);


  //  const handlePayment = () => {
  //   const newcard = {
  //     cardNumber,
  //     cardName,
  //     transferAmount,
  //     transferDate: new Date().toLocaleString()
  //   };
  //   setAddCard([...AddCard, newcard]);

  // };


  // const [cardNumber3, setCardNumber3] = useState('');
  // const [cardName3, setCardName3] = useState('');
  // const [cardCVV23, setCardCVV23] = useState('');
  // const [expiryDate3, setExpiryDate3] = useState('');
  // const [dynamicPassword3, setDynamicPassword3] = useState('');
  // const [transferAmount3, setTransferAmount3] = useState('');
  // const [transactionHistory3, setTransactionHistory3] = useState([]);


  // const SelectCard = (item) => {
  //   const findCard =list.map((card)=>{
  //     return card.id === item.id;
  //   })
  //   console.log(findCard)

  //   if(findCard){
  //     setNumberCart(item.number),
  //     setCvv2Cart(item.cvv),
  //     setPasswordCart(item.password),
  //     setNameCart(item.name),
  //     // setMonthCart(item.month),
  //     setYearCart(item.year)
  //     setidCart(item.id)
  //   }
  // }

  // const handlePayment3 = () => {
  //   const newTransaction = {
  //     cardNumber3,
  //     cardName3,
  //     transferAmount3,
  //     transferDate3: new Date().toLocaleString()
  //   };
  //   setTransactionHistory3([...transactionHistory3, newTransaction]);

  // };


  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Cvv2, setCvv2] = useState("");
  const [Year, setYear] = useState("");
  const [Month, setMonth] = useState("");
  const [Password, setPassword] = useState("");
  const [Inventory, setInventory] = useState("");
  const [List, setList] = useState([]);
  const [idCart , setidCart]= useState("")



  const [NameCart, setNameCart] = useState("");
  const [NumberCart, setNumberCart] = useState("");
  const [Cvv2Cart, setCvv2Cart] = useState("");
  const [YearCart, setYearCart] = useState("");
  const [MonthCart, setMonthCart] = useState("");
  const [PasswordCart, setPasswordCart] = useState("");
  const [cartCash, setcartCash] = useState(0);
  const [HistoryList , setHistoryList] = useState([]);

  const SelectCard = (item) => {
    const findCard =List.map((card)=>{
      return card.id === item.id;
    })
    console.log(findCard)

    if(findCard){
      setNumberCart(item.number),
      setCvv2Cart(item.cvv),
      setPasswordCart(item.password),
      setNameCart(item.name),
      // setMonthCart(item.month),
      setYearCart(item.year)
      setidCart(item.id)
    }
  }


const AddCard =(name,number,password,cvv,year,month,inventory)=>{
const NewCard ={
  id:List.length + 1 ,
  name,
  number,
  password,
  cvv,
  year,
  month,
  inventory
}
console.log(NewCard)
  setList([...List,NewCard])
  setName("")
  setNumber("")
  setCvv2("")
  setYear("")
  setMonth("")
  setPassword("")
  setInventory("")

}



// const negetive = (negetivePrice , id) =>{
//   const NewInventor = List.find((card) => {
//     return card.id === id && card.Inventory >= negetivePrice
//     ? {...card , Inventory:card.Inventory - negetivePrice}
//     :card
//   });

//   NewInventor.map((item)=>{
//     if(item.id === idCart){
//       const t = {...item ,p:negetivePrice}
//       setHistory([...History , t])
//       console.log(History)
//     }
//   })

//   setList(NewInventor)
// }

const negetive = (negetivePrice , id) => {
  const newCash = List.map((card)=>{
    return card.id === id && card.inventory >= negetivePrice
    ?{...card , inventory: card.inventory - negetivePrice}
    :card;
  });

  newCash.map((item)=>{
    if(item.id === id){
      const t ={...item , p:negetivePrice};
      setHistoryList([...HistoryList , t])
      console.log(HistoryList)

    }
  })

  setList(newCash);
  }








  
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/Historytransaction" element={ <Historytransaction HistoryList={HistoryList}  />} />
        <Route path="/InputCart" element={<InputCart AddCard={AddCard} Name={Name} Number={Number} setNumber={setNumber} setName={setName} Cvv2={Cvv2} setCvv2={setCvv2} Year={Year} setYear={setYear} Month={Month} setMonth={setMonth} Password={Password} setPassword={setPassword} Inventory={Inventory} setInventory={setInventory}  />} />
        <Route path="/Transaction" element={<Transaction  negetive={()=>negetive(cartCash, idCart)} cartCash={cartCash} setcartCash={setcartCash} HistoryList={HistoryList}  setHistoryList={setHistoryList}  NumberCart={NumberCart} NameCart={NameCart} setNameCart={setNameCart} Cvv2Cart={Cvv2Cart} setCvv2Cart={setCvv2Cart} YearCart={YearCart} setYearCart={setYearCart}  MonthCart={MonthCart} setMonthCart={setMonthCart} PasswordCart={PasswordCart} setPasswordCart={setPasswordCart} List={List} />} />
      
      </Routes>
     
  
      {List.map((item) => {
        return (
        <Cart  Name={item.name} Number={item.number} Password={item.password} Cvv2={item.cvv} Year={item.year} Month={item.month} Inventory={item.inventory} SelectCard={()=>SelectCard(item)}/>
        )
      })}

      <Footer/>
    </div>
  )
}
