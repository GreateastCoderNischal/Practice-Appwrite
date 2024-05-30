import React from 'react'
import { useUser } from '../Context/User'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const user=useUser();
    console.log(user);
  return (
    <div className='h-[60px] bg-violet-800 text-bold text-[25px] text-white flex items-center'>
        <ul className="flex justify-between items-center w-full p-3">
            <li className='cursor-pointer p-2 hover:bg-white text-black rounded-lg'>Apppwrite Practice</li>
            <li className='cursor-pointer p-2 hover:bg-white text-black rounded-lg'>Contact</li>
            <li className='cursor-pointer p-2 hover:bg-white text-black rounded-lg'>About Us</li>
            <li className='cursor-pointer p-2 hover:bg-white text-black rounded-lg'>
                {
                    user.current ?
                    (
                        <span>
                        <button className='rounded-lg bg-red-500 p-1 m-1'
                        onClick={()=>{
                            user.logout()
                            .then(function(result){
                                console.log("done Logout ");
                                window.location.reload()
                            })
                            
                        }}
                        >Log Out</button>
                            {user.current.name && user.current.name.split(" ")[0]}
                        </span>
                    ):
                    
                     (
                        <Link to="/login">

                        <button>Log In</button>
                        </Link>
                    )
                }
            </li>
        </ul>

    </div>
  )
}

export default Navbar