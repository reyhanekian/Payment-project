import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
      <nav className="bg-white text-center dark:bg-neutral-800 lg:text-left pb-2  h-24 flex   content-between pt-2.5  justify-center items-center rounded shadow-inner shadow-zinc-800">
        
        <div className="ml-4">
        {/* <img src="./Assets/Img/PAYPAL.webp" alt="" className="h-16  w-32  mx-auto mb-2 mr-4"  /> */}

        </div>
        <ul className="flex justify-center gap-10  ">
          <li>
            <Link to="/InputCart" className="btn btn-success"> عملیات ثبت </Link>
          </li>
          <li>
            <Link to="/Transaction" className="btn btn-success"> تراکنش</Link>
          </li>
          <li>
            <Link to="/Historytransaction" className="btn btn-success"> تاریخچه تراکنش </Link>
          </li>
        </ul>
      </nav>                    
      <Outlet/>
      
    </>
  );
};

export default Navbar;

