import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <nav>
            <div className="flex justify-around items-center">
                {/* nav 1st  */}
                <div className="w-[100px] h-[100px] ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU" />
                </div>

                {/* nav 2nd */}
                <div className="">
                    <ul className="flex gap-10 text-xl font-semibold cursor-pointer ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;