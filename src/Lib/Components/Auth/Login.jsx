import React, { useState } from 'react'
import { useUser } from '../../Context/User'
import { useNavigate } from 'react-router-dom';
function Login() {
    const { user, logout, login, signUp } = useUser();
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const Navigate=useNavigate()
    return (
        <form className='flex flex-col w-full h-full p-10 text-white'
            onSubmit={(e) => {
                e.preventDefault()
                login(email, password);
                console.log("has been login")
                Navigate("/")
                window.location.reload()
            }}
        >
            <div>
                <h1 className='font-main font-bold text-[25px] my-5 text-center'>
                    ValorGram
                </h1>
            </div>
            <div className='m-3'>
                <h1 className='font-main font-bold m-2 text-[35px] text-center'>
                    Log In To Your Account
                </h1>
                <p className='text-purple-400 text-center'>
                    Welcome back! Please enter your details.
                </p>
            </div>
            <div className='m-4'>

                <div className="form-outline mb-4">
                    <label className="form-label"
                    >Email address</label>
                    <input
                        value={email} onChange={(event) => setEmail(event.target.value)}
                        type="email" id="form2Example1" className="form-control" />
                </div>

                <div className="form-outline mb-1">
                    <label className="form-label" >Password</label>
                    <input type="password"
                        value={password} onChange={(event) => setPassword(event.target.value)}
                        id="form2Example2" className="form-control" />
                </div>
                <button 
                onClick={function(){
                    console.log(user)
                }}
                type="submit" data-mdb-button-init data-mdb-ripple-init className="mt-4 btn btn-primary btn-block mb-4 w-full">Sign in</button>
                <div className='text-center'>Don't Have Account ? <span className='text-purple-800 cursor-pointer'>SignUp</span></div>
            </div>
        </form>
    )
}

export default Login
