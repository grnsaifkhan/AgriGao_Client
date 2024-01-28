import React, { useState } from 'react'
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import axios  from 'axios';

const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)
const [showPassword, setShowPassword] = useState(false)

const handleSubmit = async (e : any) => {
    e.preventDefault()
    setError(null)
    alert("You are Signed In")
    try {
        await axios.post(``, {
        email, password
    })
    } catch (e : any) {
        if(e.res.message){
            setError(e.res.message)
        }
    }
}
const toggleShowPassword = () => {
    setShowPassword(!showPassword)
}
  return (
    <div className="bg-emerald-500 h-auto mx-auto'">
    <h1 className='text-center text-3xl text-[#ffffff] font-extrabold pt-10 pb-10'>Sign In</h1>
    {error ?(<div>{error}</div>):('')}
    <form className="max-w-sm mx-auto w-full pb-8">
        <div className="flex flex-col pt-10">
            <label htmlFor="email" className="text-white">Email</label>
            <input type="email"  className="border-none mb-3 rounded-md"  onChange={e => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password" className="text-white">Password</label>
            <div className="relative">
            {/* type={showPassword ? "text" : "password"} onChange={e => setPassword(e.target.value)} value={password} */}
            <input type={showPassword ? "text" : "password"}  className="rounded-md border-none pr-48" onChange={e => setPassword(e.target.value)} value={password}/>
                {/* onClick={toggleShowPassword} */}
                <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPassword ? <FaEye/>  : <FaEyeSlash/>} </button>
            </div>
            <button type="submit" className="rounded-full text-lg leading-4 font-medium bg-blue-500 hover:bg-sky-700 h-8 mt-5 text-white" onClick={handleSubmit}>Sign In</button>
        </div>
    </form>
</div>
  )
}

export default Login