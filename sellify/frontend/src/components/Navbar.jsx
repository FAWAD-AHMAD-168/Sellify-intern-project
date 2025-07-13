import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const naviagte = useNavigate();
    const Navigate= useNavigate();

    const token=localStorage.getItem("token")

    function handleClick () {
        
        naviagte('/login');
    }

    function logout(){
        localStorage.removeItem("token")
        Navigate("/login");
    }

    const linkClasses = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 
     ${isActive ? "text-black font-bold after:w-full" : "text-gray-600"} 
     hover:text-black
     after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black
     after:w-0 hover:after:w-full after:transition-all after:duration-300`;

  return (
   <header className='w-full flex justify-between items-center   p-4 border-b border-black  '> 
    <div className='flex items-center gap-2 text-black'> 
        <img src='../images/ssss.png' className='h-[40px] w-[40px] bg-white rounded-md'/>
        <h3 className=' font-bold text-2xl'>Sellify</h3>

    </div>

       <nav className='flex gap-10 text-lg font-semibold text-black'>  

        <NavLink to="/" className={linkClasses}>Home</NavLink>
              

        <NavLink to="/productlist" className={linkClasses}>Products</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/contacts" className={linkClasses}>Contact</NavLink>

       </nav>


{token ?  <button className='block w-[80px] text-white rounded px-1 py-2 bg-black  font-semibold hover:bg-gray-800 active:bg-gray-400 transition-all duration-300' onClick={logout}>Logout</button> 

: <button className='block w-[80px] text-white rounded px-1 py-2 bg-black  font-semibold hover:bg-gray-800 active:bg-gray-400 transition-all duration-300' onClick={handleClick}>Login</button>

}

       

   </header>
  )
}

export default Navbar