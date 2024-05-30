import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (

        <div className='flex flex-1 justify-center bg-black'>
            <Outlet />
        <div className="w-full bg-black">

        </div>
        </div>

    )
}
export {AuthLayout}