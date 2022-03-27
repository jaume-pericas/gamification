import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
import {
    Link
  } from "react-router-dom";

export default function Header({onClick}) {
    const [menuOpen] = React.useState(false);
    const {appState, appActions}  = useContext(AppContext);
    const {access_token} = appState;

    console.log(appState)

    let menu = <div className="lg:block">
                <ul className="inline-flex" >
                    <li className="nav-item"><Link className="px-4 font-bold" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="px-4 hover:text-gray-800" to="/login">login</Link></li>
                </ul>
            </div>;
    if(access_token != ''){
        menu = <div className=" lg:block">
                    <ul className="inline-flex" >
                        <li className="nav-item"><Link className="px-4 font-bold" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="px-4 hover:text-gray-800" to="/dashboard">Dashboard</Link></li>
                        <li>
                        <button id="dropdownNavbarLink" onClick={() => toggleMenu() } data-dropdown-toggle="dropdownNavbar" className="px-4 hover:text-gray-800" >CRUD</button>
                            <div id="dropdownNavbar" className="hidden absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Challenge</a>
                                </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><button className="px-4 hover:text-gray-800" onClick={() => appActions.logout()} >Logout</button></li>
                    </ul>
                    
                </div>;
    }


    return (
        <nav>
            <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                <div>
                <Link className="font-bold text-2xl lg:text-4xl alternative-font" to="/">
                    Gamification
                </Link>
                </div>
                {menu}
            </div>
        </nav>)


    function toggleMenu(){
        let el = document.querySelector('#dropdownNavbar');
        
        el.classList.toggle('hidden');
    }
}